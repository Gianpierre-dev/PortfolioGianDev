'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useIdioma } from '@/i18n/LanguageProvider';
import { EASE_SITE } from '@/lib/motion';
import type { Diccionario, Idioma } from '@/i18n/types';
import {
  ExternalLink,
  Github,
  Star,
  Code2,
  Monitor,
  Lock,
  Database,
  Zap,
  GitBranch,
  Clock,
  Bot
} from 'lucide-react';

// Proyectos curados manualmente. Los sistemas privados (para empresas) no
// exponen repositorio ni demo: se documentan como case studies.
// Los textos (description/longDescription) viven en el diccionario i18n,
// keyed por id. Aquí solo permanecen los datos técnicos no traducibles.
const staticProjects = [
  {
    id: 1,
    title: "Sistema de Planillas MultiEmpresa",
    category: "fullstack",
    featured: true,
    status: "development",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS", "Railway", "Wasabi S3"],
    repoName: "",
    private: true,
    links: { demo: "", code: "" },
    year: "2026"
  },
  {
    id: 2,
    title: "SIGEMYPE",
    category: "fullstack",
    featured: false,
    status: "live",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Turborepo", "Redis"],
    repoName: "",
    private: true,
    links: { demo: "", code: "" },
    year: "2026"
  },
  {
    id: 3,
    title: "Sistema de RRHH MultiEmpresa",
    category: "fullstack",
    featured: false,
    status: "live",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS", "Railway"],
    repoName: "",
    private: true,
    links: { demo: "", code: "" },
    year: "2026"
  },
  {
    id: 4,
    title: "Automatización SUNAT",
    category: "automation",
    featured: false,
    status: "development",
    tech: ["Python", "Playwright", "PySide6", "SQLAlchemy", "SQLite"],
    repoName: "Sistema-de-automatizaciones-Sunat-",
    private: false,
    links: {
      demo: "",
      code: "https://github.com/Gianpierre-dev/Sistema-de-automatizaciones-Sunat-"
    },
    year: "2026"
  },
  {
    id: 5,
    title: "TeachGenius",
    category: "fullstack",
    featured: false,
    status: "development",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Astro", "React", "Tailwind CSS"],
    repoName: "TeachGenius_Frontend",
    private: false,
    links: {
      demo: "",
      code: "https://github.com/Gianpierre-dev/TeachGenius_Frontend"
    },
    year: "2026"
  },
  {
    id: 6,
    title: "Tonin",
    category: "fullstack",
    featured: false,
    status: "development",
    tech: ["React", "TypeScript", "Zustand", "Spring Boot", "Wasabi S3"],
    repoName: "Tonin-Web",
    private: false,
    links: {
      demo: "",
      code: "https://github.com/Gianpierre-dev/Tonin-Web"
    },
    year: "2026"
  },
  {
    id: 7,
    title: "Portfolio Gianpierre",
    category: "frontend",
    featured: false,
    status: "live",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "GitHub API"],
    repoName: "PortfolioGianDev",
    private: false,
    links: {
      demo: "https://gianpierre-dev.vercel.app",
      code: "https://github.com/Gianpierre-dev/PortfolioGianDev"
    },
    year: "2025"
  },
  {
    id: 8,
    title: "Ingecem Web",
    category: "frontend",
    featured: false,
    status: "live",
    tech: ["TypeScript", "Vite", "Tailwind CSS"],
    repoName: "IngecemWeb",
    private: false,
    links: {
      demo: "https://ingecemperu.com",
      code: "https://github.com/Gianpierre-dev/IngecemWeb"
    },
    year: "2025"
  }
];

const categories = [
  { id: 'all', icon: Code2 },
  { id: 'fullstack', icon: Database },
  { id: 'frontend', icon: Monitor },
  { id: 'automation', icon: Bot }
] as const;

// Un solo indicador de estado por fila: punto de color + etiqueta.
const statusStyles = {
  live: { dot: 'bg-emerald-500', text: 'text-emerald-700 dark:text-emerald-400' },
  development: { dot: 'bg-amber-500', text: 'text-amber-700 dark:text-amber-400' },
  demo: { dot: 'bg-purple-500', text: 'text-purple-700 dark:text-purple-400' }
};

type StaticProject = (typeof staticProjects)[number];

interface GitHubRepoData {
  id: number;
  stars: number;
  forks: number;
  lastUpdate: string;
}

type ProjectWithMetrics = StaticProject & {
  metrics: { stars: number; forks: number };
  lastUpdate?: string;
};

type EstadoProyecto = keyof typeof statusStyles;

// Hook para obtener datos de GitHub automáticamente
function useGitHubData() {
  const [githubData, setGithubData] = useState<Record<number, GitHubRepoData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const repoPromises = staticProjects.map(async (project) => {
          if (project.repoName && project.links.code) {
            // Extraer usuario y repo de la URL de GitHub
            const match = project.links.code.match(/github\.com\/([^\/]+)\/([^\/]+)/);
            if (match) {
              const [, owner, repo] = match;
              const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
              if (response.ok) {
                const data = await response.json();
                return {
                  id: project.id,
                  stars: data.stargazers_count,
                  forks: data.forks_count,
                  lastUpdate: data.updated_at
                };
              }
            }
          }
          return null;
        });

        const results = await Promise.all(repoPromises);
        const dataMap = results.reduce<Record<number, GitHubRepoData>>((acc, item) => {
          if (item) {
            acc[item.id] = item;
          }
          return acc;
        }, {});

        setGithubData(dataMap);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return { githubData, loading };
}

// Antigüedad del último push en lenguaje natural ("hace 3 días").
// Se calcula en cliente tras el fetch, así que no hay riesgo de hydration mismatch.
function formatearAntiguedad(iso: string, idioma: Idioma): string {
  const dias = Math.round((Date.now() - new Date(iso).getTime()) / 86_400_000);
  const rtf = new Intl.RelativeTimeFormat(idioma, { numeric: 'auto' });

  if (dias < 30) return rtf.format(-dias, 'day');

  const meses = Math.round(dias / 30);
  if (meses < 12) return rtf.format(-meses, 'month');

  return rtf.format(-Math.round(meses / 12), 'year');
}

export default function Projects() {
  const { t, idioma } = useIdioma();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const listaRef = useRef<HTMLUListElement>(null);
  // El reveal se controla con un flag propio, no con whileInView por fila:
  // whileInView + once:true no alcanza a las filas que se montan después
  // (al cambiar de filtro) y las dejaba en opacity 0 de forma permanente.
  const listaEnVista = useInView(listaRef, { once: true, amount: 0.05 });
  const { githubData, loading } = useGitHubData();

  // Combinar datos estáticos con datos de GitHub
  const projects: ProjectWithMetrics[] = staticProjects.map(project => {
    const githubInfo = githubData[project.id];
    return {
      ...project,
      metrics: {
        stars: githubInfo?.stars ?? 0,
        forks: githubInfo?.forks ?? 0
      },
      lastUpdate: githubInfo?.lastUpdate
    };
  });

  // Los contadores se derivan de los datos: agregar un proyecto no exige
  // recordar actualizar un número a mano.
  const conteos = useMemo(
    () =>
      staticProjects.reduce<Record<string, number>>(
        (acc, project) => {
          acc[project.category] = (acc[project.category] ?? 0) + 1;
          return acc;
        },
        { all: staticProjects.length }
      ),
    []
  );

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  // El destacado encabeza la lista; comparte la misma gramática visual que el resto.
  const orderedProjects = [...filteredProjects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <section id="projects" className="relative py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="p-3 bg-blue-600 rounded-2xl shadow-sm">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              {t.projects.titulo}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {t.projects.subtitulo}
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              aria-pressed={selectedCategory === category.id}
              className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{t.projects.categorias[category.id]}</span>
              <span
                className={`text-xs font-mono tabular-nums ${
                  selectedCategory === category.id ? 'text-white/70' : 'text-gray-400 dark:text-gray-600'
                }`}
              >
                {conteos[category.id] ?? 0}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Lista de proyectos */}
        <motion.ul
          ref={listaRef}
          className="divide-y divide-gray-200 dark:divide-gray-800"
          initial="hidden"
          animate={listaEnVista ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {orderedProjects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              idioma={idioma}
              t={t}
            />
          ))}
        </motion.ul>

        {/* GitHub Integration Notice */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-2 text-xs text-gray-500 dark:text-gray-400">
            {loading ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-flex"
                >
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                </motion.span>
                <span>{t.projects.sincronizando}</span>
              </>
            ) : (
              <>
                <Github className="w-3.5 h-3.5" />
                <span>{t.projects.githubNotice}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status, t }: { status: string; t: Diccionario }) {
  const config = statusStyles[status as EstadoProyecto];

  return (
    <span className={`inline-flex items-center gap-2 text-xs font-semibold ${config.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {t.projects.status[status as EstadoProyecto]}
    </span>
  );
}

const FILA_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_SITE } }
};

function ProjectRow({ project, idioma, t }: {
  project: ProjectWithMetrics;
  idioma: Idioma;
  t: Diccionario;
}) {
  const textos = t.proyectos[String(project.id)];
  const mostrarMetricas = project.metrics.stars > 0 || project.metrics.forks > 0;

  return (
    <motion.li variants={FILA_VARIANTS} className="group">
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 rounded-2xl px-4 py-7 -mx-4 transition-colors duration-300 hover:bg-white dark:hover:bg-gray-900/70 md:grid-cols-[3.5rem_minmax(0,1fr)_11.5rem]">
        {/* Año */}
        <span className="font-mono text-sm tabular-nums text-gray-400 dark:text-gray-600 md:pt-1">
          {project.year}
        </span>

        {/* Contenido */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {project.title}
            </h3>
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/10 dark:bg-blue-500/15 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                <Star className="w-3 h-3 fill-current" />
                {t.projects.destacado}
              </span>
            )}
            {project.private && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                <Lock className="w-3 h-3" />
                {t.projects.privadoBadge}
              </span>
            )}
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {project.featured ? textos.longDescription : textos.description}
          </p>

          <p className="mt-3 font-mono text-xs leading-relaxed text-gray-500 dark:text-gray-500">
            {project.tech.join(' · ')}
          </p>
        </div>

        {/* Estado, métricas y accesos */}
        <div className="flex flex-col gap-3 md:items-end md:pt-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:justify-end">
            <StatusBadge status={project.status} t={t} />
            {project.lastUpdate && (
              <span className="text-xs text-gray-400 dark:text-gray-600">
                {formatearAntiguedad(project.lastUpdate, idioma)}
              </span>
            )}
          </div>

          {mostrarMetricas && (
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                <span className="font-semibold tabular-nums">{project.metrics.stars}</span>
              </span>
              <span className="flex items-center gap-1">
                <GitBranch className="w-3.5 h-3.5" />
                <span className="font-semibold tabular-nums">{project.metrics.forks}</span>
              </span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:justify-end">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                {t.projects.verDemo}
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                {t.projects.codigo}
              </a>
            )}
            {project.private && (
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <Lock className="w-4 h-4" />
                {t.projects.consultar}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}
