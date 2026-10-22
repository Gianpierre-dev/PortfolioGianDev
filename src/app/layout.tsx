import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import SmoothScroll from '@/components/SmoothScroll';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { personalInfo, socialLinks } from '@/data/personal';
import { es } from '@/i18n/es';
import { SITE_DESCRIPCION, SITE_NOMBRE, SITE_TITULO, SITE_URL } from '@/lib/site';

const inter = Inter({ subsets: ['latin'] });

// og:image y twitter:image los generan src/app/opengraph-image.tsx y
// src/app/twitter-image.tsx; sus URLs absolutas salen de metadataBase.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITULO,
  description: SITE_DESCRIPCION,
  keywords: [
    'sistema de planillas',
    'software de planillas Perú',
    'sistema de RRHH',
    'automatización SUNAT',
    'sistemas para estudios contables',
    'desarrollador full stack Perú',
    'desarrollo de software a medida',
    'TypeScript',
    'Next.js',
    'NestJS',
  ],
  authors: [{ name: personalInfo.name, url: SITE_URL }],
  creator: personalInfo.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_TITULO,
    description: SITE_DESCRIPCION,
    url: '/',
    siteName: SITE_NOMBRE,
    locale: 'es_PE',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITULO,
    description: SITE_DESCRIPCION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Datos estructurados (schema.org): la persona y el servicio profesional que ofrece.
// Solo usa datos existentes de src/data/personal.ts y del diccionario de servicios.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#persona`,
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      description: personalInfo.bio,
      email: `mailto:${personalInfo.email}`,
      telephone: personalInfo.phone,
      image: `${SITE_URL}${personalInfo.avatarUrl}`,
      url: SITE_URL,
      address: { '@type': 'PostalAddress', addressCountry: 'PE' },
      sameAs: socialLinks.filter((social) => social.icon !== 'mail').map((social) => social.url),
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#servicio`,
      name: `${SITE_NOMBRE} — ${personalInfo.title}`,
      description: SITE_DESCRIPCION,
      url: SITE_URL,
      email: personalInfo.email,
      telephone: personalInfo.phone,
      image: `${SITE_URL}/opengraph-image`,
      address: { '@type': 'PostalAddress', addressCountry: 'PE' },
      areaServed: { '@type': 'Country', name: 'Perú' },
      founder: { '@id': `${SITE_URL}/#persona` },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: es.servicios.titulo,
        itemListElement: es.servicios.items.map((servicio) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: servicio.titulo,
            description: servicio.beneficio,
          },
        })),
      },
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// El tema lo resuelve next-themes con su propio script anti-parpadeo; no se
// duplica aquí para no tener dos fuentes de verdad con defaults distintos.
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
