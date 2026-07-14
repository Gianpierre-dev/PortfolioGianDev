'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useIdioma } from '@/i18n/LanguageProvider';

interface NavigationItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { progress, activeSection } = useScrollProgress();
  const { resolvedTheme, setTheme } = useTheme();
  const { idioma, t, cambiarIdioma } = useIdioma();

  const navigation: NavigationItem[] = [
    { name: t.nav.inicio, href: 'hero' },
    { name: t.nav.about, href: 'about' },
    { name: t.nav.proyectos, href: 'projects' },
    { name: t.nav.habilidades, href: 'skills' },
    { name: t.nav.contacto, href: 'contact' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string): void => {
    scrollToSection(href);
    setIsOpen(false);
  };

  if (!mounted) return <div className="h-16" />;

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-blue-600 origin-left"
        style={{ scaleX: progress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg'
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
        } border-b border-gray-200/50 dark:border-gray-700/50`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <motion.button
                onClick={() => handleNavClick('hero')}
                className="flex items-center gap-2.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={t.nav.irInicio}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 dark:bg-gray-800 font-mono text-sm font-bold text-white">
                  gt<span className="text-blue-500">_</span>
                </span>
                <span className="hidden sm:block text-left leading-tight">
                  <span className="block text-sm font-bold text-gray-900 dark:text-white">
                    Gianpierre Terrazas
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    {t.nav.rolLogo}
                  </span>
                </span>
              </motion.button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.href
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50/80 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Acciones: idioma + tema + menú móvil */}
            <div className="flex items-center gap-2">
              <motion.button
                onClick={cambiarIdioma}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label={t.nav.cambiarIdioma}
              >
                <span className={idioma === 'es' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}>ES</span>
                <span className="mx-1 text-gray-300 dark:text-gray-600">|</span>
                <span className={idioma === 'en' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}>EN</span>
              </motion.button>

              <motion.button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label={resolvedTheme === 'dark' ? t.nav.cambiarTemaClaro : t.nav.cambiarTemaOscuro}
              >
                {resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeSection === item.href
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
} 