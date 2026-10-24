import { ContactForm } from '@/types';

// Número de WhatsApp con código de país (Perú +51), sin "+" ni espacios.
const WHATSAPP_NUMERO = '51961170946';

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}`;

// Enlace de WhatsApp con un primer mensaje ya escrito: el cliente solo tiene
// que tocar "Enviar", sin pensar cómo empezar la conversación.
export const urlWhatsapp = (mensaje: string): string =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(mensaje)}`;

// Resultado del envío del formulario, alineado con los códigos de /api/contacto.
export type ResultadoContacto = 'enviado' | 'limite' | 'no-configurado' | 'error';

// Envía el formulario por correo a través de /api/contacto. `sitioWeb` es el
// campo trampa contra bots: una persona lo deja vacío.
export async function enviarFormularioContacto(
  datos: ContactForm,
  sitioWeb: string
): Promise<ResultadoContacto> {
  try {
    const respuesta = await fetch('/api/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...datos, sitioWeb }),
    });
    if (respuesta.ok) return 'enviado';
    if (respuesta.status === 429) return 'limite';
    if (respuesta.status === 503) return 'no-configurado';
    return 'error';
  } catch {
    return 'error';
  }
}
