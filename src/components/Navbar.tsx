'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useIdioma } from '@/i18n/LanguageProvider';
import IconoWhatsapp from '@/components/ui/IconoWhatsapp';
import { urlWhatsapp } from '@/lib/email';

interface NavigationItem {
  name: string;
  href: string;
}

const ID_MENU_MOVIL = 'menu-movil';

export default function Navbar() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { progress, activeSection } = useScrollProgress();
  const { resolvedTheme, setTheme } = useTheme();
  const { idioma, t, cambiarIdioma } = useIdioma();

  const navigation: NavigationItem[] = [
    { name: t.nav.inicio, href: 'hero' },
    { name: t.nav.servicios, href: 'services' },
    { name: t.nav.proyectos, href: 'projects' },
    { name: t.nav.about, href: 'about' },
    { name: t.nav.habilidades, href: 'skills' },
    { name: t.nav.contacto, href: 'contact' },
  ];

  // El tema real solo se conoce en el cliente: antes del montaje el botón usa
  // una etiqueta neutra para no anunciar una acción equivocada.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string): void => {
    scrollToSection(href);
    setIsOpen(false);
  };

  const esOscuro = mounted && resolvedTheme === 'dark';
  const etiquetaTema = !mounted
    ? t.nav.cambiarTema
    : esOscuro
      ? t.nav.cambiarTemaClaro
      : t.nav.cambiarTemaOscuro;

  // Sobre el hero (siempre oscuro) la barra es transparente con texto claro;
  // al hacer scroll toma el fondo del tema activo.
  const sobreHero = !scrolled && !isOpen;

  const clasesBarra = sobreHero
    ? 'bg-transparent border-transparent'
    : 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg border-gray-200/60 dark:border-gray-800';

  const clasesAccion = sobreHero
    ? 'bg-white/10 text-gray-200 hover:bg-white/20 hover:text-white'
    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';

  return (
    <header>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-blue-600 origin-left"
        style={{ scaleX: progress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav
        aria-label={t.nav.navegacionPrincipal}
        className={`fixed top-0 left-0 right-0 z-40 border-b transition-colors duration-300 ${clasesBarra}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.button
              type="button"
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={t.nav.irInicio}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 dark:bg-gray-800 font-mono text-sm font-bold text-white ring-1 ring-white/10"
                aria-hidden="true"
              >
                gt<span className="text-blue-500">_</span>
              </span>
              <span className="hidden sm:block text-left leading-tight" aria-hidden="true">
                <span
                  className={`block text-sm font-bold ${
                    sobreHero ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  Gianpierre Terrazas
                </span>
                <span
                  className={`block text-xs ${
                    sobreHero ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {t.nav.rolLogo}
                </span>
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            {/* Sin "Inicio" en desktop: el logo ya lleva arriba y libera espacio para WhatsApp */}
            <ul className="hidden lg:flex items-center space-x-1">
              {navigation.filter((item) => item.href !== 'hero').map((item) => {
                const activo = activeSection === item.href;
                const clasesEnlace = sobreHero
                  ? activo
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  : activo
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-500/10'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/80 dark:hover:bg-gray-800/60';

                return (
                  <li key={item.href}>
                    <motion.button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-current={activo ? 'location' : undefined}
                      className={`relative px-4 py-2 rounded-lg transition-colors duration-200 ${clasesEnlace}`}
                    >
                      {item.name}
                      {activo && (
                        <motion.div
                          layoutId="activeSection"
                          className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                            sobreHero ? 'bg-blue-400' : 'bg-blue-600 dark:bg-blue-400'
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  </li>
                );
              })}
            </ul>

            {/* Acciones: WhatsApp + idioma + tema + menú móvil */}
            <div className="flex items-center gap-2">
              {/* Acceso fijo a WhatsApp: integrado a la barra en lugar de una burbuja flotante */}
              <a
                href={urlWhatsapp(t.whatsapp.mensajeGeneral)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.whatsapp.cta} (${t.a11y.nuevaPestana})`}
                className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
              >
                <IconoWhatsapp className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              <motion.button
                type="button"
                onClick={cambiarIdioma}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-xl text-xs font-bold transition-colors duration-200 ${clasesAccion}`}
                aria-label={t.nav.cambiarIdioma}
              >
                <span
                  className={
                    idioma === 'es'
                      ? sobreHero ? 'text-blue-300' : 'text-blue-600 dark:text-blue-400'
                      : sobreHero ? 'text-gray-400' : 'text-gray-400 dark:text-gray-500'
                  }
                >
                  ES
                </span>
                <span className={`mx-1 ${sobreHero ? 'text-gray-500' : 'text-gray-300 dark:text-gray-600'}`}>|</span>
                <span
                  className={
                    idioma === 'en'
                      ? sobreHero ? 'text-blue-300' : 'text-blue-600 dark:text-blue-400'
                      : sobreHero ? 'text-gray-400' : 'text-gray-400 dark:text-gray-500'
                  }
                >
                  EN
                </span>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => setTheme(esOscuro ? 'light' : 'dark')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-xl transition-colors duration-200 ${clasesAccion}`}
                aria-label={etiquetaTema}
              >
                {/* Antes del montaje se reserva el espacio sin ícono para no mostrar uno incorrecto */}
                {!mounted ? (
                  <span className="block w-4 h-4" aria-hidden="true" />
                ) : esOscuro ? (
                  <Sun className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4" aria-hidden="true" />
                )}
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? t.nav.cerrarMenu : t.nav.abrirMenu}
                aria-expanded={isOpen}
                aria-controls={ID_MENU_MOVIL}
                className={`lg:hidden p-2.5 rounded-xl transition-colors duration-200 ${clasesAccion}`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={ID_MENU_MOVIL}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200/60 dark:border-gray-800"
            >
              <ul className="px-4 pt-2 pb-4 space-y-1">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      aria-current={activeSection === item.href ? 'location' : undefined}
                      className={`block w-full text-left px-4 py-3 rounded-xl transition-colors duration-200 ${
                        activeSection === item.href
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
