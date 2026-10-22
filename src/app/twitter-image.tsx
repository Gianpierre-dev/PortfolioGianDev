import { generarImagenOg, OG_ALT } from '@/lib/og-imagen';

// Metadatos de la imagen: se declaran en este archivo (no se reexportan) para que
// Next.js los detecte al generar las etiquetas twitter:image.
export const alt = OG_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return generarImagenOg();
}
