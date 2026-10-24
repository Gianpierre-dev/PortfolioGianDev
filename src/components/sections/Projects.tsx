'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useIdioma } from '@/i18n/LanguageProvider';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';
import { urlWhatsapp } from '@/lib/email';
import { EASE_SITE } from '@/lib/motion';
import type { Diccionario, Idioma } from '@/i18n/types';
import { proyectos, type EstadoProyecto, type MetricasRepo, type ProyectoBase } from '@/data/proyectos';
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
  Bot
} from 'lucide-react';

const categories = [
  { id: 'all', icon: Code2 },
  { id: 'fullstack', icon: Database },
  { id: 'frontend', icon: Monitor },
  { id: 'automation', icon: Bot }
] as const;

type IdCategoria = (typeof categories)[number]['id'];

// Un solo indicador de estado por fila: punto de color + etiqueta.
const statusStyles: Record<EstadoProyecto, { dot: string; text: string }> = {
  live: { dot: 'bg-emerald-500', text: 'text-emerald-700 dark:text-emerald-400' },
  development: { dot: 'bg-amber-500', text: 'text-amber-700 dark:text-amber-400' },
  demo: { dot: 'bg-purple-500', text: 'text-purple-700 dark:text-purple-400' }
};

type ProjectWithMetrics = ProyectoBase & {
  metrics: { stars: number; forks: number };
  lastUpdate?: string;
};

interface ProjectsProps {
  // Métricas de GitHub keyed por repoName. Se obtienen en el servidor
  // (page.tsx → src/lib/github.ts, cache de 1 h), nunca desde el navegador.
  metricasGithub: Record<string, MetricasRepo>;
}

// Antigüedad del último push en lenguaje natural ("hace 3 días").
function formatearAntiguedad(iso: string, idioma: Idioma, ahora: number): string {
  const dias = Math.round((ahora - new Date(iso).getTime()) / 86_400_000);
  const rtf = new Intl.RelativeTimeFormat(idioma, { numeric: 'auto' });

  if (dias < 30) return rtf.format(-dias, 'day');

  const meses = Math.round(dias / 30);
  if (meses < 12) return rtf.format(-meses, 'month');

  return rtf.format(-Math.round(meses / 12), 'year');
}

// La hora actual se toma tras el montaje: si se calculara durante el render,
// el HTML del servidor y el del cliente podrían diferir (hydration mismatch).
function useAhora(): number | null {
  const [ahora, setAhora] = useState<number | null>(null);

  useEffect(() => {
    setAhora(Date.now());
  }, []);

  return ahora;
}

export default function Projects({ metricasGithub }: ProjectsProps) {
  const { t, idioma } = useIdioma();
  const [selectedCategory, setSelectedCategory] = useState<IdCategoria>('all');
  const listaRef = useRef<HTMLUListElement>(null);
  // El reveal se controla con un flag propio, no con whileInView por fila:
  // whileInView + once:true no alcanza a las filas que se montan después
  // (al cambiar de filtro) y las dejaba en opacity 0 de forma permanente.
  const listaEnVista = useInView(listaRef, { once: true, amount: 0.05 });
  const ahora = useAhora();

  // Combinar datos estáticos con las métricas de GitHub
  const projects: ProjectWithMetrics[] = proyectos.map(project => {
    const githubInfo = project.repoName ? metricasGithub[project.repoName] : undefined;
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
      proyectos.reduce<Record<string, number>>(
        (acc, project) => {
          acc[project.category] = (acc[project.category] ?? 0) + 1;
          return acc;
        },
        { all: proyectos.length }
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
    <section id="projects" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
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
              <Zap className="w-6 h-6 text-white" aria-hidden="true" />
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

          {t.projects.notaContexto && (
            <p className="max-w-2xl mx-auto mt-3 text-sm italic text-gray-500 dark:text-gray-400">
              {t.projects.notaContexto}
            </p>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              type="button"
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
              <category.icon className="w-4 h-4" aria-hidden="true" />
              <span>{t.projects.categorias[category.id]}</span>
              <span
                className={`text-xs font-mono tabular-nums ${
                  selectedCategory === category.id ? 'text-white/70' : 'text-gray-400 dark:text-gray-500'
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
              ahora={ahora}
              t={t}
            />
          ))}
        </motion.ul>

      </div>
    </section>
  );
}

function StatusBadge({ status, t }: { status: EstadoProyecto; t: Diccionario }) {
  const config = statusStyles[status];

  return (
    <span className={`inline-flex items-center gap-2 text-xs font-semibold ${config.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} aria-hidden="true" />
      {t.projects.status[status]}
    </span>
  );
}

const FILA_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_SITE } }
};

function ProjectRow({ project, idioma, ahora, t }: {
  project: ProjectWithMetrics;
  idioma: Idioma;
  ahora: number | null;
  t: Diccionario;
}) {
  const textos = t.proyectos[String(project.id)];
  // Un proyecto sin textos en el diccionario no se muestra, en lugar de romper la página.
  if (!textos) return null;
  const mostrarMetricas = project.metrics.stars > 0 || project.metrics.forks > 0;

  return (
    <motion.li variants={FILA_VARIANTS} className="group">
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 rounded-2xl px-4 py-7 -mx-4 transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/60 md:grid-cols-[3.5rem_minmax(0,1fr)_16rem]">
        {/* Año */}
        <span className="font-mono text-sm tabular-nums text-gray-400 dark:text-gray-500 md:pt-1">
          {project.year}
        </span>

        {/* Contenido */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {textos.title}
            </h3>
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/10 dark:bg-blue-500/15 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                <Star className="w-3 h-3 fill-current" aria-hidden="true" />
                {t.projects.destacado}
              </span>
            )}
            {project.private && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                <Lock className="w-3 h-3" aria-hidden="true" />
                {t.projects.privadoBadge}
              </span>
            )}
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {textos.description}
          </p>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-500">
            {textos.technicalNote}
          </p>

          <p className="mt-3 font-mono text-xs leading-relaxed text-gray-500 dark:text-gray-500">
            {project.tech.join(' · ')}
          </p>
        </div>

        {/* Captura, estado y accesos. La captura vive en esta columna para que la fila
            mantenga la misma altura que las demás y no deje la columna vacía. */}
        <div className="flex flex-col gap-3 md:items-end md:pt-1">
          {project.imagen && (
            <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
              <Image
                src={project.imagen}
                alt={`${t.projects.capturaAlt} ${textos.title}`}
                width={1280}
                height={800}
                // Desde md la columna mide 16rem; en móvil ocupa el ancho de la página.
                sizes="(min-width: 768px) 256px, calc(100vw - 48px)"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:justify-end">
            <StatusBadge status={project.status} t={t} />
            {project.lastUpdate && ahora !== null && (
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {formatearAntiguedad(project.lastUpdate, idioma, ahora)}
              </span>
            )}
          </div>

          {mostrarMetricas && (
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current text-amber-500" aria-hidden="true" />
                <span className="font-semibold tabular-nums">{project.metrics.stars}</span>
                <span className="sr-only">{t.projects.estrellas}</span>
              </span>
              <span className="flex items-center gap-1">
                <GitBranch className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="font-semibold tabular-nums">{project.metrics.forks}</span>
                <span className="sr-only">{t.projects.forks}</span>
              </span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:justify-end">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.projects.verDemo}: ${textos.title} (${t.a11y.nuevaPestana})`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                {t.projects.verDemo}
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.projects.codigo}: ${textos.title} (${t.a11y.nuevaPestana})`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                {t.projects.codigo}
              </a>
            )}
            {project.private && (
              // El mensaje ya nombra el sistema: Gian sabe de entrada qué le interesa al cliente.
              <a
                href={urlWhatsapp(`${t.whatsapp.mensajeProyecto} ${textos.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.projects.consultar}: ${textos.title} (${t.a11y.nuevaPestana})`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors duration-200"
              >
                <IconoWhatsapp className="w-4 h-4" />
                {t.projects.consultar}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}
