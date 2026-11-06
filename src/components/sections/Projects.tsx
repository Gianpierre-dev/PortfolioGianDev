'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useIdioma } from '@/i18n/LanguageProvider';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';
import { urlWhatsapp } from '@/lib/email';
import { EASE_SITE } from '@/lib/motion';
import type { Diccionario, Idioma } from '@/i18n/types';
import { idAnclaProyecto, proyectos, type EstadoProyecto, type MetricasRepo, type ProyectoBase } from '@/data/proyectos';
import { ChevronDown, ExternalLink, Github, Star, Lock, GitBranch } from 'lucide-react';

// Un solo indicador de estado por fila: punto + etiqueta. Azul (el acento del
// sitio) para lo que está en producción; gris para el resto. El verde queda
// reservado para WhatsApp.
const statusStyles: Record<EstadoProyecto, { dot: string; text: string }> = {
  live: { dot: 'bg-blue-600 dark:bg-blue-400', text: 'text-blue-700 dark:text-blue-400' },
  development: { dot: 'bg-gray-400', text: 'text-gray-600 dark:text-gray-400' },
  demo: { dot: 'bg-gray-400', text: 'text-gray-600 dark:text-gray-400' }
};

// Enlaces de acción con área táctil de 44 px de alto como mínimo.
const CLASES_ENLACE = 'inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold transition-colors duration-200';

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
  const listaRef = useRef<HTMLUListElement>(null);
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

  // El trabajo para clientes es la prueba principal; los proyectos propios
  // quedan plegados para no diluirla.
  const deClientes = projects.filter(project => project.ambito === 'cliente');
  const propios = projects.filter(project => project.ambito === 'propio');

  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.titulo}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t.projects.subtitulo}
          </p>
          {t.projects.notaContexto && (
            <p className="max-w-2xl mx-auto mt-3 text-sm italic text-gray-500 dark:text-gray-400">
              {t.projects.notaContexto}
            </p>
          )}
        </motion.div>

        {/* Trabajo para clientes */}
        <motion.ul
          ref={listaRef}
          className="divide-y divide-gray-200 dark:divide-gray-800"
          initial="hidden"
          animate={listaEnVista ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {deClientes.map((project) => (
            <ProjectRow key={project.id} project={project} idioma={idioma} ahora={ahora} t={t} />
          ))}
        </motion.ul>

        {/* Proyectos propios: plegados por defecto */}
        {propios.length > 0 && (
          <details className="group/otros mt-10 rounded-2xl border border-gray-200 dark:border-gray-800">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block text-lg font-semibold text-gray-900 dark:text-white">
                  {t.projects.otrosTitulo}
                  <span className="ml-2 font-mono text-sm font-normal text-gray-500 dark:text-gray-400">
                    {propios.length}
                  </span>
                </span>
                <span className="block text-sm text-gray-600 dark:text-gray-400">
                  {t.projects.otrosDescripcion}
                </span>
              </span>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-open/otros:rotate-180 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </summary>
            {/* Sin animación de entrada: las filas se montan ocultas dentro del details */}
            <motion.ul
              className="divide-y divide-gray-200 dark:divide-gray-800 px-5"
              initial="visible"
              animate="visible"
            >
              {propios.map((project) => (
                <ProjectRow key={project.id} project={project} idioma={idioma} ahora={ahora} t={t} />
              ))}
            </motion.ul>
          </details>
        )}
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
    // scroll-mt deja la fila visible bajo la barra de navegación fija.
    <motion.li id={idAnclaProyecto(project.id)} variants={FILA_VARIANTS} className="group scroll-mt-24">
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 py-7 md:grid-cols-[minmax(0,1fr)_16rem]">
        {/* Contenido */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {textos.title}
            </h3>
            {project.private && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300">
                <Lock className="w-3 h-3" aria-hidden="true" />
                {t.projects.privadoBadge}
              </span>
            )}
            <StatusBadge status={project.status} t={t} />
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {textos.description}
          </p>

          {/* En los sistemas privados el dato técnico ya figura en la ficha */}
          {!textos.ficha && (
            <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {textos.technicalNote}
            </p>
          )}

          <p className="mt-3 font-mono text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            {project.tech.join(' · ')}
          </p>
        </div>

        {/* Columna lateral: captura del sitio o, en los sistemas privados, su
            ficha. Debajo, los accesos. */}
        <div className="flex flex-col gap-3">
          {project.imagen ? (
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
          ) : textos.ficha && textos.ficha.length > 0 ? (
            // Ficha de expediente: campo y valor en filas separadas por filetes,
            // en el mismo espacio que ocupa la captura en los sitios públicos.
            <figure className="rounded-lg border border-gray-300 dark:border-gray-700">
              <figcaption className="border-b border-gray-300 dark:border-gray-700 px-4 py-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                {t.projects.fichaTitulo}
              </figcaption>
              <dl className="divide-y divide-gray-200 dark:divide-gray-800 px-4">
                {textos.ficha.map(({ campo, valor }) => (
                  <div key={campo} className="grid grid-cols-[4.25rem_minmax(0,1fr)] gap-2 py-2 text-sm">
                    <dt className="text-xs leading-5 text-gray-500 dark:text-gray-400">{campo}</dt>
                    <dd className="font-medium text-gray-900 dark:text-gray-100">{valor}</dd>
                  </div>
                ))}
              </dl>
            </figure>
          ) : null}

          {(project.lastUpdate && ahora !== null) || mostrarMetricas ? (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
              {project.lastUpdate && ahora !== null && (
                <span>
                  {t.projects.actualizado} {formatearAntiguedad(project.lastUpdate, idioma, ahora)}
                </span>
              )}
              {mostrarMetricas && (
                <>
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
                </>
              )}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {project.private && (
              // El mensaje ya nombra el sistema: Gian sabe de entrada qué le interesa al cliente.
              <a
                href={urlWhatsapp(`${t.whatsapp.mensajeProyecto} ${textos.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.projects.consultar}: ${textos.title} (${t.a11y.nuevaPestana})`}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-green-700 px-4 text-sm font-semibold text-green-700 transition-colors duration-200 hover:bg-green-700 hover:text-white dark:border-green-500 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                <IconoWhatsapp className="w-4 h-4" />
                {t.projects.consultar}
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.projects.verDemo}: ${textos.title} (${t.a11y.nuevaPestana})`}
                className={`${CLASES_ENLACE} text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300`}
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
                className={`${CLASES_ENLACE} text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white`}
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                {t.projects.codigo}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}
