import type { Diccionario } from './types';

// English dictionary. Must implement the exact same shape as es.ts.
export const en: Diccionario = {
  nav: {
    inicio: 'Home',
    about: 'About',
    proyectos: 'Projects',
    habilidades: 'Skills',
    contacto: 'Contact',
    rolLogo: 'Full Stack Developer',
    irInicio: 'Go to home',
    cambiarTemaClaro: 'Switch to light mode',
    cambiarTemaOscuro: 'Switch to dark mode',
    cambiarIdioma: 'Switch language to Spanish',
  },
  hero: {
    statementLinea1: 'I build the systems that run',
    statementLinea2Pre: 'payroll, HR and SUNAT processes',
    statementLinea2Post: ' for Peruvian companies.',
    prueba: 'Tech Lead at STI GOLD · Systems in production · End-to-end TypeScript',
    ctaProyectos: 'View Projects',
    ctaCV: 'Download CV',
    ctaContacto: 'Get in Touch',
    scroll: 'Scroll',
  },
  about: {
    titulo: 'About Me',
    subtitulo: 'Learn more about my experience, skills and passion for development',
    bioTitulo: 'About Me',
    bioParrafos: [
      'Full Stack Developer specialized in management systems for companies: payroll, human resources, inventory and automation of tax processes (SUNAT).',
      'I work with TypeScript across the entire stack: NestJS, Prisma and PostgreSQL on the backend; Next.js and Tailwind CSS on the frontend; Astro for corporate sites. My projects are deployed on Railway with cloud storage.',
      'My goal is to build systems that deliver real business value, with tested code, clean architecture and a great user experience.',
    ],
    stats: {
      experiencia: 'Years of Experience',
      proyectos: 'Completed Projects',
      tecnologias: 'Technologies',
      ubicacion: 'Location',
    },
    ubicacionValor: 'Peru',
    cvBoton: 'Download my CV',
    enfoqueTitulo: 'My Approach to Work',
    enfoqueBullets: [
      'Continuous learning',
      'Clean, maintainable code',
      'Effective collaboration',
      'Practical solutions',
    ],
    cita: '“Every project is an opportunity to build something useful and well made.”',
    experienciaTitulo: 'Professional Experience',
  },
  projects: {
    titulo: 'My Projects',
    sincronizando: 'Syncing with GitHub...',
    subtitulo:
      'Enterprise management systems and my own products. Private projects were built for companies and do not expose their code.',
    metricasNota: 'Metrics for public projects synced from GitHub',
    categorias: {
      all: 'All',
      fullstack: 'Systems',
      frontend: 'Frontend',
      automation: 'Automation',
    },
    status: {
      live: 'In Production',
      development: 'In Development',
      demo: 'Demo',
    },
    estadoCorto: {
      live: 'Live',
      development: 'In development',
      demo: 'Demo',
    },
    destacado: 'Featured Project',
    privado: 'Private project',
    privadoBadge: 'Private',
    privadoConsultar: 'Private project — Inquire',
    consultar: 'Inquire',
    verDemoLive: 'View Live Demo',
    verCodigo: 'View Code',
    verDemo: 'View Demo',
    codigo: 'Code',
    stackTecnologico: 'Tech Stack',
    githubNotice: 'Metrics are updated automatically from GitHub',
  },
  skills: {
    titulo: 'Skills & Expertise',
    subtitulo: 'Technologies and tools I master professionally',
    metricas: {
      tecnologias: 'Technologies',
      nivelPromedio: 'Average Level',
      aniosExp: 'Years Exp.',
    },
    categorias: {
      all: 'All',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      tools: 'Tools',
    },
    niveles: {
      experto: 'Expert',
      avanzado: 'Advanced',
      intermedio: 'Intermediate',
      basico: 'Basic',
    },
    promedio: 'average',
  },
  contact: {
    titulo: 'Contact',
    subtitulo: 'Have a project in mind? I would love to hear about it.',
    infoTitulo: 'Contact Information',
    infoTexto: "I'm always interested in new projects. Feel free to reach out.",
    labels: {
      email: 'Email',
      telefono: 'Phone',
      ubicacion: 'Location',
      horario: 'Hours',
    },
    valores: {
      ubicacion: 'Peru',
      horario: '9:00 AM - 6:00 PM',
    },
    descripciones: {
      email: 'Click to copy email',
      telefono: 'Click for WhatsApp/Call',
      ubicacion: 'Available for remote work',
      horario: 'Peru time (UTC-5)',
    },
    badgeCopiar: 'Copy',
    badgeWhatsapp: 'WhatsApp',
    redesTitulo: 'Follow me on social media',
    formTitulo: 'Send me a Message',
    form: {
      nombre: 'Name',
      email: 'Email',
      asunto: 'Subject',
      mensaje: 'Message',
      nombrePlaceholder: 'Your full name',
      emailPlaceholder: 'you@email.com',
      asuntoPlaceholder: 'Web project / Collaboration / Inquiry',
      mensajePlaceholder: 'Tell me about your project or inquiry...',
      enviar: 'Send Message',
      enviando: 'Sending...',
    },
    validaciones: {
      nombreRequerido: 'Name is required',
      nombreMin: 'Name must be at least 2 characters',
      emailRequerido: 'Email is required',
      emailInvalido: 'Invalid email',
      asuntoRequerido: 'Subject is required',
      asuntoMin: 'Subject must be at least 5 characters',
      mensajeRequerido: 'Message is required',
      mensajeMin: 'Message must be at least 10 characters',
    },
    mensajes: {
      copiado: 'Email copied to clipboard! 📋',
      exito: 'Message sent via email and WhatsApp! 📧📱 I will get back to you soon.',
      exitoSoloWhatsapp:
        'Message sent via WhatsApp 📱 (Email being configured). I will get back to you soon!',
      error:
        'Sending failed. But WhatsApp opened 📱 - You can also contact me directly by email.',
    },
  },
  footer: {
    descripcion:
      'Full Stack Developer specialized in building modern, scalable web solutions. Always looking for new challenges and growth opportunities.',
    navegacionTitulo: 'Navigation',
    navegacion: {
      about: 'About',
      proyectos: 'Projects',
      habilidades: 'Skills',
      contacto: 'Contact',
    },
    contactoTitulo: 'Contact',
    ubicacion: 'Peru',
    copyright: 'All rights reserved.',
    disponible: 'Available for projects',
  },
  experiencias: {
    'STI GOLD': {
      period: 'January 2026 - Present',
      position: 'Tech Lead & Full Stack Developer',
      description:
        'End-to-end development of internal systems: architecture, backend, frontend and deployment. Automation of SUNAT queries with Playwright and REST APIs with Spring Boot and NestJS, with file storage on Wasabi S3.',
    },
    JJMM: {
      period: 'January 2026 - Present',
      position: 'Programmer',
      description:
        'Development of custom software for the company’s operational needs and automation of accounting processes with Python.',
    },
    SipnasisCode: {
      period: 'July 2025 - December 2025',
      position: 'Full Stack Developer',
      description:
        'Development of multiple enterprise systems for the agency’s clients, working on Full Stack projects under a confidentiality agreement.',
    },
    'GALDIAZ S.A.C.': {
      period: '2024 - July 2025',
      position: 'Software Developer',
      description:
        'Inventory control and stock management system, automation of administrative tasks with Python and VBA macros, and optimization of the SQL Server database.',
    },
    'Mr. Sif': {
      period: '2024',
      position: 'Front-End Developer & SEO',
      description:
        'Development of web interfaces with AlpineJS and Tailwind CSS, and management of SEO positioning and digital marketing.',
    },
    'Ingecem Perú': {
      period: '2018 - 2022',
      position: 'Web Developer (Pre-Professional Internship)',
      description:
        'Development of an inventory control system in C#, design and implementation of user interfaces, and support in requirements gathering.',
    },
  },
  proyectos: {
    '1': {
      description:
        'Payroll calculation engine under Peruvian labor law with support for the country’s 6 private regimes.',
      longDescription:
        'Multi-company payroll system covering the full cycle: worker onboarding, payroll calculation under Peru’s 6 private labor regimes (General, Small business, Micro business, Agrarian, Civil construction, Domestic workers) and payslip generation. Backend with hexagonal architecture, over 370 automated tests and a blocking CI.',
    },
    '2': {
      description:
        'Integral management system for an accounting firm: SUNAT tax schedules, alerts, daily log and RUC/DNI lookups.',
      longDescription:
        'Internal platform for an accounting firm that manages tax and labor obligation schedules (SUNAT), due-date alerts, the team’s daily work log, task planning and automated DNI, RUC and exchange-rate lookups. Turborepo monorepo, Excel import, over 120 tests, security hardening (rate limiting, JWT revocation) and Prometheus metrics.',
    },
    '3': {
      description:
        'Management of employees, contracts and documents with multi-company support and PDF badge generation.',
      longDescription:
        'HR system in production for multi-company management: employee records, contracts, documents and photos, with automatic generation of photochecks and PDF badges. JWT authentication, Zod validation and deployment on Railway.',
    },
    '4': {
      description:
        'Desktop app that bulk-downloads and classifies electronic receipts from the SUNAT portal.',
      longDescription:
        'Desktop application that automates the download, organization and classification of electronic receipts (invoices, sales receipts, dispatch guides) from the SUNAT portal, parsing XML under the UBL 2.1 standard. Scraping with Playwright, a PySide6 interface and distribution as an executable.',
    },
    '5': {
      description:
        'Gamified educational platform: teachers create word searches of literary devices and students compete against the clock.',
      longDescription:
        'Gamified educational app where teachers create word-search activities about literary devices and students solve them from any device with a competitive timer. NestJS backend with Prisma and an Astro + React frontend.',
    },
    '6': {
      description:
        'Immersive web app of motivational quotes based on your mood, with ambient music and a swipe experience.',
      longDescription:
        'Own B2C product: motivational quotes tailored to the user’s mood with a swipe experience, ambient music per mood, dynamic themes and an admin panel. React frontend with Zustand and Framer Motion; API in Java 21 + Spring Boot with JWT and Wasabi S3 storage.',
    },
    '7': {
      description:
        'This portfolio: Next.js 15, TypeScript and Tailwind CSS, with projects synced from GitHub.',
      longDescription:
        'Personal portfolio with dark/light theme, Framer Motion animations, SEO optimization and repository metrics updated automatically from the GitHub API.',
    },
    '8': {
      description:
        'Corporate site for an engineering company with SEO optimization and contact forms.',
      longDescription:
        'Corporate website for Ingecem Perú with responsive design, SEO optimization, contact forms and informational sections about engineering services.',
    },
  },
};
