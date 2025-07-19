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

interface RootLayoutProps {
  children: React.ReactNode;
}

const themeScript = `
  try {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } catch (_) {}
`;

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
