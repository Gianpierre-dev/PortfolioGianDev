'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RippleButton from '@/components/ui/RippleButton';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';
import { urlWhatsapp } from '@/lib/email';
import { personalInfo } from '@/data/personal';
import { scrollToSection } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useIdioma } from '@/i18n/LanguageProvider';

export default function Hero() {
  const { t } = useIdioma();
  const [fotoFallida, setFotoFallida] = useState(false);

  // Solo los botones tienen entrada animada. El título (elemento LCP) y la foto
  // se pintan desde el primer frame: si arrancaran en opacity 0, el LCP
  // esperaría a que termine la animación.
  const entradaBotones = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' as const } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Dos columnas en escritorio: la propuesta a la izquierda y la foto a la derecha.
          En celular la foto va arriba del texto. */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16 lg:px-8">
        <div className="flex justify-center lg:order-2">
          <div className="relative h-44 w-44 overflow-hidden rounded-full bg-gray-800 ring-2 ring-blue-500/40 ring-offset-8 ring-offset-gray-950 sm:h-52 sm:w-52 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
            {fotoFallida ? (
              <span className="flex h-full w-full items-center justify-center text-6xl font-bold text-gray-300" aria-hidden="true">
                GT
              </span>
            ) : (
              <Image
                src={personalInfo.avatarUrl}
                alt={`${t.a11y.fotoPerfil} ${personalInfo.name}`}
                fill
                priority
                sizes="(min-width: 1280px) 320px, (min-width: 1024px) 288px, 208px"
                className="object-cover object-top"
                onError={() => setFotoFallida(true)}
              />
            )}
          </div>
        </div>

        <div className="text-center lg:order-1 lg:text-left">
          {/* La propuesta de valor es el título: un cliente sabe en segundos si el sitio es para él */}
          <h1 className="text-3xl leading-tight sm:text-5xl font-bold text-white tracking-tight text-balance">
            {t.hero.titularPre}{' '}
            <span className="text-blue-400">{t.hero.titularDestacado}</span>
            {t.hero.titularPost}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-300 text-pretty sm:text-lg lg:mx-0">
            {t.hero.areas}
          </p>

          {/* Quién está detrás y su prueba, en el formato de la ficha del sistema:
              la portada es la primera hoja del expediente. */}
          <div className="mt-6">
            <p className="font-semibold text-white">{personalInfo.name}</p>
            <dl className="mx-auto mt-3 grid max-w-xl grid-cols-3 divide-x divide-gray-800 border-y border-gray-800 text-left lg:mx-0">
              {t.hero.prueba.map(({ campo, valor }) => (
                <div key={campo} className="px-3 py-2 first:pl-0">
                  <dt className="text-xs text-gray-400">{campo}</dt>
                  <dd className="text-sm font-medium text-white">{valor}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Dos acciones: escribir por WhatsApp o ver la prueba */}
          <motion.div
            variants={entradaBotones}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={urlWhatsapp(t.whatsapp.mensajeGeneral)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.whatsapp.cta} (${t.a11y.nuevaPestana})`}
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-xl bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-900/30 transition-colors duration-200 hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <IconoWhatsapp className="w-5 h-5" />
              <span>{t.whatsapp.cta}</span>
            </a>
            <RippleButton
              variant="outlineOnDark"
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="min-w-[220px]"
            >
              <span>{t.hero.ctaProyectos}</span>
              <ChevronDown className="w-5 h-5" aria-hidden="true" />
            </RippleButton>
          </motion.div>
          {/* Compromisos confirmados, justo debajo de la acción principal */}
          <p className="mt-4 text-sm text-gray-400">{t.whatsapp.garantia}</p>
        </div>
      </div>
    </section>
  );
}
