'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RippleButton from '@/components/ui/RippleButton';

import { personalInfo, socialLinks } from '@/data/personal';
import { scrollToSection, downloadCV } from '@/lib/utils';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useIdioma } from '@/i18n/LanguageProvider';
import { etiquetaSocial } from '@/lib/a11y';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Hero() {
  const { t, idioma } = useIdioma();
  const [fotoFallida, setFotoFallida] = useState(false);

  // Solo los elementos secundarios tienen entrada animada. La foto, el nombre
  // (h1) y el statement se pintan desde el primer frame: si arrancaran en
  // opacity 0, el LCP esperaría a que termine la animación.
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Avatar: única imagen con prioridad de carga en toda la página */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 relative group">
              <div className="w-full h-full rounded-full ring-2 ring-blue-500/40 p-1.5 shadow-xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                  {fotoFallida ? (
                    <span className="text-6xl font-bold text-gray-300" aria-hidden="true">
                      GT
                    </span>
                  ) : (
                    <Image
                      src={personalInfo.avatarUrl}
                      alt={`${t.a11y.fotoPerfil} ${personalInfo.name}`}
                      fill
                      priority
                      sizes="192px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={() => setFotoFallida(true)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Name and Title: sin animación de entrada (elemento LCP) */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-100 max-w-3xl mx-auto font-medium leading-snug">
              <span className="block">{t.hero.statementLinea1}</span>
              <span className="block">
                <span className="text-blue-400">{t.hero.statementLinea2Pre}</span>{t.hero.statementLinea2Post}
              </span>
            </p>
          </div>

          {/* Proof line */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-sm sm:text-base text-gray-400 tracking-wide">
              {t.hero.prueba}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                const esExterno = social.icon !== 'mail';
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={esExterno ? '_blank' : undefined}
                    rel={esExterno ? 'noopener noreferrer' : undefined}
                    aria-label={etiquetaSocial(social, t)}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RippleButton
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="min-w-[200px]"
              >
                <span>{t.hero.ctaProyectos}</span>
                <ChevronDown className="w-5 h-5 ml-2" aria-hidden="true" />
              </RippleButton>
              <RippleButton
                variant="outlineOnDark"
                size="lg"
                onClick={() => downloadCV(idioma)}
                className="min-w-[200px]"
              >
                <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                <span>{t.hero.ctaCV}</span>
              </RippleButton>
              <RippleButton
                variant="outlineOnDark"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="min-w-[200px]"
              >
                <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                <span>{t.hero.ctaContacto}</span>
              </RippleButton>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              type="button"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const }}
              className="cursor-pointer flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => scrollToSection('about')}
            >
              <span className="text-sm font-medium">{t.hero.scroll}</span>
              <ChevronDown className="w-8 h-8" aria-hidden="true" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
