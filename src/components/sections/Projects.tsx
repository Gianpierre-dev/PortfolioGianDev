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
  Smartphone,
  Monitor,
  Database,
  Zap,
  Globe,
  Download,
  Eye,
  GitBranch,
  Clock,
  Bot
} from 'lucide-react';

// Configuración de proyectos híbrida - Manual + GitHub API
const staticProjects = [
  {
    id: 1,
    title: "Portfolio Gianpierre",
    description: "Portfolio personal desarrollado con Next.js, TypeScript y Tailwind CSS. Diseño moderno y responsive con animaciones sutiles.",
    longDescription: "Mi portfolio personal que muestra mis habilidades como desarrollador full-stack. Incluye secciones interactivas, tema oscuro/claro, animaciones fluidas y optimización SEO. Con sistema de proyectos dinámico que se actualiza automáticamente desde GitHub, diseño glassmorphism moderno y experiencia de usuario excepcional. Optimizado para rendimiento y accesibilidad.",
    image: "/images/projects/portfolio.jpg",
    category: "frontend",
    featured: true,
    status: "live",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "GitHub API"],
    repoName: "PortfolioGianDev",
    links: { 
      demo: "https://gianpierre-dev.vercel.app", 
      code: "https://github.com/Gianpierre-dev/PortfolioGianDev" 
    },
    year: "2024"
  },
  {
    id: 2,
    title: "ABBA-PADREWEB",
    description: "E-commerce completo con catálogo de productos, carrito de compras y sistema de gestión empresarial avanzado.",
    longDescription: "Plataforma e-commerce integral que combina tienda online moderna con sistema administrativo robusto. Incluye catálogo interactivo de productos, carrito de compras optimizado, panel de administración con métricas en tiempo real, gestión de inventario, procesamiento de pedidos y sistema de reportes detallados. Desarrollado con tecnologías web modernas para máximo rendimiento.",
    image: "/images/projects/abba.jpg",
    category: "fullstack", 
    featured: false,
    status: "live",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap", "Chart.js", "PayPal API"],
    repoName: "ABBA-PADREWEB",
    links: { 
      demo: "https://abba-padreweb.com", 
      code: "https://github.com/Gianpierre-dev/ABBA-PADREWEB" 
    },
    year: "2024"
  },
  {
    id: 4,
    title: "MrSif",
    description: "Aplicación web moderna con funcionalidades avanzadas y diseño intuitivo para una experiencia de usuario optimizada.",
    longDescription: "MrSif es una aplicación web desarrollada con tecnologías modernas, enfocada en proporcionar una interfaz limpia y funcional. Incluye características innovadoras y un diseño responsive que se adapta a diferentes dispositivos.",
    image: "/images/projects/mrsif.jpg",
    category: "frontend",
    featured: false,
    status: "development", 
    tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
    repoName: "MrSif",
    links: { 
      demo: "https://github.com/Gianpierre-dev/MrSif", 
      code: "https://github.com/Gianpierre-dev/MrSif" 
    },
    year: "2024"
  },
  {
    id: 5,
    title: "Celeste Music Web",
    description: "Plataforma de streaming de música con reproductor personalizado y interfaz moderna.",
    longDescription: "Web app de música con reproductor HTML5 personalizado, gestión de playlists, búsqueda de canciones y diseño responsive. Incluye efectos visuales y controles avanzados.",
    image: "/images/projects/celestemusic.jpg",
    category: "frontend",
    featured: false,
    status: "demo",
    tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
    repoName: "CelesteMusicWeb",
    links: { 
      demo: "https://gianpierre-dev.github.io/CelesteMusicWeb", 
      code: "https://github.com/Gianpierre-dev/CelesteMusicWeb" 
    },
    year: "2023"
  },
  {
    id: 6,
    title: "Ingecem Web",
    description: "Sitio web corporativo para empresa de ingeniería con diseño profesional y responsive.",
    longDescription: "Landing page corporativa desarrollada para Ingecem Perú con diseño moderno, optimización SEO, formularios de contacto y secciones informativas sobre servicios de ingeniería.",
    image: "/images/projects/ingecem.png",
    category: "frontend",
    featured: false,
    status: "live",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    repoName: "IngecemWeb",
    links: { 
      demo: "https://ingecemperu.com", 
      code: "https://github.com/Gianpierre-dev/IngecemWeb" 
    },
    year: "2023"
  },
  {
    id: 7,
    title: "Tierra Segura",
    description: "Plataforma web para gestión de seguridad y monitoreo con características avanzadas de protección y análisis.",
    longDescription: "Tierra Segura es una aplicación web integral diseñada para el monitoreo y gestión de seguridad. Incluye sistemas de alerta, dashboard en tiempo real, reportes detallados y herramientas de análisis para garantizar la protección y supervisión continua.",
    image: "/images/projects/tierrasegura.jpg",
    category: "fullstack",
    featured: false,
    status: "development",
    tech: ["JavaScript", "Node.js", "React", "MongoDB", "Express"],
    repoName: "TierraSeguraWeb",
    links: { 
      demo: "https://github.com/sigemype/TierraSeguraWeb", 
      code: "https://github.com/sigemype/TierraSeguraWeb" 
    },
    year: "2024"
  },
  {
    id: 8,
    title: "Zen2.0",
    description: "Aplicación web moderna con diseño minimalista y funcionalidades avanzadas para productividad y bienestar.",
    longDescription: "Zen2.0 es una aplicación web enfocada en productividad y mindfulness con interfaz limpia y moderna. Incluye herramientas para gestión de tareas, meditación guiada, tracking de hábitos y análisis de bienestar personal.",
    image: "/images/projects/zen.png",
    category: "frontend",
    featured: false,
    status: "development",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repoName: "Zen2.0",
    links: { 
      demo: "https://gianpierre-dev.github.io/Zen2.0", 
      code: "https://github.com/Gianpierre-dev/Zen2.0" 
    },
    year: "2024"
  }
];

const categories = [
  { id: 'all', name: 'Todos', icon: Code2, count: 8 },
  { id: 'frontend', name: 'Frontend', icon: Monitor, count: 5 },
  { id: 'fullstack', name: 'Full-Stack', icon: Database, count: 2 },
  { id: 'mobile', name: 'Mobile', icon: Smartphone, count: 0 },
  { id: 'automation', name: 'Automatización', icon: Bot, count: 1 }
];

const statusConfig = {
  live: { label: 'En Producción', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', icon: Globe },
  development: { label: 'En Desarrollo', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', icon: Code2 },
  demo: { label: 'Demo', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300', icon: Eye }
};

// Hook para obtener datos de GitHub automáticamente
function useGitHubData() {
  const [githubData, setGithubData] = useState<any>({});
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
        const dataMap = results.reduce((acc, item) => {
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
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Zap className="w-5 h-5 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Mis Proyectos
            </h2>
            {loading && (
              <div className="flex items-center gap-2 ml-3">
                <Clock className="w-4 h-4 text-blue-500 animate-spin" />
                <span className="text-xs text-gray-500">Actualizando desde GitHub...</span>
              </div>
            )}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Una selección de mis mejores proyectos desarrollados con tecnologías modernas. Métricas actualizadas automáticamente desde GitHub.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-out flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:shadow-md hover:scale-102'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}>
                {category.count}
              </span>
            </button>
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
                {!loading && (
                  <span className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white px-3 py-2 rounded-xl text-xs flex items-center gap-2 shadow-lg backdrop-blur-sm">
                    <GitBranch className="w-3 h-3" />
                    <span className="hidden sm:inline">GitHub Sync</span>
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
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                        <div className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500" />
                          {featuredProject.metrics.stars || 0}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">GitHub Stars</div>
                      </div>
                      <div className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
                          <GitBranch className="w-5 h-5 text-blue-500" />
                          {featuredProject.metrics.forks || 0}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">Forks</div>
                      </div>
                      <div className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                          {featuredProject.metrics.language || 'PHP'}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">Lenguaje Principal</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={featuredProject.links.demo}
                      className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Ver Demo Live
                    </a>
                    <a
                      href={featuredProject.links.code}
                      className="group flex items-center gap-3 bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-900 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Ver Código
                    </a>
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

function ProjectCard({ project, index, isHovered, onHover, loading }: {
  project: any;
  index: number;
  isHovered: boolean;
  onHover: (id: number | null) => void;
  loading: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onHoverStart={() => onHover(project.id)}
      onHoverEnd={() => onHover(null)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.02]"
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-contain transition-transform duration-700 ease-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <StatusBadge status={project.status} />
          {!loading && project.metrics.language && (
            <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
              {project.metrics.language}
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-white text-sm font-medium">{project.year}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {!loading && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Star className="w-3 h-3" />
              <span>{project.metrics.stars}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <a
              href={project.links.demo}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
            >
              Ver Demo
            </a>
            <a
              href={project.links.code}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium text-sm transition-colors flex items-center gap-1"
            >
              <Github className="w-3 h-3" />
              Código
            </a>
          </div>
          
          {!loading && (
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                <GitBranch className="w-3 h-3" />
                {project.metrics.forks}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                forks
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 