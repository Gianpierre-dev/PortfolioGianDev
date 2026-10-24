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

  // Solo los botones tienen entrada animada. El título (elemento LCP) y la firma
  // se pintan desde el primer frame: si arrancaran en opacity 0, el LCP
  // esperaría a que termine la animación.
  const entradaBotones = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' as const } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10 text-center">
        {/* La propuesta de valor es el título: un cliente sabe en segundos si el sitio es para él */}
        <h1 className="text-3xl leading-tight sm:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance">
          {t.hero.statementLinea1}{' '}
          <span className="text-blue-400">{t.hero.statementLinea2Pre}</span>
          {t.hero.statementLinea2Post}
        </h1>

        {/* Firma: quién está detrás, sin competir con la propuesta */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-800 ring-2 ring-blue-500/40">
            {fotoFallida ? (
              <span className="flex h-full w-full items-center justify-center text-lg font-bold text-gray-300" aria-hidden="true">
                GT
              </span>
            ) : (
              <Image
                src={personalInfo.avatarUrl}
                alt={`${t.a11y.fotoPerfil} ${personalInfo.name}`}
                fill
                priority
                sizes="56px"
                className="object-cover object-top"
                onError={() => setFotoFallida(true)}
              />
            )}
          </div>
          <div className="text-left">
            <p className="font-semibold text-white">{personalInfo.name}</p>
            <p className="text-sm text-gray-400">{t.hero.prueba}</p>
          </div>
        </div>

        {/* Dos acciones: escribir por WhatsApp o ver la prueba */}
        <motion.div
          variants={entradaBotones}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
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
      </div>
    </section>
  );
}
