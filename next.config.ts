import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  // Las imágenes OG leen las fuentes con fs; el output standalone solo copia
  // los archivos que detecta en imports, así que se incluyen de forma explícita.
  outputFileTracingIncludes: {
    '/opengraph-image': ['./src/assets/fonts/**'],
    '/twitter-image': ['./src/assets/fonts/**'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
