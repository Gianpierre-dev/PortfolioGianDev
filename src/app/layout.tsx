import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gianpierre Terrazas - Portfolio',
  description: 'Desarrollador Full Stack especializado en Python, PHP, JavaScript y Java. Creando soluciones web escalables y modernas.',
  keywords: ['Desarrollador Full Stack', 'Python', 'PHP', 'JavaScript', 'Java', 'React', 'Next.js'],
  authors: [{ name: 'Gianpierre Terrazas Tello' }],
  creator: 'Gianpierre Terrazas Tello',
  openGraph: {
    title: 'Gianpierre Terrazas - Portfolio',
    description: 'Desarrollador Full Stack especializado en Python, PHP, JavaScript y Java',
    url: 'https://tu-dominio.vercel.app',
    siteName: 'Gianpierre Terrazas Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gianpierre Terrazas Portfolio',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gianpierre Terrazas - Portfolio',
    description: 'Desarrollador Full Stack especializado en Python, PHP, JavaScript y Java',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
