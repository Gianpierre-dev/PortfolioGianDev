import type { Diccionario } from './types';

// English dictionary. Must implement the exact same shape as es.ts.
export const en: Diccionario = {
  nav: {
    inicio: 'Home',
    about: 'About',
    servicios: 'Services',
    proyectos: 'Projects',
    habilidades: 'Skills',
    contacto: 'Contact',
    rolLogo: 'Full Stack Developer',
    irInicio: 'Go to home',
    navegacionPrincipal: 'Main navigation',
    cambiarTema: 'Toggle theme',
    cambiarTemaClaro: 'Switch to light mode',
    cambiarTemaOscuro: 'Switch to dark mode',
    cambiarIdioma: 'Switch language to Spanish',
    abrirMenu: 'Open menu',
    cerrarMenu: 'Close menu',
  },
  a11y: {
    saltarContenido: 'Skip to main content',
    github: 'GitHub profile',
    linkedin: 'LinkedIn profile',
    email: 'Send an email',
    whatsapp: 'Message on WhatsApp',
    nuevaPestana: 'opens in a new tab',
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
  servicios: {
    titulo: 'Services',
    subtitulo: 'What I can build for your company, backed by systems already in use.',
    items: [
      {
        titulo: 'Custom payroll and HR systems',
        beneficio:
          'Calculates payroll under each worker’s Peruvian labor regime, generates payslips and centralizes staff records, contracts and documents.',
      },
      {
        titulo: 'SUNAT process automation',
        beneficio:
          'Bulk-downloads and classifies electronic receipts from SUNAT (Peru’s tax authority), with no hours of manual work on its portal.',
      },
      {
        titulo: 'Management systems for accounting firms',
        beneficio:
          'Tax due-date schedules, alerts, the team’s daily work log and RUC/DNI lookups in one place.',
      },
      {
        titulo: 'Websites and online stores',
        beneficio:
          'A professional, fast, mobile-friendly website or online store: catalog, cart, local payment methods and WhatsApp ordering, optimized so your clients can find you on Google.',
      },
    ],
    procesoTitulo: 'How I work',
    procesoSubtitulo: 'A clear process, from the first conversation to the system in production.',
    pasos: [
      {
        titulo: 'Discovery meeting',
        descripcion: 'We talk about your current process, the problem you want to solve and your goals.',
      },
      {
        titulo: 'Proposal and scope',
        descripcion: 'You receive a proposal with the scope and delivery plan defined before work starts.',
      },
      {
        titulo: 'Development with regular deliveries',
        descripcion: 'We move forward in stages and you review the working system at every delivery, not just at the end.',
      },
      {
        titulo: 'Deployment and support',
        descripcion: 'I put the system into production and keep supporting you after delivery.',
      },
    ],
    cta: 'Tell me about your project',
  },
  projects: {
    titulo: 'My Projects',
    subtitulo:
      'Enterprise management systems and my own products. Private projects were built for companies and do not expose their code.',
    notaContexto:
      'Context: SUNAT is Peru’s tax authority, and “planilla” is payroll under Peruvian labor regimes.',
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
    destacado: 'Featured',
    privadoBadge: 'Private',
    consultar: 'Inquire',
    verDemo: 'View Demo',
    codigo: 'Code',
    githubNotice: 'Metrics are updated automatically from GitHub',
    estrellas: 'stars',
    forks: 'forks',
  },
  skills: {
    titulo: 'Tech stack',
    subtitulo: 'Technologies I use to build and deploy systems',
    categorias: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Databases',
      tools: 'Tools',
    },
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
      email: 'Click to copy the email',
      telefono: 'Click to message on WhatsApp',
      ubicacion: 'Available for remote work',
      horario: 'Peru time (UTC-5)',
    },
    badgeCopiar: 'Copy',
    badgeWhatsapp: 'WhatsApp',
    redesTitulo: 'Follow me on social media',
    formTitulo: 'Send me a Message',
    formAviso: 'When you submit, WhatsApp will open with your message ready to send.',
    form: {
      nombre: 'Name',
      email: 'Email',
      asunto: 'Subject',
      mensaje: 'Message',
      nombrePlaceholder: 'Your full name',
      emailPlaceholder: 'you@email.com',
      asuntoPlaceholder: 'Payroll system / Automation / Website',
      mensajePlaceholder: 'Tell me about your project or inquiry...',
      enviar: 'Send via WhatsApp',
      enviando: 'Opening WhatsApp...',
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
      copiado: 'Email copied to clipboard.',
      exito: 'WhatsApp opened with your message. Just send it from there. I will get back to you soon.',
      error: 'WhatsApp could not be opened. You can write to me directly by email or phone.',
    },
  },
  footer: {
    descripcion:
      'I build payroll, HR and SUNAT automation systems for Peruvian companies, with end-to-end TypeScript.',
    navegacionTitulo: 'Navigation',
    navegacion: {
      about: 'About',
      servicios: 'Services',
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
      position: 'Web Developer',
      description:
        'Development of an inventory control system in C#, design and implementation of user interfaces, and support in requirements gathering.',
    },
  },
  proyectos: {
    '1': {
      title: 'Multi-Company Payroll System',
      description:
        'Calculates payroll for Peru’s 6 private-sector labor regimes and generates payslips, for several companies at once. Built for teams that manage the payroll of more than one company.',
      technicalNote: 'Hexagonal architecture, 370+ automated tests and a blocking CI.',
    },
    '2': {
      title: 'SIGEMYPE',
      description:
        'Organizes an accounting firm’s work: SUNAT tax due-date schedules, alerts before every deadline, the team’s daily work log and automated RUC, DNI and exchange-rate lookups.',
      technicalNote: 'Turborepo monorepo, Excel import, 120+ tests and security hardening.',
    },
    '3': {
      title: 'Multi-Company HR System',
      description:
        'Centralizes staff records, contracts and documents for several companies, and generates print-ready ID badges and cards as PDFs.',
      technicalNote: 'JWT authentication, Zod validation and deployment on Railway.',
    },
    '4': {
      title: 'SUNAT Automation',
      description:
        'Bulk-downloads electronic receipts (invoices, sales receipts and dispatch guides) from the SUNAT portal and classifies them automatically, with no manual work.',
      technicalNote: 'Playwright scraping, UBL 2.1 XML parsing and a PySide6 desktop interface.',
    },
    '5': {
      title: 'TeachGenius',
      description:
        'Educational platform: teachers create word searches about literary devices and students solve them from any device, against the clock.',
      technicalNote: 'NestJS backend with Prisma and an Astro + React frontend.',
    },
    '6': {
      title: 'Tonin',
      description:
        'My own product: motivational quotes based on your mood, with ambient music, a swipe experience and an admin panel.',
      technicalNote: 'React frontend with Zustand; Java 21 + Spring Boot API with JWT and Wasabi S3 storage.',
    },
    '8': {
      title: 'Ingecem Website',
      description:
        'Corporate website for an engineering company: presents its services, receives client inquiries and is optimized for search engines.',
      technicalNote: 'Responsive design with TypeScript, Vite and Tailwind CSS.',
    },
    '9': {
      title: 'Valentino Benites — online store',
      description:
        'Online store for made-to-order handcrafted handbags and accessories: catalog by category, cart, payment with Yape or Plin (Peruvian mobile wallets) and nationwide shipping, plus a panel where the brand manages its products.',
      technicalNote: 'Monorepo with a Next.js frontend and a NestJS + Prisma API; JWT-protected admin panel, images on S3 and catalog import from Excel.',
    },
    '10': {
      title: "Tlacuache's Store — outlet catalog",
      description:
        'Online catalog for a designer handbag and wallet outlet: shows outlet versus retail prices, new arrivals and categories, with orders closed via WhatsApp.',
      technicalNote: 'Fast static site built with Astro and Tailwind CSS.',
    },
    '11': {
      title: 'Mr. Sif — marketing site',
      description:
        'Marketing site for an electronic invoicing system aimed at small businesses: presents benefits, solutions and plans, and drives visitors to request a demo.',
      technicalNote: 'Interfaces built with AlpineJS and Tailwind CSS, plus SEO.',
    },
  },
};
