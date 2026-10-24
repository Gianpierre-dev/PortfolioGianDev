'use client';

import { motion } from 'framer-motion';
import { Building2, FileSearch, Globe, Users } from 'lucide-react';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';
import { useIdioma } from '@/i18n/LanguageProvider';
import { urlWhatsapp } from '@/lib/email';
import { EASE_SITE } from '@/lib/motion';

// Íconos en el mismo orden que t.servicios.items:
// planillas/RRHH, SUNAT, estudios contables, web corporativa.
const ICONOS_SERVICIO = [Users, FileSearch, Building2, Globe] as const;

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
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.servicios.titulo}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.servicios.subtitulo}
          </p>
        </motion.div>

        {/* Servicios */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {t.servicios.items.map((servicio, index) => {
            const Icono = ICONOS_SERVICIO[index] ?? Users;
            return (
              <motion.li
                key={servicio.titulo}
                variants={ITEM_VARIANTS}
                className="flex gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400">
                  <Icono className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1.5">
                    {servicio.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {servicio.beneficio}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Cómo trabajo */}
        <div className="mt-16">
          <div className="text-center mb-10">
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

          <div className="mt-12 flex justify-center">
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
