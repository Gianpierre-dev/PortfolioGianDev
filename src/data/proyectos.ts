// Proyectos curados manualmente. Los sistemas privados (para empresas) no
// exponen repositorio ni demo: se documentan como case studies.
// Los textos (título, descripción y nota técnica) viven en el diccionario i18n,
// keyed por id. Aquí solo permanecen los datos técnicos no traducibles.

export type CategoriaProyecto = 'fullstack' | 'frontend' | 'automation';
export type EstadoProyecto = 'live' | 'development' | 'demo';

export interface ProyectoBase {
  id: number;
  category: CategoriaProyecto;
  featured: boolean;
  status: EstadoProyecto;
  tech: string[];
  // Nombre del repositorio público en GitHub; vacío si el proyecto es privado.
  repoName: string;
  private: boolean;
  links: { demo: string; code: string };
  year: string;
}

// Métricas públicas del repositorio, obtenidas en el servidor (src/lib/github.ts).
export interface MetricasRepo {
  stars: number;
  forks: number;
  lastUpdate: string;
}

export const proyectos: ProyectoBase[] = [
  {
    id: 1,
    category: 'fullstack',
    featured: true,
    status: 'development',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'Railway', 'Wasabi S3'],
    repoName: '',
    private: true,
    links: { demo: '', code: '' },
    year: '2026',
  },
  {
    id: 2,
    category: 'fullstack',
    featured: false,
    status: 'live',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Turborepo', 'Redis'],
    repoName: '',
    private: true,
    links: { demo: '', code: '' },
    year: '2026',
  },
  {
    id: 3,
    category: 'fullstack',
    featured: false,
    status: 'live',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'Railway'],
    repoName: '',
    private: true,
    links: { demo: '', code: '' },
    year: '2026',
  },
  {
    id: 4,
    category: 'automation',
    featured: false,
    status: 'development',
    tech: ['Python', 'Playwright', 'PySide6', 'SQLAlchemy', 'SQLite'],
    repoName: 'Sistema-de-automatizaciones-Sunat-',
    private: false,
    links: {
      demo: '',
      code: 'https://github.com/Gianpierre-dev/Sistema-de-automatizaciones-Sunat-',
    },
    year: '2026',
  },
  {
    id: 5,
    category: 'fullstack',
    featured: false,
    status: 'development',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'Astro', 'React', 'Tailwind CSS'],
    repoName: 'TeachGenius_Frontend',
    private: false,
    links: {
      demo: '',
      code: 'https://github.com/Gianpierre-dev/TeachGenius_Frontend',
    },
    year: '2026',
  },
  {
    id: 6,
    category: 'fullstack',
    featured: false,
    status: 'development',
    tech: ['React', 'TypeScript', 'Zustand', 'Spring Boot', 'Wasabi S3'],
    repoName: 'Tonin-Web',
    private: false,
    links: {
      demo: '',
      code: 'https://github.com/Gianpierre-dev/Tonin-Web',
    },
    year: '2026',
  },
  {
    id: 8,
    category: 'frontend',
    featured: false,
    status: 'live',
    tech: ['TypeScript', 'Vite', 'Tailwind CSS'],
    repoName: 'IngecemWeb',
    private: false,
    links: {
      demo: 'https://ingecemperu.com',
      code: 'https://github.com/Gianpierre-dev/IngecemWeb',
    },
    year: '2025',
  },
];
