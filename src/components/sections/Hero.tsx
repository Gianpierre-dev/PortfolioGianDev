'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import RippleButton from '@/components/ui/RippleButton';
import { H1, Subtitle } from '@/components/ui/Typography';
import { personalInfo, socialLinks } from '@/data/personal';
import { scrollToSection, downloadCV } from '@/lib/utils';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Desarrollador Full Stack',
    'Programador Python',
    'Desarrollador Web',
    'Diseñador UI/UX'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-500/20 rounded-full blur-lg animate-bounce delay-500"></div>
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-white/30 rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating Code Elements */}
        {['<>', '{;}', 'fn()', '()=>', 'class', 'const'].map((code, i) => (
          <motion.div
            key={code}
            className="absolute text-blue-300/20 font-mono text-sm font-bold select-none pointer-events-none"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            {code}
          </motion.div>
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
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
          {/* Avatar - AGRANDADA */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto mb-6 relative group">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1.5 shadow-2xl shadow-blue-500/25">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src="/images/profile/camisa%20negra2.png" 
                    alt={`Foto profesional de ${personalInfo.name}`}
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback a iniciales si la imagen no carga
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback con iniciales */}
                  <div className="hidden w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-700 dark:text-gray-300">
                      GT
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {personalInfo.name}
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-6">
              <span>Soy </span>
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text font-semibold">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.name !== 'Email' ? '_blank' : undefined}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
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
                <span>Ver Proyectos</span>
                <ChevronDown className="w-5 h-5 ml-2" />
              </RippleButton>
              <RippleButton
                variant="outline"
                size="lg"
                onClick={() => downloadCV()}
                className="min-w-[200px]"
              >
                <Download className="w-5 h-5 mr-2" />
                <span>Descargar CV</span>
              </RippleButton>
              <RippleButton
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="min-w-[200px]"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Contactar</span>
              </RippleButton>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="cursor-pointer flex flex-col items-center gap-2"
              onClick={() => scrollToSection('about')}
            >
              <span className="text-gray-400 text-sm font-medium">Scroll</span>
              <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 