'use client';

import { useState, useRef, MouseEvent } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface RippleButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  rippleColor?: string;
  children: React.ReactNode;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export default function RippleButton({
  variant = 'primary',
  size = 'md',
  rippleColor,
  children,
  className = '',
  onMouseDown,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const baseClasses = `
    relative overflow-hidden font-medium transition-all duration-200 
    transform-gpu focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    shadow-lg hover:shadow-xl active:shadow-md
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-600 to-purple-600 text-white
      hover:from-blue-700 hover:to-purple-700 
      active:from-blue-800 active:to-purple-800
      shadow-blue-500/25 hover:shadow-blue-500/40
    `,
    secondary: `
      bg-gradient-to-r from-gray-600 to-gray-700 text-white
      hover:from-gray-700 hover:to-gray-800 
      active:from-gray-800 active:to-gray-900
      shadow-gray-500/25 hover:shadow-gray-500/40
    `,
    outline: `
      border-2 border-blue-600 text-blue-600 bg-transparent
      hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700
      active:bg-blue-100 active:border-blue-800 active:text-blue-800
      dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20
      dark:hover:border-blue-300 dark:hover:text-blue-300
      shadow-blue-500/10 hover:shadow-blue-500/20
    `,
    ghost: `
      bg-transparent text-gray-700 hover:bg-gray-100 
      active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800
      dark:active:bg-gray-700 shadow-none hover:shadow-lg
    `,
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now() + Math.random(),
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
    onMouseDown?.(e);
  };

  const getRippleColor = () => {
    if (rippleColor) return rippleColor;
    
    switch (variant) {
      case 'primary':
        return 'rgba(255, 255, 255, 0.6)';
      case 'secondary':
        return 'rgba(255, 255, 255, 0.5)';
      case 'outline':
        return 'rgba(59, 130, 246, 0.2)';
      case 'ghost':
        return 'rgba(0, 0, 0, 0.1)';
      default:
        return 'rgba(255, 255, 255, 0.6)';
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onMouseDown={handleMouseDown}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98, y: 0 }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5
      }}
      {...props}
    >
      {/* Ripple Effect */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            backgroundColor: getRippleColor(),
          }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.button>
  );
} 