'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/personal';
import { Calendar, MapPin, Building, Code } from 'lucide-react';
import { useIdioma } from '@/i18n/LanguageProvider';

export default function About() {
  const { t } = useIdioma();

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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-950">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Bio (sticky en desktop) */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="space-y-4">
              {t.about.bioParrafos.map((parrafo, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {parrafo}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 rounded-lg text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experiencia: una línea por cargo, sin repetir el stack (vive en su propia sección) */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.about.experienciaTitulo}
            </h3>

            <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-6">
              {experiences.map((exp) => {
                const expT = t.experiencias[exp.company];
                return (
                  <li key={exp.company} className="relative pl-6">
                    <span
                      className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400"
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
      </div>
    </section>
  );
}
