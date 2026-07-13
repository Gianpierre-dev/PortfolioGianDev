import { Skill, Experience, SocialLink } from '@/types';

export const personalInfo = {
  name: "Gianpierre Terrazas Tello",
  title: "Desarrollador Full Stack",
  subtitle: "Sistemas de gestión empresarial con TypeScript de punta a punta",
  bio: "Desarrollador Full Stack especializado en sistemas de gestión para empresas: planillas, RRHH, inventarios y automatización de procesos SUNAT. Trabajo con TypeScript en todo el stack: NestJS + Prisma + PostgreSQL en backend, Next.js + Tailwind CSS en frontend y Astro para sitios corporativos. Despliegue en Railway y almacenamiento en la nube compatible con S3.",
  location: "Perú",
  email: "pier_terrazas@hotmail.com",
  phone: "+51 961 170 946",
  avatarUrl: "/images/profile.png",
  githubUsername: "Gianpierre-dev",
  resumeUrl: "/documents/CV_Anthony_Gianpierre_Terrazas_Tello.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Gianpierre-dev",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gianpierre-terrazas-tello-a792282a1/",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "mail"
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "TypeScript", level: 92, category: "frontend", icon: "typescript" },
  { name: "Next.js", level: 90, category: "frontend", icon: "react" },
  { name: "React", level: 90, category: "frontend", icon: "react" },
  { name: "Astro", level: 85, category: "frontend", icon: "astro" },
  { name: "Tailwind CSS", level: 92, category: "frontend", icon: "tailwind" },

  // Backend
  { name: "NestJS", level: 90, category: "backend", icon: "nodejs" },
  { name: "Node.js", level: 88, category: "backend", icon: "nodejs" },
  { name: "Prisma ORM", level: 88, category: "backend", icon: "nodejs" },
  { name: "Python", level: 80, category: "backend", icon: "python" },
  { name: "Java / Spring Boot", level: 72, category: "backend", icon: "java" },
  { name: "PHP", level: 75, category: "backend", icon: "php" },

  // Database
  { name: "PostgreSQL", level: 88, category: "database", icon: "mysql" },
  { name: "MySQL", level: 85, category: "database", icon: "mysql" },
  { name: "MongoDB", level: 72, category: "database", icon: "mongodb" },

  // Tools
  { name: "Playwright", level: 85, category: "tools", icon: "git" },
  { name: "Railway", level: 85, category: "tools", icon: "github" },
  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "AWS S3 / Wasabi", level: 80, category: "tools", icon: "github" },
];

export const experiences: Experience[] = [
  {
    company: "Freelance",
    position: "Desarrollador Full Stack",
    period: "2023 - Presente",
    description: "Desarrollo de sistemas de gestión a medida para empresas peruanas: planillas multiempresa, RRHH, inventarios y automatización de procesos tributarios (SUNAT). Proyectos completos desde el levantamiento de requerimientos hasta el despliegue en producción.",
    technologies: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS", "Playwright", "Railway"]
  },
  {
    company: "Ingecem Perú",
    position: "Desarrollador Web",
    period: "2023 - Presente",
    description: "Desarrollo y mantenimiento del sitio corporativo y herramientas internas. Implementación de formularios de contacto, optimización SEO y diseño responsive.",
    technologies: ["TypeScript", "Vite", "Tailwind CSS", "PHP", "MySQL"]
  }
];