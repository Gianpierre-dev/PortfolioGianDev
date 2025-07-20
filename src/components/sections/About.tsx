'use client';

import { motion } from 'framer-motion';
import { personalInfo, experiences } from '@/data/personal';
import { downloadCV } from '@/lib/utils';
import { Calendar, MapPin, Building, Code, Coffee, Download } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stats = [
    { label: 'Journey Autodidacta', value: '3+', icon: Calendar },
    { label: 'Proyectos Reales', value: '25+', icon: Code },
    { label: 'Stack Tecnológico', value: '10+', icon: Coffee },
    { label: 'Freelancer desde', value: 'Perú', icon: MapPin },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Sobre mí
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Conoce más sobre mi experiencia, habilidades y pasión por el desarrollo
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🚀 Mi Journey: De Estudiante a Dev Freelancer
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Mi historia comenzó como muchas otras: **una curiosidad infinita y una laptop**. 
                Mientras completaba mi carrera universitaria, descubrí que las aulas no eran suficientes 
                para saciar mi sed de conocimiento tecnológico. <strong>Así nació mi journey autodidacta.</strong>
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                **Noches de código**, documentación infinita, Stack Overflow como mejor amigo, y 
                proyectos personales que se convertían en obsesiones. Desde mi primer "Hello World" 
                hasta deployar aplicaciones reales, cada línea de código fue una **lección autodidacta** 
                que me acercaba más a mi objetivo.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hoy, con **carrera terminada** y experiencia forjada en las trincheras del desarrollo, 
                me dedico completamente al **freelancing**. He transformado esa curiosidad inicial en 
                **más de 25 proyectos reales**, dominando tecnologías desde **Python y JavaScript** 
                hasta **React y Node.js**.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                **Mi misión:** Ayudar a empresas y emprendedores a materializar sus ideas digitales 
                con código limpio, escalable y que realmente funcione. Porque cada proyecto es una 
                nueva aventura, y **yo soy tu compañero de viaje en el mundo del desarrollo.**
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CV Download Button */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <button
                onClick={() => downloadCV()}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Download className="w-5 h-5" />
                Descargar mi CV
              </button>
            </motion.div>

            {/* Personal Philosophy */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700/30 mt-8"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                🔥 Mi ADN de Desarrollador
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 font-bold mr-2">→</span>
                  **Autodidacta por naturaleza**
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-purple-600 font-bold mr-2">→</span>
                  **Código limpio y escalable**
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-green-600 font-bold mr-2">→</span>
                  **Freelancer full-time**
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-red-600 font-bold mr-2">→</span>
                  **Aprendizaje constante**
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
                "Cada bug es una lección, cada proyecto es una evolución."
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              ⚡ Mi Journey Profesional
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>
                  
                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {exp.position}
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {exp.period}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 