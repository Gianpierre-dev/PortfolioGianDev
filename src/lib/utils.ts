import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ScrollToSectionFunction, EmailValidationFunction } from '@/types';

/**
 * Combina clases CSS usando clsx y tailwind-merge para resolver conflictos
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Valida si un email tiene un formato correcto
 */
export const isValidEmail: EmailValidationFunction = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Realiza scroll suave hacia una sección específica
 */
export const scrollToSection: ScrollToSectionFunction = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 80; // Altura aproximada del navbar
    const elementPosition = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Formatea una fecha a texto legible en español
 */
export function formatDate(date: string | Date): string {
  const dateObject = typeof date === 'string' ? new Date(date) : date;
  
  return dateObject.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Formatea un número con separadores de miles
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('es-ES');
}

/**
 * Trunca un texto a una longitud específica
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Genera un delay aleatorio para animaciones escalonadas
 */
export function getRandomDelay(min: number = 0, max: number = 0.5): number {
  return Math.random() * (max - min) + min;
}

/**
 * Convierte un string a slug para URLs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
    .replace(/[^a-z0-9\s-]/g, '') // Elimina caracteres especiales
    .replace(/\s+/g, '-') // Reemplaza espacios con guiones
    .trim();
}

/**
 * Obtiene las iniciales de un nombre completo
 */
export function getInitials(fullName: string): string {
  return fullName
    .split(' ')
    .map(name => name.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Calcula el tiempo de lectura aproximado de un texto
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Debounce para limitar la frecuencia de ejecución de funciones
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T, 
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
} 