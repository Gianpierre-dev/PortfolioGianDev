'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/personal';
import { Skill } from '@/types';
import { 
  Code2, 
  Database, 
  Wrench, 
  Monitor, 
  Server, 
  Layers,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs, 
  FaPhp, 
  FaPython, 
  FaJava, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';

import { 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiSharp, 
  SiMysql, 
  SiMongodb,
  SiAstro,
  SiGo,
  SiRust,
  SiKotlin,
  SiSwift,
  SiDart,
  SiRuby,
  SiCplusplus
} from 'react-icons/si';

const categoryIcons = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  tools: Wrench,
  other: Layers,
};

const categoryColors = {
  frontend: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800' },
  backend: { bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-700 dark:text-green-300', border: 'border-green-200 dark:border-green-800' },
  database: { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800' },
  tools: { bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800' },
  other: { bg: 'bg-gray-50 dark:bg-gray-900/20', text: 'text-gray-700 dark:text-gray-300', border: 'border-gray-200 dark:border-gray-800' },
};

const skillIcons = {
  'html5': FaHtml5,
  'css3': FaCss3Alt,
  'javascript': FaJs,
  'react': FaReact,
  'typescript': SiTypescript,
  'tailwind': SiTailwindcss,
  'bootstrap': FaBootstrap,
  'nodejs': FaNodeJs,
  'express': SiExpress,
  'php': FaPhp,
  'python': FaPython,
  'java': FaJava,
  'csharp': SiSharp,
  'mysql': SiMysql,
  'mongodb': SiMongodb,
  'git': FaGitAlt,
  'github': FaGithub,
  'astro': SiAstro,
  'go': SiGo,
  'rust': SiRust,
  'kotlin': SiKotlin,
  'swift': SiSwift,
  'dart': SiDart,
  'ruby': SiRuby,
  'cplusplus': SiCplusplus,
  'c++': SiCplusplus,
  'vscode': Code2,
};

const skillColors = {
  'html5': 'text-orange-500',
  'css3': 'text-blue-500',
  'javascript': 'text-yellow-500',
  'react': 'text-cyan-400',
  'typescript': 'text-blue-600',
  'tailwind': 'text-cyan-500',
  'bootstrap': 'text-purple-600',
  'nodejs': 'text-green-500',
  'express': 'text-gray-600 dark:text-gray-400',
  'php': 'text-indigo-500',
  'python': 'text-blue-500',
  'java': 'text-red-500',
  'csharp': 'text-purple-500',
  'mysql': 'text-blue-600',
  'mongodb': 'text-green-600',
  'git': 'text-orange-500',
  'github': 'text-gray-800 dark:text-gray-200',
  'astro': 'text-orange-500',
  'go': 'text-cyan-400',
  'rust': 'text-orange-600',
  'kotlin': 'text-purple-400',
  'swift': 'text-orange-400',
  'dart': 'text-cyan-600',
  'ruby': 'text-red-600',
  'cplusplus': 'text-pink-500',
  'c++': 'text-pink-500',
  'vscode': 'text-blue-500',
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getSkillLevel = (level: number) => {
    if (level >= 90) return { label: 'Experto', color: 'text-emerald-600 dark:text-emerald-400' };
    if (level >= 75) return { label: 'Avanzado', color: 'text-blue-600 dark:text-blue-400' };
    if (level >= 60) return { label: 'Intermedio', color: 'text-yellow-600 dark:text-yellow-400' };
    return { label: 'Básico', color: 'text-gray-600 dark:text-gray-400' };
  };

  const SkillChip = ({ skill, index }: { skill: Skill; index: number }) => {
    const SkillIcon = skillIcons[skill.icon as keyof typeof skillIcons] || Code2;
    const iconColor = skillColors[skill.icon as keyof typeof skillColors] || 'text-gray-500';
    const categoryTheme = categoryColors[skill.category];
    const skillLevel = getSkillLevel(skill.level);
    
    return (
      <div
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
        className={`relative`}
      >
        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${categoryTheme.bg} ${categoryTheme.border}`}>
          <SkillIcon className={`w-4 h-4 ${iconColor}`} />
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {skill.name}
          </span>
          <span className={`text-xs font-semibold ${skillLevel.color}`}>
            {skill.level}%
          </span>
        </div>
        
        {/* Tooltip */}
        {hoveredSkill === skill.name && (
          <div className="absolute z-10 -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
            {skillLevel.label} • {skill.category}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-800"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
                 <div className="text-center mb-12">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.0, ease: "easeOut" }}
             className="flex items-center justify-center gap-2 mb-3"
           >
             <Target className="w-5 h-5 text-blue-600" />
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
               Skills & Expertise
             </h2>
           </motion.div>
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
             className="text-gray-600 dark:text-gray-400 text-sm"
           >
             Tecnologías y herramientas que domino profesionalmente
           </motion.p>
         </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">{skills.length}</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Tecnologías</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
              </span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Nivel Promedio</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Code2 className="w-4 h-4 text-purple-600" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">3+</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Años Exp.</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
                         <button
               key={category.id}
               onClick={() => setSelectedCategory(category.id)}
               className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${
                 selectedCategory === category.id
                   ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                   : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
               }`}
             >
              <category.icon className="w-4 h-4" />
              {category.name}
              {category.id !== 'all' && (
                <span className="bg-gray-200 dark:bg-gray-600 px-2 py-0.5 rounded-full text-xs">
                  {getSkillsByCategory(category.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Skills Matrix */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex flex-wrap gap-3 justify-center">
            {filteredSkills.map((skill, index) => (
              <SkillChip key={`${selectedCategory}-${skill.name}`} skill={skill} index={index} />
            ))}
          </div>
        </div>

                {/* Category Insights */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {categories.slice(1).map((category) => {
            const categorySkills = getSkillsByCategory(category.id);
            const averageLevel = categorySkills.length > 0 
              ? Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length)
              : 0;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
                className="text-center group"
              >
                <div className="relative mb-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center shadow-sm">
                    <category.icon className="w-7 h-7 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{categorySkills.length}</span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {category.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{averageLevel}%</span>
                  <span>•</span>
                  <span>promedio</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 