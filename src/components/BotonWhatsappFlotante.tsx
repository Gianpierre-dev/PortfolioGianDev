'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';
import { useIdioma } from '@/i18n/LanguageProvider';
import { urlWhatsapp } from '@/lib/email';

// Secciones donde el botón sobra: la portada ya tiene su propio acceso a
// WhatsApp y en contacto taparía el formulario.
const SECCIONES_SIN_BOTON = ['hero', 'contact'] as const;
// Fracción de la sección que debe verse para ocultar el botón.
const UMBRAL_VISIBLE = 0.15;

function useBotonVisible(): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const enVista = new Set<string>();
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          // isIntersecting es true con un solo píxel visible; se compara el ratio.
          if (entrada.intersectionRatio >= UMBRAL_VISIBLE) enVista.add(entrada.target.id);
          else enVista.delete(entrada.target.id);
        });
        setVisible(enVista.size === 0);
      },
      { threshold: [0, UMBRAL_VISIBLE] }
    );

    SECCIONES_SIN_BOTON.forEach((id) => {
      const seccion = document.getElementById(id);
      if (seccion) observer.observe(seccion);
    });

    return () => observer.disconnect();
  }, []);

  return visible;
}

export default function BotonWhatsappFlotante() {
  const { t } = useIdioma();
  const visible = useBotonVisible();

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={urlWhatsapp(t.whatsapp.mensajeGeneral)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.whatsapp.flotante} (${t.a11y.nuevaPestana})`}
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-900/20 transition-colors duration-200 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 sm:bottom-6 sm:right-6"
        >
          <IconoWhatsapp className="h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
