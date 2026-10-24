// Proyectos curados manualmente. Los sistemas privados (para empresas) no
// exponen repositorio ni demo: se documentan con sus datos clave.
// Los textos (título, descripción, nota técnica y datos clave) viven en el
// diccionario i18n, keyed por id. Aquí solo permanecen los datos técnicos.

export type EstadoProyecto = 'live' | 'development' | 'demo';

// 'cliente': trabajo hecho para una empresa o marca; es la prueba principal.
// 'propio': productos y herramientas propias; se muestran plegados.
export type AmbitoProyecto = 'cliente' | 'propio';

export interface ProyectoBase {
  id: number;
  ambito: AmbitoProyecto;
  status: EstadoProyecto;
  tech: string[];
  // Nombre del repositorio público en GitHub; vacío si el proyecto es privado.
  repoName: string;
  private: boolean;
  links: { demo: string; code: string };
  // Captura del sitio en vivo (public/images/proyectos, 1280x800). Solo los
  // proyectos con sitio público la tienen.
  imagen?: string;
}

// Métricas públicas del repositorio, obtenidas en el servidor (src/lib/github.ts).
export interface MetricasRepo {
  stars: number;
  forks: number;
  lastUpdate: string;
}

// El orden del array es el orden en pantalla: primero lo que está en producción.
export const proyectos: ProyectoBase[] = [
  {
    id: 2,
    ambito: 'cliente',
    status: 'live',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Turborepo', 'Redis'],
    repoName: '',
    private: true,
    links: { demo: '', code: '' },
  },
  {
    id: 3,
    ambito: 'cliente',
    status: 'live',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'Railway'],
    repoName: '',
    private: true,
    links: { demo: '', code: '' },
  },
  {
    id: 1,
    ambito: 'cliente',
    status: 'development',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'Railway', 'Wasabi S3'],
    repoName: '',
    private: true,
    links: { demo: '', code: '' },
  },
  {
    id: 9,
    ambito: 'cliente',
    status: 'live',
    tech: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'S3', 'JWT'],
    repoName: 'ValentinoBenites',
    private: false,
    links: {
      demo: 'https://valentinobenites.com',
      code: 'https://github.com/Gianpierre-dev/ValentinoBenites',
    },
    imagen: '/images/proyectos/valentino-benites.webp',
  },
  {
    id: 12,
    ambito: 'cliente',
    status: 'live',
    tech: ['Astro', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'S3'],
    repoName: 'Human-Touch-Books',
    private: false,
    links: {
      demo: 'https://editorialhtb.com',
      code: 'https://github.com/Gianpierre-dev/Human-Touch-Books',
    },
    imagen: '/images/proyectos/human-touch-books.webp',
  },
  {
    id: 10,
    ambito: 'cliente',
    status: 'live',
    tech: ['Astro', 'Tailwind CSS'],
    repoName: '',
    private: false,
    links: { demo: 'https://tienda-production-3860.up.railway.app', code: '' },
    imagen: '/images/proyectos/tlacuache-store.webp',
  },
  {
    id: 11,
    ambito: 'cliente',
    status: 'live',
    tech: ['AlpineJS', 'Tailwind CSS', 'SEO'],
    repoName: '',
    private: false,
    links: { demo: 'https://mrsif.com.pe', code: '' },
    imagen: '/images/proyectos/mr-sif.webp',
  },
  {
    id: 4,
    ambito: 'propio',
    status: 'development',
    tech: ['Python', 'Playwright', 'PySide6', 'SQLAlchemy', 'SQLite'],
    repoName: 'Sistema-de-automatizaciones-Sunat-',
    private: false,
    links: {
      demo: '',
      code: 'https://github.com/Gianpierre-dev/Sistema-de-automatizaciones-Sunat-',
    },
  },
  {
    id: 5,
    ambito: 'propio',
    status: 'development',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'Astro', 'React', 'Tailwind CSS'],
    repoName: 'TeachGenius_Frontend',
    private: false,
    links: {
      demo: '',
      code: 'https://github.com/Gianpierre-dev/TeachGenius_Frontend',
    },
  },
  {
    id: 6,
    ambito: 'propio',
    status: 'development',
    tech: ['React', 'TypeScript', 'Zustand', 'Spring Boot', 'Wasabi S3'],
    repoName: 'Tonin-Web',
    private: false,
    links: {
      demo: '',
      code: 'https://github.com/Gianpierre-dev/Tonin-Web',
    },
  },
];
