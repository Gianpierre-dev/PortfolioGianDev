'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/data/personal';
import { Skill } from '@/types';
import { 
  Code2, 
  Database, 
  Wrench, 
  Monitor, 
  Server, 
  Layers,
  Code,
  Palette,
  Component,
  FileType,
  Wind,
  Layout,
  Zap,
  Coffee,
  Hash,
  Leaf,
  GitBranch,
  Github,
  Globe,
  Atom
} from 'lucide-react';

const categoryIcons = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  tools: Wrench,
  other: Layers,
};

const categoryColors = {
  frontend: 'from-blue-500 to-purple-500',
  backend: 'from-green-500 to-teal-500',
  database: 'from-orange-500 to-red-500',
  tools: 'from-yellow-500 to-orange-500',
  other: 'from-purple-500 to-pink-500',
};

// Mapeo de iconos específicos para cada tecnología
const skillIcons = {
  'code': Code,
  'palette': Palette,
  'code2': Code2,
  'component': Component,
  'file-type': FileType,
  'wind': Wind,
  'layout': Layout,
  'server': Server,
  'zap': Zap,
  'snake': Code2, // Usamos Code2 para Python
  'coffee': Coffee,
  'hash': Hash,
  'database': Database,
  'leaf': Leaf,
  'git-branch': GitBranch,
  'github': Github,
  'globe': Globe,
  'atom': Atom,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories = [
    { id: 'all', name: 'Todas', icon: Code2 },
    { id: 'frontend', name: 'Frontend', icon: Monitor },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'database', name: 'Base de Datos', icon: Database },
    { id: 'tools', name: 'Herramientas', icon: Wrench },
  ];

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
        ease: 'easeOut',
      },
    },
  };

  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    const SkillIcon = skillIcons[skill.icon as keyof typeof skillIcons] || Code;
    
    return (
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${categoryColors[skill.category]} flex items-center justify-center`}>
              <SkillIcon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {skill.name}
            </h3>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
          <motion.div
            className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          />
        </div>
        
        <div className="flex items-center gap-2">
          {(() => {
            const CategoryIcon = categoryIcons[skill.category];
            return <CategoryIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />;
          })()}
          <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
            {skill.category}
          </span>
        </div>
      </motion.div>
    );
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const SkillsGrid = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {filteredSkills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </motion.div>
  );

  const SkillsOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {categories.slice(1).map((category) => {
        const categorySkills = getSkillsByCategory(category.id);
        const averageLevel = categorySkills.length > 0 
          ? Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length)
          : 0;
        
        return (
          <motion.div
            key={category.id}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
          >
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${categoryColors[category.id as keyof typeof categoryColors]} flex items-center justify-center`}>
              <category.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {category.name}
            </h3>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {categorySkills.length}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Tecnologías
            </div>
            <div className="mt-3">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Promedio: {averageLevel}%
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <motion.div
                  className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[category.id as keyof typeof categoryColors]}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${averageLevel}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mis competencias tecnológicas y nivel de experiencia en diferentes áreas
          </p>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SkillsOverview />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
              {category.id !== 'all' && (
                <span className="ml-1 text-xs bg-gray-200 dark:bg-gray-600 px-2 py-0.5 rounded-full">
                  {getSkillsByCategory(category.id).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <SkillsGrid />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white">
              <div className="text-3xl font-bold mb-2">{skills.length}</div>
              <div className="text-blue-100">Tecnologías Dominadas</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 text-white">
              <div className="text-3xl font-bold mb-2">
                {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-green-100">Nivel Promedio</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white">
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-orange-100">Años de Experiencia</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 