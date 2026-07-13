'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_SITE, DURATION_REVEAL, STAGGER_LINES } from '@/lib/motion';

interface LineRevealProps {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'p' | 'div';
}

// Revela texto línea por línea desde detrás de una máscara (overflow hidden),
// al estilo SplitText: cada línea sube con stagger y easing del sistema.
export default function LineReveal({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  as: Tag = 'div',
}: LineRevealProps) {
  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: DURATION_REVEAL,
              ease: EASE_SITE,
              delay: delay + index * STAGGER_LINES,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
