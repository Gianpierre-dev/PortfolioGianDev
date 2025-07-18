'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { getGitHubRepos } from '@/lib/github';
import { getLanguageColor } from '@/lib/utils';
import { Project } from '@/types';
import { ExternalLink, Github, Star, GitFork, Calendar, Filter } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [projects, selectedFilter]);

  const fetchProjects = async () => {
    try {
      const repos = await getGitHubRepos();
      console.log('Proyectos cargados:', repos.length); // Debug
      
      // Mostrar TODOS los repositorios
      setProjects(repos);
      console.log('Todos los proyectos:', repos.map(repo => `${repo.name} (${repo.language || 'Sin lenguaje'}) - ${repo.description || 'Sin descripción'}`)); // Debug
      console.log('Total de repositorios cargados:', repos.length);
      
      // Extraer lenguajes únicos (incluyendo null/undefined)
      const uniqueLanguages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];
      setLanguages(uniqueLanguages);
      console.log('Lenguajes encontrados:', uniqueLanguages); // Debug
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterProjects = () => {
    console.log('Ejecutando filterProjects...'); // Debug
    console.log('Filtro seleccionado:', selectedFilter); // Debug
    console.log('Proyectos disponibles:', projects.length); // Debug
    
    let filtered;
    if (selectedFilter === 'all') {
      filtered = projects;
    } else if (selectedFilter === 'sin-lenguaje') {
      filtered = projects.filter(project => !project.language);
    } else {
      filtered = projects.filter(project => project.language === selectedFilter);
    }
    
    console.log('Proyectos después del filtro:', filtered.length); // Debug
    console.log('Proyectos filtrados:', filtered.map(p => p.name)); // Debug
    
    setFilteredProjects(filtered);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -5,
        scale: 1.02
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden group transition-all duration-300"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* Topics */}
        {project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.topics.slice(0, 3).map((topic, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
              >
                {topic}
              </span>
            ))}
            {project.topics.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full text-xs">
                +{project.topics.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
          {project.language && (
            <div className="flex items-center gap-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(project.language) }}
              />
              <span>{project.language}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{project.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            <span>{project.forks_count}</span>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Calendar className="w-3 h-3" />
          <span>Actualizado: {new Date(project.updated_at).toLocaleDateString('es-ES')}</span>
        </div>

        {/* Links */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open(project.html_url, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Código
          </Button>
          {project.homepage && (
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => window.open(project.homepage, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Todos mis Repositorios
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explora todos mis repositorios de GitHub: proyectos completos, documentación, configuraciones y más
          </p>
          {/* Stats info */}
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {!loading && (
              <>
                Total de proyectos: {projects.length} | 
                Filtrados: {filteredProjects.length} | 
                Filtro activo: {selectedFilter}
              </>
            )}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            <Filter className="w-4 h-4 mr-2 inline" />
            Todos ({projects.length})
          </button>
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setSelectedFilter(language)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === language
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <div
                className="w-3 h-3 rounded-full mr-2 inline-block"
                style={{ backgroundColor: getLanguageColor(language) }}
              />
              {language}
            </button>
          ))}
          
          {/* Filtro para repositorios sin lenguaje */}
          {projects.some(project => !project.language) && (
            <button
              onClick={() => setSelectedFilter('sin-lenguaje')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === 'sin-lenguaje'
                  ? 'bg-gray-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <div className="w-3 h-3 rounded-full mr-2 inline-block bg-gray-400" />
              Sin lenguaje ({projects.filter(p => !p.language).length})
            </button>
          )}
        </motion.div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-pulse"
              >
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded flex-1"></div>
                  <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded flex-1"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="text-center mb-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200">
                🚀 Mostrando {filteredProjects.length} repositorios públicos de GitHub
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                Incluye repositorios con y sin descripción
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8 auto-rows-fr">
              {filteredProjects.map((project, index) => {
                console.log('Renderizando proyecto:', project.name); // Debug
                return (
                  <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 min-h-[3rem]">
                      {project.description || 'Repositorio sin descripción'}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(project.language || 'Unknown') }}
                        />
                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                          {project.language || 'Sin lenguaje'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stargazers_count || 0}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks_count || 0}</span>
                      </div>
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.html_url, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                      {project.homepage && (
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1"
                          onClick={() => window.open(project.homepage, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-8 mb-8">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No se encontraron repositorios
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedFilter === 'all' ? 
                    'No hay repositorios disponibles en este momento' : 
                    `No hay repositorios en ${selectedFilter}. Intenta con otro filtro.`
                  }
                </p>
              </div>
            )}
          </>
        )}





        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/Gianpierre-dev', '_blank')}
            className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900"
          >
            <Github className="w-5 h-5 mr-2" />
            Ver más en GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 