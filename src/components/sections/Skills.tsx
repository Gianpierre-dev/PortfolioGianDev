'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/personal';
import type { SkillCategory } from '@/types';
import { useIdioma } from '@/i18n/LanguageProvider';

// Stack agrupado por categoría, sin niveles ni porcentajes: a un cliente le
// interesa con qué se construye su sistema, no una autoevaluación numérica.
const grupos: readonly SkillCategory[] = ['frontend', 'backend', 'database', 'tools'];

export default function Skills() {
  const { t } = useIdioma();

  return (
    <section id="skills" className="py-14 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t.skills.titulo}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t.skills.subtitulo}
          </p>
        </motion.div>

        {/* Registro "categoría · tecnologías", con el mismo lenguaje que la ficha y
            la línea de stack de cada proyecto: sin tarjetas ni íconos. */}
        <dl className="divide-y divide-gray-200 dark:divide-gray-800 border-y border-gray-200 dark:border-gray-800">
          {grupos.map((grupo) => (
            <div key={grupo} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4">
              <dt className="text-sm font-semibold text-gray-900 dark:text-white">
                {t.skills.categorias[grupo]}
              </dt>
              <dd className="font-mono text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {skills
                  .filter((skill) => skill.category === grupo)
                  .map((skill) => skill.name)
                  .join(' · ')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
