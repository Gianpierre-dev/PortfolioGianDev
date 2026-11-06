'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';
import { useIdioma } from '@/i18n/LanguageProvider';
import { urlWhatsapp } from '@/lib/email';
import { EASE_SITE } from '@/lib/motion';
import { scrollToSection } from '@/lib/utils';
import { idAnclaProyecto, proyectos } from '@/data/proyectos';

// Proyectos que prueban cada servicio, en el mismo orden. Planillas/RRHH cita
// los dos sistemas (RRHH en producción, Planillas en desarrollo) para no
// atribuirle a uno lo que hace el otro.
const PRUEBAS_SERVICIO: readonly (readonly number[])[] = [[3, 1], [4], [2], [9]];

// Lleva a la fila del proyecto, la resalta un momento y muestra en ella el
// enlace "Volver a Servicios" (data-desde-servicios).
function irAProyecto(id: number) {
  const ancla = idAnclaProyecto(id);
  scrollToSection(ancla);
  // Marca la entrada del historial: "Volver a Servicios" solo retrocede si sigue en ella.
  window.history.replaceState({ desdeServicios: true }, '');
  const fila = document.getElementById(ancla);
  if (!fila) return;
  document.querySelectorAll<HTMLElement>('[data-desde-servicios]').forEach((otra) => {
    delete otra.dataset.desdeServicios;
  });
  fila.dataset.desdeServicios = 'true';
  fila.dataset.destacado = 'true';
  window.setTimeout(() => {
    delete fila.dataset.destacado;
  }, 2400);
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_SITE } },
};

export default function Services() {
  const { t } = useIdioma();

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.servicios.titulo}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            {t.servicios.subtitulo}
          </p>
        </motion.div>

        {/* Servicios como registro: qué se construye a la izquierda y, a la derecha,
            su respaldo en campos (el mismo lenguaje que la ficha de Proyectos).
            Los cuatro tienen el mismo peso. */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="divide-y divide-gray-200 dark:divide-gray-800 border-y border-gray-200 dark:border-gray-800"
        >
          {t.servicios.items.map((servicio, index) => {
            const pruebas = (PRUEBAS_SERVICIO[index] ?? []).flatMap((id) => {
              const proyecto = proyectos.find((p) => p.id === id);
              const titulo = t.proyectos[String(id)]?.title;
              return proyecto && titulo ? [{ proyecto, titulo }] : [];
            });
            return (
              <motion.li
                key={servicio.titulo}
                variants={ITEM_VARIANTS}
                className="grid grid-cols-1 gap-x-10 gap-y-4 py-7 md:grid-cols-[minmax(0,1fr)_22rem]"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {servicio.titulo}
                  </h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                    {servicio.beneficio}
                  </p>
                </div>

                {/* La experiencia en producción, si existe, va antes que los proyectos */}
                <dl className="text-sm">
                  {servicio.respaldo && (
                    <div className="mb-2 grid grid-cols-[6rem_minmax(0,1fr)] gap-2 border-b border-gray-200 pb-3 dark:border-gray-800">
                      <dt className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                        {t.servicios.campoExperiencia}
                      </dt>
                      <dd className="text-gray-800 dark:text-gray-200">{servicio.respaldo}</dd>
                    </div>
                  )}
                  {pruebas.length > 0 && (
                    <div className="grid grid-cols-[6rem_minmax(0,1fr)] gap-2">
                      <dt className="pt-3 text-xs leading-5 text-gray-500 dark:text-gray-400">
                        {t.servicios.campoPrueba}
                      </dt>
                      <dd>
                        {/* Cada enlace lleva a la fila del proyecto y la resalta */}
                        <ul>
                          {pruebas.map(({ proyecto, titulo }) => (
                            <li key={proyecto.id}>
                              <a
                                href={`#${idAnclaProyecto(proyecto.id)}`}
                                onClick={(evento) => {
                                  evento.preventDefault();
                                  irAProyecto(proyecto.id);
                                }}
                                className="inline-flex min-h-11 flex-col justify-center rounded-md py-1 font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-gray-900"
                              >
                                {/* La flecha va pegada al final del título, aunque este ocupe dos líneas */}
                                <span>
                                  {titulo}
                                  <ArrowRight className="ml-1 inline h-4 w-4 align-[-3px]" aria-hidden="true" />
                                </span>
                                <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                                  {t.projects.status[proyecto.status]}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                </dl>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Cómo trabajo */}
        <div className="mt-16">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {t.servicios.procesoTitulo}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t.servicios.procesoSubtitulo}
            </p>
          </div>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {t.servicios.pasos.map((paso, index) => (
              <motion.li key={paso.titulo} variants={ITEM_VARIANTS} className="relative">
                <span
                  className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="mt-2 mb-3 h-px bg-gray-200 dark:bg-gray-800" aria-hidden="true" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {paso.titulo}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {paso.descripcion}
                </p>
              </motion.li>
            ))}
          </motion.ol>

          <div className="mt-12">
            <a
              href={urlWhatsapp(t.whatsapp.mensajeGeneral)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.servicios.cta} (${t.a11y.nuevaPestana})`}
              className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
            >
              <IconoWhatsapp className="w-5 h-5" />
              {t.servicios.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
