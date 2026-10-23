import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { SITE_NOMBRE, SITE_POSICIONAMIENTO } from '@/lib/site';

// Imagen de previsualización compartida por Open Graph y Twitter.
// Es la que se ve al enviar el enlace por WhatsApp, LinkedIn o correo.
export const OG_TAMANO = { width: 1200, height: 630 };
export const OG_ALT = `${SITE_NOMBRE} — ${SITE_POSICIONAMIENTO}`;

// Inter (la misma fuente del sitio) en 400 y 700. Sin fuentes propias, next/og
// solo trae un peso regular y fontWeight: 700 no tiene efecto.
const DIR_FUENTES = join(process.cwd(), 'src/assets/fonts');

export async function generarImagenOg(): Promise<ImageResponse> {
  const [interRegular, interBold] = await Promise.all([
    readFile(join(DIR_FUENTES, 'inter-latin-400.woff')),
    readFile(join(DIR_FUENTES, 'inter-latin-700.woff')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#030712',
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          color: '#ffffff',
          fontFamily: 'Inter',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
              borderRadius: 14,
              backgroundColor: '#1f2937',
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            gt<span style={{ color: '#3b82f6' }}>_</span>
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#9ca3af' }}>Full Stack Developer · Perú</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, letterSpacing: -1 }}>
            {SITE_NOMBRE}
          </div>
          <div style={{ display: 'flex', fontSize: 40, lineHeight: 1.3, color: '#60a5fa', maxWidth: 1000 }}>
            {SITE_POSICIONAMIENTO}
          </div>
        </div>

        <div style={{ display: 'flex', width: 120, height: 8, backgroundColor: '#2563eb' }} />
      </div>
    ),
    {
      ...OG_TAMANO,
      fonts: [
        { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
      ],
    }
  );
}
