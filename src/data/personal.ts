import { Skill, Experience, SocialLink } from '@/types';

export const personalInfo = {
  name: "Gianpierre Terrazas Tello",
  title: "Desarrollador Full Stack",
  subtitle: "Sistemas de gestión empresarial con TypeScript de punta a punta",
  bio: "Desarrollador Full Stack especializado en sistemas de gestión para empresas: planillas, RRHH, inventarios y automatización de procesos SUNAT. Trabajo con TypeScript en todo el stack: NestJS + Prisma + PostgreSQL en backend, Next.js + Tailwind CSS en frontend y Astro para sitios corporativos. Despliegue en Railway y almacenamiento en la nube compatible con S3.",
  location: "Perú",
  email: "pier_terrazas@hotmail.com",
  phone: "+51 961 170 946",
  avatarUrl: "/images/profile.webp",
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
    company: "STI GOLD",
    position: "Tech Lead & Full Stack Developer",
    period: "Enero 2026 - Presente",
    description: "Desarrollo completo de sistemas internos: arquitectura, backend, frontend y deploy. Automatización de consultas SUNAT con Playwright y APIs REST con Spring Boot y NestJS, con almacenamiento de archivos en Wasabi S3.",
    technologies: ["TypeScript", "NestJS", "Java", "Spring Boot", "Python", "PostgreSQL", "Docker"]
  },
  {
    company: "JJMM",
    position: "Programador",
    period: "Enero 2026 - Presente",
    description: "Desarrollo de software a medida para necesidades operativas de la empresa y automatización de procesos contables con Python.",
    technologies: ["Python", "React", "TypeScript", "PostgreSQL", "Git"]
  },
  {
    company: "SipnasisCode",
    position: "Full Stack Developer",
    period: "Julio 2025 - Diciembre 2025",
    description: "Desarrollo de múltiples sistemas empresariales para clientes de la agencia, participando en proyectos Full Stack bajo acuerdo de confidencialidad.",
    technologies: ["TypeScript", "NestJS", "React", "Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"]
  },
  {
    company: "GALDIAZ S.A.C.",
    position: "Programador Informático",
    period: "2024 - Julio 2025",
    description: "Sistema de control de inventario y gestión de stock, automatización de tareas administrativas con Python y macros VBA, y optimización de base de datos SQL Server.",
    technologies: ["Python", "PHP", "C#", "SQL Server", "Excel VBA", "Power BI"]
  },
  {
    company: "Mr. Sif",
    position: "Front-End Developer & SEO",
    period: "2024",
    description: "Desarrollo de interfaces web con AlpineJS y Tailwind CSS, y gestión de posicionamiento SEO y marketing digital.",
    technologies: ["AlpineJS", "Tailwind CSS", "Figma", "SEO"]
  },
  {
    company: "Ingecem Perú",
    position: "Desarrollador Web (Prácticas Pre-Profesionales)",
    period: "2018 - 2022",
    description: "Desarrollo de sistema de control de inventario en C#, diseño e implementación de interfaces de usuario y apoyo en el levantamiento de requerimientos.",
    technologies: ["C#", "HTML", "CSS", "JavaScript"]
  }
];