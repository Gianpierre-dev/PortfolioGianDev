import { Skill, Experience, SocialLink } from '@/types';

export const personalInfo = {
  name: "Gianpierre Terrazas Tello",
  title: "Desarrollador Full Stack",
  subtitle: "Programador apasionado por la eficiencia, el diseño limpio y la escalabilidad",
  bio: "Soy Gianpierre, programador Full Stack. Desarrollo soluciones en Python, PHP, JS y Java, fusiono software, y diseño gráfico.",
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
    company: "Ingecem Perú",
    position: "Desarrollador Full Stack",
    period: "2023 - Presente",
    description: "Desarrollo de aplicaciones web completas utilizando tecnologías modernas. Implementación de soluciones escalables y optimización de rendimiento.",
    technologies: ["JavaScript", "PHP", "Python", "MySQL", "HTML5", "CSS3"]
  },
  {
    company: "Freelance",
    position: "Desarrollador Web",
    period: "2022 - 2023",
    description: "Desarrollo de sitios web responsivos y aplicaciones web para diversos clientes. Enfoque en UX/UI y rendimiento.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Git"]
  }
  // Agrega más experiencias según sea necesario
]; 