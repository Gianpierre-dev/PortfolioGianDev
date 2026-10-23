// Tipos para la información personal
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  avatarUrl: string;
  githubUsername: string;
  resumeUrl: string;
}

// Tipos para habilidades. Sin niveles ni porcentajes: el stack se muestra
// agrupado por categoría.
export interface Skill {
  name: string;
  category: SkillCategory;
}

// Tipos para experiencia laboral
export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

// Tipos para enlaces sociales
export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail';
}

// Tipos para formulario de contacto
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Tipos para funciones utilitarias
export type ScrollToSectionFunction = (sectionId: string) => void;
export type EmailValidationFunction = (email: string) => boolean;

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools';
