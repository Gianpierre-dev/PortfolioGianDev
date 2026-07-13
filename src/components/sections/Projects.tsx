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
    <section id="projects" className="relative py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
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
              className="p-3 bg-blue-600 rounded-2xl shadow-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {/* Icon */}
              <div className={`relative z-10 p-1.5 rounded-lg ${
                selectedCategory === category.id
                  ? 'bg-white/20'
                  : 'bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600'
              } transition-colors duration-300`}>
                <category.icon className="w-4 h-4" />
              </div>

              {/* Category name */}
              <span className="relative z-10">{category.name}</span>

              {/* Count badge */}
              <div className={`relative z-10 px-3 py-1 rounded-xl text-xs font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}>
                {category.count}
              </div>
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
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="absolute top-6 right-6 flex items-center gap-3">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm">
                  <Star className="w-4 h-4 fill-current" />
                  Proyecto Destacado
                </span>
                {featuredProject.private && (
                  <span className="bg-gray-800 dark:bg-gray-700 text-white px-3 py-2 rounded-xl text-xs flex items-center gap-2 shadow-sm">
                    <Lock className="w-3 h-3" />
                    <span className="hidden sm:inline">Proyecto privado</span>
                  </span>
                )}
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {featuredProject.category} • {featuredProject.year}
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
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
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-semibold transition-all duration-300"
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
                        className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Ver Demo Live
                      </a>
                    )}
                    {featuredProject.links.code && (
                      <a
                        href={featuredProject.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <Github className="w-5 h-5" />
                        Ver Código
                      </a>
                    )}
                    {featuredProject.private && (
                      <a
                        href="#contact"
                        className="group flex items-center gap-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
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
                  <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-500">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-contain transition-transform duration-500"
                    />
                  </div>

                  {/* Year Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-md border-4 border-white dark:border-gray-800">
                    <Calendar className="w-6 h-6 mb-1" />
                    <div className="text-lg font-bold">{featuredProject.year}</div>
                  </div>
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onHoverStart={() => onHover(project.id)}
      onHoverEnd={() => onHover(null)}
      className="group relative"
    >
      {/* Main Card */}
      <div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-out group-hover:shadow-md"
      >
        {/* Image Section */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-all duration-500 ease-out"
          />

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

          {/* Year Badge */}
          <div className="absolute bottom-4 left-4 z-30">
            <div className="bg-blue-600/90 backdrop-blur-md rounded-lg px-3 py-1.5">
              <span className="text-white text-sm font-bold">{project.year}</span>
            </div>
          </div>

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
        
        {/* Content Section */}
        <div className="relative p-6">
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
            {project.tech.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/60 text-gray-500 dark:text-gray-400 rounded-full text-xs">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
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
                project.status === 'live' ? 'bg-green-500' :
                project.status === 'development' ? 'bg-yellow-500' :
                'bg-blue-500'
              }`}></div>
              <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                {project.status === 'live' ? 'En vivo' : 
                 project.status === 'development' ? 'En desarrollo' : 
                 'Demo'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}