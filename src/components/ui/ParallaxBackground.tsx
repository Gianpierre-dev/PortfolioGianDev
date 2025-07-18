'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
  direction?: 'up' | 'down';
}

export const ParallaxBackground = ({ 
  children, 
  speed = 0.5, 
  className = '', 
  offset = 0,
  direction = 'up'
}: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yValue = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' 
      ? [offset, -200 * speed] 
      : [-offset, 200 * speed]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y: yValue }}
        className="absolute inset-0 w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundElement?: React.ReactNode;
  parallaxSpeed?: number;
  className?: string;
  backgroundClassName?: string;
}

export const ParallaxSection = ({
  children,
  backgroundElement,
  parallaxSpeed = 0.5,
  className = '',
  backgroundClassName = ''
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -200 * parallaxSpeed]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background with parallax */}
      {backgroundElement && (
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 w-full h-[120%] ${backgroundClassName}`}
        >
          {backgroundElement}
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  intensity?: number;
  direction?: 'horizontal' | 'vertical' | 'both';
  className?: string;
}

export const FloatingElement = ({
  children,
  intensity = 30,
  direction = 'both',
  className = ''
}: FloatingElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'horizontal' || direction === 'both' 
      ? [-intensity, intensity] 
      : [0, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'vertical' || direction === 'both' 
      ? [-intensity, intensity] 
      : [0, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hook para controlar el parallax basado en scroll
export const useParallax = (speed: number = 0.5) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY * speed;
};

// Componente de gradiente animado para fondos
interface AnimatedGradientProps {
  colors?: string[];
  duration?: number;
  className?: string;
}

export const AnimatedGradient = ({
  colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'],
  duration = 8,
  className = ''
}: AnimatedGradientProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
            `linear-gradient(135deg, ${colors[1]}, ${colors[2]})`,
            `linear-gradient(225deg, ${colors[2]}, ${colors[3]})`,
            `linear-gradient(315deg, ${colors[3]}, ${colors[0]})`,
          ]
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );
};

// Componente de partículas flotantes
interface FloatingParticlesProps {
  count?: number;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const FloatingParticles = ({
  count = 20,
  className = '',
  size = 'medium'
}: FloatingParticlesProps) => {
  const particles = Array.from({ length: count }, (_, i) => i);
  
  const sizeClasses = {
    small: 'w-1 h-1',
    medium: 'w-2 h-2',
    large: 'w-3 h-3'
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className={`absolute bg-white/20 rounded-full ${sizeClasses[size]}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}; 