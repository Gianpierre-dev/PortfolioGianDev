// URL pública canónica del sitio. Fuente única para metadataBase, canonical,
// Open Graph, sitemap, robots y JSON-LD.
// NEXT_PUBLIC_SITE_URL se inyecta en build; si falta, se usa el dominio de Railway
// (nunca localhost, que terminaría publicado en las previews de WhatsApp).
const URL_PRODUCCION = 'https://portfolio-gian-production.up.railway.app';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || URL_PRODUCCION).replace(/\/+$/, '');

export const SITE_NOMBRE = 'Gianpierre Terrazas';

export const SITE_TITULO = 'Gianpierre Terrazas | Sistemas de planillas, RRHH y automatización SUNAT';

export const SITE_DESCRIPCION =
  'Desarrollador Full Stack en Perú. Construyo sistemas de planillas, RRHH y automatización de procesos SUNAT para empresas peruanas, con TypeScript de punta a punta.';

// Destino del enlace "saltar al contenido" (vive aquí y no en el componente
// cliente para poder usarlo también desde page.tsx, que es server component).
export const ID_CONTENIDO_PRINCIPAL = 'contenido-principal';

export const SITE_POSICIONAMIENTO =
  'Sistemas de planillas, RRHH y automatización SUNAT para empresas peruanas';
