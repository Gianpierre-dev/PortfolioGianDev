import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Sitio de una sola página: los fragmentos (#about, #projects...) no son URLs
// distintas para los buscadores, así que solo se publica la raíz.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
