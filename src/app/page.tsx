import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Gianpierre Terrazas Tello
            </h3>
            <p className="text-gray-400 mb-6">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Gianpierre Terrazas. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Hecho con ❤️ usando Next.js y Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
