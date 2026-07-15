'use client';

import { motion } from 'framer-motion';
import { personalInfo, experiences } from '@/data/personal';
import { downloadCV } from '@/lib/utils';
import { Calendar, MapPin, Building, Code, Coffee, Download } from 'lucide-react';
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
    { label: t.about.stats.tecnologias, value: '10+', icon: Coffee },
    { label: t.about.stats.ubicacion, value: t.about.ubicacionValor, icon: MapPin },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
          {/* Bio Section (sticky en desktop) */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="prose prose-lg dark:prose-invert">
              {t.about.bioParrafos.map((parrafo, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {parrafo}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CV Download Button */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <button
                onClick={() => downloadCV()}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Download className="w-5 h-5" />
                {t.about.cvBoton}
              </button>
            </motion.div>

            {/* Personal Philosophy */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-8"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {t.about.enfoqueTitulo}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {t.about.enfoqueBullets.map((bullet) => (
                  <div key={bullet} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">•</span>
                    {bullet}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
                {t.about.cita}
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-3"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.about.experienciaTitulo}
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              
              {experiences.map((exp, index) => {
                const expT = t.experiencias[exp.company];
                return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>
                  
                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.company}
                        </h4>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {expT?.period ?? exp.period}
                      </span>
                    </div>

                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {expT?.position ?? exp.position}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {expT?.description ?? exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 