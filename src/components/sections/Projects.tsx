'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Star,
  Users,
  Calendar,
  Code2,
  Monitor,
  Lock,
  Database,
  Zap,
  Globe,
  Download,
  Eye,
  GitBranch,
  Clock,
  Bot
} from 'lucide-react';

// Proyectos curados manualmente. Los sistemas privados (para empresas) no
// exponen repositorio ni demo: se documentan como case studies.
const staticProjects = [
  {
    id: 1,
    title: "Sistema de Planillas MultiEmpresa",
    description: "Motor de cálculo de planillas bajo legislación laboral peruana con soporte para los 6 regímenes privados del país.",
    longDescription: "Sistema de nómina multiempresa que cubre el ciclo completo: carga de trabajadores, cálculo de planillas bajo los 6 regímenes laborales privados de Perú (General, Pequeña empresa, Microempresa, Agrario, Construcción civil, Trabajadoras del hogar) y generación de boletas de pago. Backend con arquitectura hexagonal, más de 370 tests automatizados y CI bloqueante.",
    image: "/images/projects/planillas.svg",
    category: "fullstack",
    featured: true,
    status: "development",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS", "Railway", "Wasabi S3"],
    repoName: "",
    private: true,
    links: { demo: "", code: "" },
    year: "2026"
  },
  {
    id: 2,
    title: "SIGEMYPE",
    description: "Sistema de gestión integral para estudio contable: cronogramas tributarios SUNAT, alertas, parte diario y consultas RUC/DNI.",
    longDescription: "Plataforma interna para un estudio contable que administra cronogramas de obligaciones tributarias y laborales (SUNAT), alertas de vencimientos, parte diario de trabajo del equipo, planificación de tareas y consultas automatizadas de DNI, RUC y tipo de cambio. Monorepo con Turborepo, importación desde Excel, más de 120 tests, hardening de seguridad (rate limiting, revocación JWT) y métricas Prometheus.",
    image: "/images/projects/sigemype.svg",
    category: "fullstack",
    featured: false,
    status: "live",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Turborepo", "Redis"],
    repoName: "",
    private: true,
    links: { demo: "", code: "" },
    year: "2026"
  },
  {
    id: 3,
    title: "Sistema de RRHH MultiEmpresa",
    description: "Gestión de empleados, contratos y documentos con soporte multiempresa y generación de carnets en PDF.",
    longDescription: "Sistema de Recursos Humanos en producción para gestión multiempresa: legajos de empleados, contratos, documentos y fotos, con generación automática de photochecks y carnets en PDF. Autenticación JWT, validación con Zod y despliegue en Railway.",
    image: "/images/projects/rrhh.svg",
    category: "fullstack",
    featured: false,
    status: "live",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS", "Railway"],
    repoName: "",
    private: true,
    links: { demo: "", code: "" },
    year: "2026"
  },
  {
    id: 4,
    title: "Automatización SUNAT",
    description: "App de escritorio que descarga y clasifica comprobantes electrónicos del portal SUNAT de forma masiva.",
    longDescription: "Aplicación de escritorio que automatiza la descarga, organización y clasificación de comprobantes electrónicos (facturas, boletas, guías de remisión) desde el portal SUNAT, parseando XML bajo el estándar UBL 2.1. Scraping con Playwright, interfaz PySide6 y distribución como ejecutable.",
    image: "/images/projects/automation-python.jpg",
    category: "automation",
    featured: false,
    status: "development",
    tech: ["Python", "Playwright", "PySide6", "SQLAlchemy", "SQLite"],
    repoName: "Sistema-de-automatizaciones-Sunat-",
    private: false,
    links: {
      demo: "",
      code: "https://github.com/Gianpierre-dev/Sistema-de-automatizaciones-Sunat-"
    },
    year: "2026"
  },
  {
    id: 5,
    title: "TeachGenius",
    description: "Plataforma educativa gamificada: profesores crean sopas de letras de figuras literarias y los alumnos compiten contra el tiempo.",
    longDescription: "Aplicación educativa gamificada donde los docentes crean actividades de pupiletras (sopas de letras) sobre figuras literarias y los alumnos las resuelven desde cualquier dispositivo con temporizador competitivo. Backend NestJS con Prisma y frontend Astro + React.",
    image: "/images/projects/teachgenius.svg",
    category: "fullstack",
    featured: false,
    status: "development",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Astro", "React", "Tailwind CSS"],
    repoName: "TeachGenius_Frontend",
    private: false,
    links: {
      demo: "",
      code: "https://github.com/Gianpierre-dev/TeachGenius_Frontend"
    },
    year: "2026"
  },
  {
    id: 6,
    title: "Tonin",
    description: "Web app inmersiva de frases motivacionales según tu estado de ánimo, con música ambiental y experiencia swipe.",
    longDescription: "Producto propio B2C: frases motivacionales adaptadas al estado de ánimo del usuario con experiencia de swipe, música ambiental por mood, temas dinámicos y panel de administración. Frontend React con Zustand y Framer Motion; API en Java 21 + Spring Boot con JWT y almacenamiento en Wasabi S3.",
    image: "/images/projects/tonin.svg",
    category: "fullstack",
    featured: false,
    status: "development",
    tech: ["React", "TypeScript", "Zustand", "Spring Boot", "Wasabi S3"],
    repoName: "Tonin-Web",
    private: false,
    links: {
      demo: "",
      code: "https://github.com/Gianpierre-dev/Tonin-Web"
    },
    year: "2026"
  },
  {
    id: 7,
    title: "Portfolio Gianpierre",
    description: "Este portfolio: Next.js 15, TypeScript y Tailwind CSS, con proyectos sincronizados desde GitHub.",
    longDescription: "Portfolio personal con tema oscuro/claro, animaciones con Framer Motion, optimización SEO y métricas de repositorios actualizadas automáticamente desde la API de GitHub.",
    image: "/images/projects/portfolio.jpg",
    category: "frontend",
    featured: false,
    status: "live",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "GitHub API"],
    repoName: "PortfolioGianDev",
    private: false,
    links: {
      demo: "https://gianpierre-dev.vercel.app",
      code: "https://github.com/Gianpierre-dev/PortfolioGianDev"
    },
    year: "2025"
  },
  {
    id: 8,
    title: "Ingecem Web",
    description: "Sitio corporativo para empresa de ingeniería con optimización SEO y formularios de contacto.",
    longDescription: "Sitio web corporativo de Ingecem Perú con diseño responsive, optimización SEO, formularios de contacto y secciones informativas sobre servicios de ingeniería.",
    image: "/images/projects/ingecem.png",
    category: "frontend",
    featured: false,
    status: "live",
    tech: ["TypeScript", "Vite", "Tailwind CSS"],
    repoName: "IngecemWeb",
    private: false,
    links: {
      demo: "https://ingecemperu.com",
      code: "https://github.com/Gianpierre-dev/IngecemWeb"
    },
    year: "2025"
  }
];

const categories = [
  { id: 'all', name: 'Todos', icon: Code2, count: 8 },
  { id: 'fullstack', name: 'Sistemas', icon: Database, count: 5 },
  { id: 'frontend', name: 'Frontend', icon: Monitor, count: 2 },
  { id: 'automation', name: 'Automatización', icon: Bot, count: 1 }
];

const statusConfig = {
  live: { label: 'En Producción', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', icon: Globe },
  development: { label: 'En Desarrollo', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', icon: Code2 },
  demo: { label: 'Demo', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300', icon: Eye }
};

type StaticProject = (typeof staticProjects)[number];

interface GitHubRepoData {
  id: number;
  stars: number;
  forks: number;
  lastUpdate: string;
  language: string | null;
  size: number;
}

type ProjectWithMetrics = StaticProject & {
  metrics: { stars: number; forks: number; language?: string | null; visits?: string };
  lastUpdate?: string;
};

// Hook para obtener datos de GitHub automáticamente
function useGitHubData() {
  const [githubData, setGithubData] = useState<Record<number, GitHubRepoData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const repoPromises = staticProjects.map(async (project) => {
          if (project.repoName && project.links.code) {
            // Extraer usuario y repo de la URL de GitHub
            const match = project.links.code.match(/github\.com\/([^\/]+)\/([^\/]+)/);
            if (match) {
              const [, owner, repo] = match;
              const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
              if (response.ok) {
                const data = await response.json();
                return {
                  id: project.id,
                  stars: data.stargazers_count,
                  forks: data.forks_count,
                  lastUpdate: data.updated_at,
                  language: data.language,
                  size: data.size
                };
              }
            }
          }
          return null;
        });

        const results = await Promise.all(repoPromises);
        const dataMap = results.reduce<Record<number, GitHubRepoData>>((acc, item) => {
          if (item) {
            acc[item.id] = item;
          }
          return acc;
        }, {});

        setGithubData(dataMap);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return { githubData, loading };
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { githubData, loading } = useGitHubData();

  // Combinar datos estáticos con datos de GitHub
  const projects = staticProjects.map(project => {
    const githubInfo = githubData[project.id];
    return {
      ...project,
      metrics: githubInfo ? {
        stars: githubInfo.stars,
        forks: githubInfo.forks,
        language: githubInfo.language
      } : {
        stars: 0,
        forks: 0,
        visits: "N/A"
      },
      lastUpdate: githubInfo?.lastUpdate
    };
  });

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mb-4 group"
          >
            <motion.div
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                Mis Proyectos
              </h2>
              {loading && (
                <div className="flex items-center justify-center gap-2 mt-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="w-4 h-4 text-blue-500" />
                  </motion.div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Sincronizando con GitHub...
                  </span>
                </div>
              )}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
              Sistemas de gestión empresarial y productos propios. Los proyectos privados se desarrollaron para empresas y no exponen código.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Métricas de proyectos públicos sincronizadas desde GitHub</span>
            </div>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:border-white/50 dark:hover:border-gray-600/50'
              }`}
            >
              {/* Glow effect for active */}
              {selectedCategory === category.id && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-30 blur-lg"></div>
              )}
              
              {/* Icon with enhanced styling */}
              <div className={`relative z-10 p-1.5 rounded-lg ${
                selectedCategory === category.id 
                  ? 'bg-white/20' 
                  : 'bg-gray-100/50 dark:bg-gray-700/50 group-hover:bg-gray-200/60 dark:group-hover:bg-gray-600/60'
              } transition-colors duration-300`}>
                <category.icon className="w-4 h-4" />
              </div>
              
              {/* Category name */}
              <span className="relative z-10">{category.name}</span>
              
              {/* Count badge with premium styling */}
              <div className={`relative z-10 px-3 py-1 rounded-xl text-xs font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white backdrop-blur-sm'
                  : 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 group-hover:from-gray-200 group-hover:to-gray-300 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500'
              }`}>
                {category.count}
              </div>
              
              {/* Animated underline for active state */}
              {selectedCategory === category.id && (
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Featured Project */}
        {featuredProject && (selectedCategory === 'all' || featuredProject.category === selectedCategory) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-800/30 shadow-2xl shadow-purple-100/50 dark:shadow-purple-900/20 overflow-hidden backdrop-blur-sm">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute top-6 right-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg backdrop-blur-sm">
                  <Star className="w-4 h-4 fill-current animate-pulse" />
                  Proyecto Destacado
                </span>
                {featuredProject.private && (
                  <span className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white px-3 py-2 rounded-xl text-xs flex items-center gap-2 shadow-lg backdrop-blur-sm">
                    <Lock className="w-3 h-3" />
                    <span className="hidden sm:inline">Proyecto privado</span>
                  </span>
                )}
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                        {featuredProject.category} • {featuredProject.year}
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 dark:from-white dark:via-purple-300 dark:to-blue-300 bg-clip-text text-transparent leading-tight">
                      {featuredProject.title}
                    </h3>
                    <StatusBadge status={featuredProject.status} />
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium">
                    {featuredProject.longDescription}
                  </p>
                  
                  <div className="space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
                        Stack Tecnológico
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.tech.map((tech, index) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-cyan-900/40 text-purple-800 dark:text-purple-300 rounded-xl text-sm font-semibold border border-purple-200/50 dark:border-purple-700/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    {featuredProject.links.demo && (
                      <a
                        href={featuredProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Ver Demo Live
                      </a>
                    )}
                    {featuredProject.links.code && (
                      <a
                        href={featuredProject.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-900 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Ver Código
                      </a>
                    )}
                    {featuredProject.private && (
                      <a
                        href="#contact"
                        className="group flex items-center gap-3 bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-900 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <Lock className="w-5 h-5" />
                        Proyecto privado — Consultar
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="relative group">
                  {/* Image Container */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-cyan-900/30 rounded-2xl overflow-hidden shadow-2xl border border-purple-200/50 dark:border-purple-700/30 group-hover:shadow-3xl transition-all duration-500">
                    <img 
                      src={featuredProject.image} 
                      alt={featuredProject.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Floating Year Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-2xl shadow-xl border-4 border-white dark:border-gray-800 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 mb-1" />
                    <div className="text-lg font-bold">{featuredProject.year}</div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                  <div className="absolute -top-2 -right-8 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 delay-75"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={setHoveredProject}
              loading={loading}
            />
          ))}
        </div>

        {/* GitHub Integration Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg text-sm text-blue-700 dark:text-blue-300">
            <Github className="w-4 h-4" />
            <span>Las métricas se actualizan automáticamente desde GitHub</span>
            {!loading && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config = statusConfig[status as keyof typeof statusConfig];
  const Icon = config.icon;
  
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  );
}

function ProjectCard({ project, index, onHover, loading }: {
  project: ProjectWithMetrics;
  index: number;
  isHovered: boolean;
  onHover: (id: number | null) => void;
  loading: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      onHoverStart={() => onHover(project.id)}
      onHoverEnd={() => onHover(null)}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      {/* Glow Effect Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 ease-out"></div>
      
      {/* Main Card */}
      <motion.div
        whileHover={{ 
          rotateX: 5, 
          rotateY: 5, 
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 dark:border-gray-700/30 overflow-hidden transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:border-white/50 dark:group-hover:border-gray-600/50"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Floating Particles on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Image Section with Advanced Effects */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
          
          {/* Image with Parallax Effect */}
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain transition-all duration-700 ease-out"
            whileHover={{ 
              scale: 1.1,
              filter: "brightness(1.1) contrast(1.1)",
              transition: { duration: 0.7, ease: "easeOut" }
            }}
          />
          
          {/* Interactive Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-700 z-20"></div>
          
          {/* Top Badges with Glass Effect */}
          <div className="absolute top-4 left-4 flex items-center gap-2 z-30">
            <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/30">
              <StatusBadge status={project.status} />
            </div>
            {!loading && project.metrics.language && (
              <div className="bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/20">
                {project.metrics.language}
              </div>
            )}
          </div>

          {/* Year Badge with Animation */}
          <motion.div 
            className="absolute bottom-4 left-4 z-30"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/30">
              <span className="text-white text-sm font-bold">{project.year}</span>
            </div>
          </motion.div>

          {/* Quick Actions Overlay */}
          {(project.links.demo || project.links.code) && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-30">
              <div className="flex gap-3">
                {project.links.demo && (
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full p-3 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg border border-white/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                )}
                {project.links.code && (
                  <motion.a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg border border-white/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Content Section with Glass Effect */}
        <div className="relative p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm">
          {/* Header with GitHub Stats */}
          <div className="flex items-start justify-between mb-3">
            <motion.h3 
              className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {project.title}
            </motion.h3>
            {project.private ? (
              <span className="flex items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full">
                <Lock className="w-3 h-3" />
                Privado
              </span>
            ) : (!loading && project.repoName && (
              <motion.div
                className="flex items-center gap-3 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">{project.metrics.stars}</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                  <GitBranch className="w-4 h-4" />
                  <span className="font-semibold">{project.metrics.forks}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Description with Better Typography */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
          
          {/* Tech Stack with Enhanced Styling */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 4).map((tech: string, techIndex: number) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/30 dark:border-purple-400/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ delay: techIndex * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1.5 bg-gray-100/50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 rounded-full text-xs backdrop-blur-sm">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
            <div className="flex gap-4">
              {project.links.demo && (
                <motion.a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition-colors duration-200 flex items-center gap-1"
                  whileHover={{ x: 3 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo
                </motion.a>
              )}
              {project.links.code && (
                <motion.a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-semibold text-sm transition-colors duration-200 flex items-center gap-1"
                  whileHover={{ x: 3 }}
                >
                  <Github className="w-4 h-4" />
                  Código
                </motion.a>
              )}
              {project.private && (
                <motion.a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-semibold text-sm transition-colors duration-200 flex items-center gap-1"
                  whileHover={{ x: 3 }}
                >
                  <Lock className="w-4 h-4" />
                  Consultar
                </motion.a>
              )}
            </div>
            
            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                project.status === 'live' ? 'bg-green-400 animate-pulse' : 
                project.status === 'development' ? 'bg-yellow-400 animate-pulse' : 
                'bg-blue-400'
              }`}></div>
              <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                {project.status === 'live' ? 'En vivo' : 
                 project.status === 'development' ? 'En desarrollo' : 
                 'Demo'}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-70 group-hover:scale-150 transition-all duration-500"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-70 group-hover:scale-150 transition-all duration-500 delay-100"></div>
      </motion.div>
    </motion.div>
  );
} 