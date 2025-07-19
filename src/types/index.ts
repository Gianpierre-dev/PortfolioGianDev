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

// Tipos para habilidades
export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon: string;
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

// Tipos para proyectos
export interface ProjectMetrics {
  stars: number;
  forks: number;
  language?: string;
  visits?: string | number;
}

export interface ProjectLinks {
  demo: string;
  code: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'automation';
  featured: boolean;
  status: 'live' | 'development' | 'demo';
  tech: string[];
  repoName: string;
  links: ProjectLinks;
  year: string;
  metrics?: ProjectMetrics;
  lastUpdate?: string;
}

// Tipos para categorías de proyectos
export interface ProjectCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}

// Tipos para configuración de estado
export interface StatusConfig {
  label: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Tipos para el hook de progreso de scroll
export interface ScrollProgressHook {
  progress: number;
  activeSection: string;
}

// Tipos para navegación
export interface NavigationItem {
  name: string;
  href: string;
}

// Tipos para componentes de UI
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// Tipos para animaciones de Framer Motion
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
      type?: string;
      stiffness?: number;
      damping?: number;
      staggerChildren?: number;
    };
  };
}

// Tipos para funciones utilitarias
export type ScrollToSectionFunction = (sectionId: string) => void;
export type EmailValidationFunction = (email: string) => boolean;

// Constantes de tipos
export type ThemeType = 'light' | 'dark' | 'system';
export type ProjectStatus = 'live' | 'development' | 'demo';
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools';
export type ProjectCategoryType = 'frontend' | 'fullstack' | 'mobile' | 'automation'; 