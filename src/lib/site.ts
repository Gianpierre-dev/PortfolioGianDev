// URL pública canónica del sitio. Fuente única para metadataBase, canonical,
// Open Graph, sitemap, robots y JSON-LD.
// NEXT_PUBLIC_SITE_URL se inyecta en build; si falta, se usa el dominio de Railway
// (nunca localhost, que terminaría publicado en las previews de WhatsApp).
const URL_PRODUCCION = 'https://portfolio-gian-production.up.railway.app';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || URL_PRODUCCION).replace(/\/+$/, '');

export const SITE_NOMBRE = 'Gianpierre Terrazas';

export const SITE_TITULO = 'Gianpierre Terrazas | Sistemas web a medida para empresas';

export const SITE_DESCRIPCION =
  'Desarrollador Full Stack en Perú. Construyo sistemas web a medida para empresas: planillas y RRHH, procesos SUNAT, estudios contables, tiendas online y sitios con panel propio.';

// Destino del enlace "saltar al contenido" (vive aquí y no en el componente
// cliente para poder usarlo también desde page.tsx, que es server component).
export const ID_CONTENIDO_PRINCIPAL = 'contenido-principal';

export const SITE_POSICIONAMIENTO =
  'Sistemas web a medida que ordenan y automatizan el trabajo de tu empresa';
