'use client';

import { useState, useEffect } from 'react';

interface ScrollProgress {
  progress: number;
  activeSection: string;
}

export function useScrollProgress(): ScrollProgress {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    const findActiveSection = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      let currentSection = 'hero';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          
          // Consider section active if it's in the viewport
          if (sectionTop <= window.innerHeight * 0.5 && sectionTop + sectionHeight >= window.innerHeight * 0.5) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      calculateProgress();
      findActiveSection();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, activeSection };
} 