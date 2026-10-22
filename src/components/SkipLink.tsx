'use client';

import { useIdioma } from '@/i18n/LanguageProvider';
import { ID_CONTENIDO_PRINCIPAL } from '@/lib/site';

// Enlace "saltar al contenido": invisible hasta recibir foco con el teclado.
export default function SkipLink() {
  const { t } = useIdioma();

  return (
    <a
      href={`#${ID_CONTENIDO_PRINCIPAL}`}
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
    >
      {t.a11y.saltarContenido}
    </a>
  );
}
