import { NextRequest, NextResponse } from 'next/server';
import { personalInfo } from '@/data/personal';
import { SITE_URL } from '@/lib/site';

// Envío del formulario de contacto por correo con la API REST de Resend
// (sin SDK: una sola llamada fetch). Variables de entorno:
// - RESEND_API_KEY: obligatoria; sin ella el endpoint responde 503 y el
//   formulario ofrece WhatsApp como alternativa.
// - CONTACTO_EMAIL_DESTINO: opcional. Sin dominio verificado, Resend solo
//   entrega al email de la cuenta, por eso el valor por defecto es el personal.
// - CONTACTO_EMAIL_REMITENTE: opcional; requiere un dominio verificado en Resend.
//
// Nunca enviar una copia o confirmación al email del visitante: convertiría
// el endpoint en un relay de spam hacia terceros.

const RESEND_URL = 'https://api.resend.com/emails';
const REMITENTE_POR_DEFECTO = 'Portfolio <onboarding@resend.dev>';
const TIMEOUT_RESEND_MS = 10_000;

// Un mensaje legítimo pesa ~20 KB en el peor caso de UTF-8.
const CUERPO_MAXIMO_BYTES = 32 * 1024;
const LIMITES = { nombre: 120, email: 160, asunto: 150, mensaje: 5000 } as const;
const EMAIL_VALIDO = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// C0, DEL, NEL y los separadores de línea y párrafo Unicode (U+2028, U+2029).
// Se arma con códigos de carácter: escritos literalmente, U+2028/2029 cortan
// el literal de la regex.
const CARACTERES_CONTROL = new RegExp(
  '[' +
    String.fromCharCode(0) + '-' + String.fromCharCode(0x1f) +
    String.fromCharCode(0x7f, 0x85, 0x2028, 0x2029) +
    ']+',
  'g'
);

// Límites de envío en memoria del proceso (una sola instancia en Railway; se
// reinician con cada despliegue). El tope global protege la cuota de Resend
// aunque se roten IPs; si se alcanza, el formulario ofrece WhatsApp.
const VENTANA_MS = 10 * 60 * 1000;
const ENVIOS_POR_IP = 3;
const ENVIOS_GLOBALES = 20;
const IPS_ANTES_DE_PURGAR = 500;
const enviosPorIp = new Map<string, number[]>();
let enviosGlobales: number[] = [];

const vigentes = (marcas: number[], ahora: number) => marcas.filter((t) => ahora - t < VENTANA_MS);

function purgarExpirados(ahora: number): void {
  for (const [ip, marcas] of enviosPorIp) {
    const activas = vigentes(marcas, ahora);
    if (activas.length === 0) enviosPorIp.delete(ip);
    else enviosPorIp.set(ip, activas);
  }
}

// Se reserva ANTES del await a Resend: las peticiones concurrentes ya ven el
// cupo ocupado y no pueden colarse todas a la vez.
function reservarCupo(ip: string, ahora: number): boolean {
  if (enviosPorIp.size > IPS_ANTES_DE_PURGAR) purgarExpirados(ahora);
  enviosGlobales = vigentes(enviosGlobales, ahora);
  const marcas = vigentes(enviosPorIp.get(ip) ?? [], ahora);
  if (marcas.length >= ENVIOS_POR_IP || enviosGlobales.length >= ENVIOS_GLOBALES) return false;
  enviosPorIp.set(ip, [...marcas, ahora]);
  enviosGlobales.push(ahora);
  return true;
}

// Si Resend falla, el cupo se devuelve: un error no castiga al visitante.
function liberarCupo(ip: string, ahora: number): void {
  const quitarUna = (marcas: number[]) => {
    const indice = marcas.indexOf(ahora);
    return indice === -1 ? marcas : [...marcas.slice(0, indice), ...marcas.slice(indice + 1)];
  };
  enviosGlobales = quitarUna(enviosGlobales);
  const restantes = quitarUna(enviosPorIp.get(ip) ?? []);
  if (restantes.length === 0) enviosPorIp.delete(ip);
  else enviosPorIp.set(ip, restantes);
}

// Railway documenta X-Real-IP como la IP del cliente; X-Forwarded-For queda
// como respaldo. Si algún día hay Cloudflare delante, usar CF-Connecting-IP.
function ipDelCliente(req: NextRequest): string {
  const ip =
    req.headers.get('x-real-ip')?.trim() ||
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'desconocida';
  return claveDeIp(ip.replace(/^::ffff:/, ''));
}

// Un host IPv6 suele controlar un /64 completo: se limita por prefijo.
function claveDeIp(ip: string): string {
  if (!ip.includes(':')) return ip;
  const [cabeza = '', cola = ''] = ip.split('::');
  const izquierda = cabeza ? cabeza.split(':') : [];
  const derecha = cola ? cola.split(':') : [];
  const relleno = ip.includes('::')
    ? Array<string>(Math.max(0, 8 - izquierda.length - derecha.length)).fill('0')
    : [];
  return `${[...izquierda, ...relleno, ...derecha].slice(0, 4).join(':')}::/64`;
}

class CuerpoDemasiadoGrande extends Error {}

// Los route handlers no limitan el tamaño del body: se lee el stream con tope
// para no cargar en memoria un POST enorme antes de validar nada.
async function leerJsonAcotado(req: NextRequest): Promise<unknown> {
  if (Number(req.headers.get('content-length') ?? 0) > CUERPO_MAXIMO_BYTES) {
    throw new CuerpoDemasiadoGrande();
  }
  if (!req.body) throw new SyntaxError('Cuerpo vacío');

  const lector = req.body.getReader();
  const partes: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await lector.read();
    if (done) break;
    total += value.byteLength;
    if (total > CUERPO_MAXIMO_BYTES) {
      await lector.cancel();
      throw new CuerpoDemasiadoGrande();
    }
    partes.push(value);
  }
  return JSON.parse(Buffer.concat(partes).toString('utf8'));
}

function escaparHtml(valor: string): string {
  return valor
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function texto(valor: unknown): string {
  return typeof valor === 'string' ? valor.trim() : '';
}

interface DatosContacto {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

function validar(cuerpo: Record<string, unknown>): DatosContacto | null {
  const datos = {
    nombre: texto(cuerpo.name).replace(CARACTERES_CONTROL, ' '),
    email: texto(cuerpo.email),
    // El asunto va a una cabecera del correo: sin caracteres de control.
    asunto: texto(cuerpo.subject).replace(CARACTERES_CONTROL, ' '),
    mensaje: texto(cuerpo.message),
  };

  const valido =
    datos.nombre.length >= 2 && datos.nombre.length <= LIMITES.nombre &&
    datos.email.length <= LIMITES.email && EMAIL_VALIDO.test(datos.email) &&
    datos.asunto.length >= 5 && datos.asunto.length <= LIMITES.asunto &&
    datos.mensaje.length >= 10 && datos.mensaje.length <= LIMITES.mensaje;

  return valido ? datos : null;
}

function respuesta(estado: number, codigo: string) {
  return NextResponse.json({ ok: estado < 300, codigo }, { status: estado });
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return respuesta(503, 'no-configurado');

  // Solo JSON y solo desde el propio sitio: con application/json el navegador
  // exige preflight, y sin cabeceras CORS otro sitio no puede enviar el formulario.
  const tipo = req.headers.get('content-type')?.split(';')[0]?.trim().toLowerCase();
  if (tipo !== 'application/json') return respuesta(415, 'invalido');
  const origen = req.headers.get('origin');
  if (origen && origen !== new URL(SITE_URL).origin) return respuesta(403, 'invalido');

  let cuerpo: unknown;
  try {
    cuerpo = await leerJsonAcotado(req);
  } catch (error) {
    return respuesta(error instanceof CuerpoDemasiadoGrande ? 413 : 400, 'invalido');
  }
  if (typeof cuerpo !== 'object' || cuerpo === null || Array.isArray(cuerpo)) {
    return respuesta(400, 'invalido');
  }
  const campos = cuerpo as Record<string, unknown>; // ya se verificó que es un objeto

  // Campo trampa: invisible para personas, los bots lo completan. Se responde
  // como éxito para no darles pistas.
  if (texto(campos.sitioWeb) !== '') return respuesta(200, 'enviado');

  const datos = validar(campos);
  if (!datos) return respuesta(400, 'invalido');

  const ip = ipDelCliente(req);
  const ahora = Date.now();
  if (!reservarCupo(ip, ahora)) return respuesta(429, 'limite');

  const html = `
    <p><strong>Nombre:</strong> ${escaparHtml(datos.nombre)}</p>
    <p><strong>Email:</strong> ${escaparHtml(datos.email)}</p>
    <p><strong>Asunto:</strong> ${escaparHtml(datos.asunto)}</p>
    <p style="white-space:pre-wrap">${escaparHtml(datos.mensaje)}</p>
    <hr><p style="color:#6b7280;font-size:12px">Enviado desde el formulario del portfolio. Responde a este correo para contestar al remitente.</p>
  `;

  try {
    const envio = await fetch(RESEND_URL, {
      method: 'POST',
      signal: AbortSignal.timeout(TIMEOUT_RESEND_MS),
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACTO_EMAIL_REMITENTE || REMITENTE_POR_DEFECTO,
        to: [process.env.CONTACTO_EMAIL_DESTINO || personalInfo.email],
        reply_to: datos.email,
        subject: `Portfolio: ${datos.asunto}`,
        text: `Nombre: ${datos.nombre}\nEmail: ${datos.email}\nAsunto: ${datos.asunto}\n\n${datos.mensaje}`,
        html,
      }),
    });

    if (!envio.ok) {
      console.error('Resend rechazó el envío:', envio.status, (await envio.text()).slice(0, 500));
      liberarCupo(ip, ahora);
      return respuesta(502, 'error');
    }
  } catch (error) {
    console.error('No se pudo conectar con Resend:', error);
    liberarCupo(ip, ahora);
    return respuesta(502, 'error');
  }

  return respuesta(200, 'enviado');
}
