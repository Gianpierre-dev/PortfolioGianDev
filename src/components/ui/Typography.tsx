'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  animated?: boolean;
}

export function H1({ children, className = '', gradient = false, animated = false }: TypographyProps) {
  const baseClasses = `text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight`;
  const gradientClasses = gradient ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent' : 'text-gray-900 dark:text-white';
  
  if (animated) {
    return (
      <motion.h1 
        className={`${baseClasses} ${gradientClasses} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.h1>
    );
  }
  
  return (
    <h1 className={`${baseClasses} ${gradientClasses} ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className = '', gradient = false, animated = false }: TypographyProps) {
  const baseClasses = `text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight`;
  const gradientClasses = gradient ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : 'text-gray-900 dark:text-white';
  
  if (animated) {
    return (
      <motion.h2 
        className={`${baseClasses} ${gradientClasses} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.h2>
    );
  }
  
  return (
    <h2 className={`${baseClasses} ${gradientClasses} ${className}`}>
      {children}
    </h2>
  );
}

export function H3({ children, className = '', gradient = false, animated = false }: TypographyProps) {
  const baseClasses = `text-2xl sm:text-3xl font-semibold leading-tight tracking-tight`;
  const gradientClasses = gradient ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : 'text-gray-900 dark:text-white';
  
  if (animated) {
    return (
      <motion.h3 
        className={`${baseClasses} ${gradientClasses} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.h3>
    );
  }
  
  return (
    <h3 className={`${baseClasses} ${gradientClasses} ${className}`}>
      {children}
    </h3>
  );
}

export function Subtitle({ children, className = '', animated = false }: TypographyProps) {
  const baseClasses = `text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed`;
  
  if (animated) {
    return (
      <motion.p 
        className={`${baseClasses} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.p>
    );
  }
  
  return (
    <p className={`${baseClasses} ${className}`}>
      {children}
    </p>
  );
}

export function Body({ children, className = '', animated = false }: TypographyProps) {
  const baseClasses = `text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed`;
  
  if (animated) {
    return (
      <motion.p 
        className={`${baseClasses} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.p>
    );
  }
  
  return (
    <p className={`${baseClasses} ${className}`}>
      {children}
    </p>
  );
}

export function Caption({ children, className = '', animated = false }: TypographyProps) {
  const baseClasses = `text-sm text-gray-500 dark:text-gray-400 leading-relaxed`;
  
  if (animated) {
    return (
      <motion.p 
        className={`${baseClasses} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.p>
    );
  }
  
  return (
    <p className={`${baseClasses} ${className}`}>
      {children}
    </p>
  );
} 