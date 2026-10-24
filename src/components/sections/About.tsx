'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/personal';
import { Calendar, MapPin, Building, Code, Download } from 'lucide-react';
import { useIdioma } from '@/i18n/LanguageProvider';
import { downloadCV } from '@/lib/utils';

export default function About() {
  const { t, idioma } = useIdioma();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const stats = [
    { label: t.about.stats.experiencia, value: '3+', icon: Calendar },
    { label: t.about.stats.proyectos, value: '25+', icon: Code },
    { label: t.about.stats.ubicacion, value: t.about.ubicacionValor, icon: MapPin },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.about.titulo}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {t.about.subtitulo}
          </motion.p>
        </motion.div>

        {/* Bio con los datos clave al costado: ambas columnas tienen un alto parecido */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_17rem] gap-10 lg:gap-16 items-center max-w-5xl mx-auto"
        >
          <div className="space-y-4">
            {t.about.bioParrafos.map((parrafo, index) => (
              <p key={index} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="space-y-3">
            <dl className="grid grid-cols-3 lg:grid-cols-1 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4 text-center lg:flex-row lg:gap-4 lg:text-left"
                >
                  <stat.icon className="w-6 h-6 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  {/* Valor arriba de la etiqueta en móvil; a la derecha en desktop. */}
                  <dt className="order-2 text-sm text-gray-600 dark:text-gray-400 lg:order-1">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-gray-900 dark:text-white lg:order-2 lg:ml-auto">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            {/* El CV vive aquí y no en la portada: es para quien evalúa la trayectoria */}
            <button
              type="button"
              onClick={() => downloadCV(idioma)}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors duration-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {t.hero.ctaCV}
            </button>
          </div>
        </motion.div>

        {/* Experiencia: a lo ancho y en dos columnas, sin repetir el stack */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t.about.experienciaTitulo}
          </h3>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {experiences.map((exp) => {
              const expT = t.experiencias[exp.company];
              return (
                <li key={exp.company} className="relative border-l-2 border-gray-200 dark:border-gray-800 pl-5">
                  <span
                    className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
                      <Building className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      {exp.company}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {expT?.period ?? exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                    {expT?.position ?? exp.position}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    {expT?.description ?? exp.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
