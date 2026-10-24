'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/personal';
import type { SkillCategory } from '@/types';
import { useIdioma } from '@/i18n/LanguageProvider';
import { Database, Monitor, Server, Wrench } from 'lucide-react';

// Stack agrupado por categoría, sin niveles ni porcentajes: a un cliente le
// interesa con qué se construye su sistema, no una autoevaluación numérica.
const grupos: { id: SkillCategory; icon: typeof Monitor }[] = [
  { id: 'frontend', icon: Monitor },
  { id: 'backend', icon: Server },
  { id: 'database', icon: Database },
  { id: 'tools', icon: Wrench },
];

export default function Skills() {
  const { t } = useIdioma();

  return (
    <section id="skills" className="py-14 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {t.skills.titulo}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t.skills.subtitulo}
          </p>
        </motion.div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {grupos.map((grupo) => (
            <div
              key={grupo.id}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4"
            >
              <dt className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                <grupo.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                {t.skills.categorias[grupo.id]}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {skills
                    .filter((skill) => skill.category === grupo.id)
                    .map((skill) => (
                      <li
                        key={skill.name}
                        className="rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2 py-0.5 text-xs text-gray-700 dark:text-gray-300"
                      >
                        {skill.name}
                      </li>
                    ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
