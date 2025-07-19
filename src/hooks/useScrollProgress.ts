'use client';

import { useState, useEffect } from 'react';

interface ScrollProgressReturn {
  progress: number;
  activeSection: string;
}

export function useScrollProgress(): ScrollProgressReturn {
  const [progress, setProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const updateProgress = (): void => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollPercent, 100));

      // Determinar la sección activa
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      let currentSection = 'hero';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    const handleScroll = (): void => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress(); // Llamada inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { progress, activeSection };
} 