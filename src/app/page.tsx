import Navbar from '@/components/Navbar';
import SkipLink from '@/components/SkipLink';
import Footer from '@/components/Footer';import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import { proyectos } from '@/data/proyectos';
import { getRepoMetrics } from '@/lib/github';
import { ID_CONTENIDO_PRINCIPAL } from '@/lib/site';

// Server component: las métricas de GitHub se piden aquí (cache de 1 h en
// src/lib/github.ts) y bajan como props, en lugar de que cada visitante
// consulte la API pública desde su navegador (límite de 60 req/h por IP).
export default async function HomePage() {
  const metricasGithub = await getRepoMetrics(proyectos.map((proyecto) => proyecto.repoName));

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id={ID_CONTENIDO_PRINCIPAL} tabIndex={-1} className="min-h-screen bg-white dark:bg-gray-900 focus:outline-none">
        {/* Orden pensado para un cliente: qué ofrezco, la prueba y después quién soy. */}
        <Hero />
        <Services />
        <Projects metricasGithub={metricasGithub} />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
