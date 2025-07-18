'use client';

import { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  threshold?: number;
  staggerChildren?: number;
}

export default function RevealSection({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  threshold = 0.1,
  staggerChildren,
}: RevealSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const directionVariants = {
    up: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };

  const containerVariants = staggerChildren
    ? {
        initial: {},
        animate: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }
    : {};

  const itemVariants = {
    initial: directionVariants[direction].initial,
    animate: {
      ...directionVariants[direction].animate,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth animation
        delay: staggerChildren ? 0 : delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerChildren ? containerVariants : itemVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {children}
    </motion.div>
  );
} 