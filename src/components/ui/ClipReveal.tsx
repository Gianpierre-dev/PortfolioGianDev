'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_SITE, DURATION_REVEAL } from '@/lib/motion';

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Revela el contenido con una máscara clip-path que se levanta como cortina.
// El observador de viewport vive en el wrapper SIN clip: un elemento clipeado
// al 100% tiene área visible cero y el IntersectionObserver nunca lo dispara.
export default function ClipReveal({ children, className = '', delay = 0 }: ClipRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="h-full w-full"
        variants={{
          hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
          visible: { clipPath: 'inset(0% 0% 0% 0%)' },
        }}
        transition={{ duration: DURATION_REVEAL, ease: EASE_SITE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
