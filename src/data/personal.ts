import { Skill, Experience, SocialLink } from '@/types';

export const personalInfo = {
  name: "Gianpierre Terrazas Tello",
  title: "Desarrollador Full Stack",
  subtitle: "Desarrollador web especializado en soluciones modernas y funcionales",
  bio: "Desarrollador Full Stack con formación universitaria y experiencia autodidacta. Especializado en crear aplicaciones web funcionales utilizando tecnologías modernas como JavaScript, Python, React y Node.js.",
  location: "Perú",
  email: "pier_terrazas@hotmail.com",
  phone: "+51 961 170 946",
  avatarUrl: "/images/profile.jpg", // Agrega tu foto
  githubUsername: "Gianpierre-dev",
  resumeUrl: "/documents/CV_Gianpierre_Terrazas.pdf", // Agrega tu CV
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
  { name: "HTML5", level: 90, category: "frontend", icon: "html5" },
  { name: "CSS3", level: 85, category: "frontend", icon: "css3" },
  { name: "JavaScript", level: 88, category: "frontend", icon: "javascript" },
  { name: "React", level: 85, category: "frontend", icon: "react" },
  { name: "TypeScript", level: 80, category: "frontend", icon: "typescript" },
  { name: "Tailwind CSS", level: 85, category: "frontend", icon: "tailwind" },
  { name: "Bootstrap", level: 80, category: "frontend", icon: "bootstrap" },
  
  // Backend
  { name: "Node.js", level: 82, category: "backend", icon: "nodejs" },
  { name: "Express.js", level: 80, category: "backend", icon: "express" },
  { name: "PHP", level: 85, category: "backend", icon: "php" },
  { name: "Python", level: 83, category: "backend", icon: "python" },
  { name: "Java", level: 75, category: "backend", icon: "java" },
  { name: "C#", level: 70, category: "backend", icon: "csharp" },
  
  // Database
  { name: "MySQL", level: 85, category: "database", icon: "mysql" },
  { name: "MongoDB", level: 78, category: "database", icon: "mongodb" },
  
  // Tools
  { name: "Git", level: 88, category: "tools", icon: "git" },
  { name: "GitHub", level: 85, category: "tools", icon: "github" },
  { name: "VS Code", level: 90, category: "tools", icon: "vscode" },
];

export const experiences: Experience[] = [
  {
    company: "Freelance",
    position: "Desarrollador Full Stack",
    period: "2023 - Presente",
    description: "Desarrollo de aplicaciones web para diversos clientes. Manejo proyectos completos desde la planificación hasta la implementación, utilizando metodologías ágiles y tecnologías modernas.",
    technologies: ["React", "Next.js", "Node.js", "Python", "PHP", "MongoDB", "MySQL", "Tailwind CSS"]
  },
  {
    company: "Ingecem Perú",
    position: "Desarrollador Web",
    period: "2023",
    description: "Desarrollo y mantenimiento del sitio web corporativo. Implementación de funcionalidades como formularios de contacto, optimización SEO y diseño responsive.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap", "MySQL"]
  },
  {
    company: "Formación Autodidacta",
    position: "Estudiante de Desarrollo Web",
    period: "2022 - 2023",
    description: "Período de aprendizaje intensivo en desarrollo web. Realización de múltiples proyectos personales para dominar diferentes tecnologías y frameworks del ecosistema web moderno.",
    technologies: ["JavaScript", "React", "Python", "Java", "Git", "GitHub", "Node.js"]
  }
]; 