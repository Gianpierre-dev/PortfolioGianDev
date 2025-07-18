import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import emailjs from 'emailjs-com';
import { ContactForm } from '@/types';

// Utility para combinar clases de Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Configuración de EmailJS
const EMAILJS_SERVICE_ID = 'your_service_id'; // Actualizar con tu Service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Actualizar con tu Template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Actualizar con tu Public Key

// Función para enviar emails
export async function sendEmail(formData: ContactForm): Promise<boolean> {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Gianpierre Terrazas',
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Función para formatear fechas
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Función para truncar texto
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// Función para obtener el color de un lenguaje de programación
export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    'C#': '#239120',
    PHP: '#4F5D95',
    HTML: '#e34c26',
    CSS: '#1572B6',
    React: '#61dafb',
    'Vue.js': '#4FC08D',
    Angular: '#dd1b16',
    Node: '#68a063',
    Express: '#000000',
    MongoDB: '#47A248',
    MySQL: '#00618a',
    PostgreSQL: '#336791',
  };
  
  return colors[language] || '#6b7280';
}

// Función para validar email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para obtener las iniciales de un nombre
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Función para scroll suave a una sección
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// Función para calcular el tiempo transcurrido
export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'hace un momento';
  if (diffInSeconds < 3600) return `hace ${Math.floor(diffInSeconds / 60)} minutos`;
  if (diffInSeconds < 86400) return `hace ${Math.floor(diffInSeconds / 3600)} horas`;
  if (diffInSeconds < 2592000) return `hace ${Math.floor(diffInSeconds / 86400)} días`;
  if (diffInSeconds < 31536000) return `hace ${Math.floor(diffInSeconds / 2592000)} meses`;
  return `hace ${Math.floor(diffInSeconds / 31536000)} años`;
} 