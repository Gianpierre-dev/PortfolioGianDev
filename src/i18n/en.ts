import type { Diccionario } from './types';

// English dictionary. Must implement the exact same shape as es.ts.
export const en: Diccionario = {
  nav: {
    inicio: 'Home',
    about: 'About',
    servicios: 'Services',
    proyectos: 'Projects',
    habilidades: 'Stack',
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
    fotoPerfil: 'Professional photo of',
  },
  whatsapp: {
    cta: 'Message me on WhatsApp',
    mensajeGeneral: 'Hi Gianpierre, I saw your portfolio and would like to talk about a project for my company.',
    mensajeProyecto: 'Hi Gianpierre, I saw your portfolio and I am interested in a system like',
  },
  hero: {
    statementLinea1: 'I build the systems that run',
    statementLinea2Pre: 'payroll, HR and SUNAT processes',
    statementLinea2Post: ' for Peruvian companies.',
    prueba: 'Tech Lead at STI GOLD · Systems in production · End-to-end TypeScript',
    ctaProyectos: 'View projects',
    ctaCV: 'Download CV',
  },
  about: {
    titulo: 'About me',
    subtitulo: 'Who builds your system, and with what experience.',
    bioParrafos: [
      'I am a full stack developer working with Peruvian companies that need to move past spreadsheets and manual processes: payroll, human resources, inventory and SUNAT (tax authority) procedures.',
      'I handle the whole project: I learn your process, propose the solution, build it and leave it running in production. I also lead internal systems development as Tech Lead at STI GOLD.',
      'I build with modern technology (TypeScript, NestJS, Next.js and PostgreSQL) and automated tests, so the system stays reliable and easy to maintain as your company grows.',
    ],
    stats: {
      experiencia: 'Years of experience',
      proyectos: 'Completed projects',
      ubicacion: 'Location',
    },
    ubicacionValor: 'Peru',
    experienciaTitulo: 'Professional experience',
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
          'Bulk-downloads and classifies invoices, receipts and shipping guides from the SUNAT (Peru’s tax authority) portal, with no hours of manual, one-by-one downloads.',
      },
      {
        titulo: 'Management systems for accounting firms',
        beneficio:
          'Tax due-date schedules with alerts before every deadline, the team’s daily work log and RUC, DNI and exchange-rate lookups in one place.',
      },
      {
        titulo: 'Websites and online stores',
        beneficio:
          'A fast, mobile-friendly website or online store: catalog, cart, local payment methods and WhatsApp ordering, ready for your clients to find you on Google.',
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
    cta: 'Tell me about your project on WhatsApp',
  },
  projects: {
    titulo: 'Projects',
    subtitulo:
      'Management systems, online stores and websites in production. Private systems were built for companies and do not expose their code.',
    notaContexto:
      'Context: SUNAT is Peru’s tax authority, and “planilla” is payroll under Peruvian labor regimes.',
    status: {
      live: 'In production',
      development: 'In development',
      demo: 'Demo',
    },
    privadoBadge: 'Private',
    datosClave: 'Key facts',
    actualizado: 'Code updated',
    otrosTitulo: 'Personal projects',
    otrosDescripcion: 'Products and tools I build on my own, with public source code.',
    consultar: 'Inquire',
    verDemo: 'Visit site',
    codigo: 'Code',
    capturaAlt: 'Screenshot of the home page of',
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
    subtitulo: 'Tell me what your company needs and I will propose the next steps.',
    infoTitulo: 'The fastest way: WhatsApp',
    infoTexto: 'Message me and we will talk about your current process and what you want to solve.',
    garantias: [
      'I reply the same business day.',
      'The first conversation to understand your project is free of charge.',
      'I work under a confidentiality agreement covering your company’s data.',
    ],
    labels: {
      email: 'Email',
      telefono: 'WhatsApp',
      ubicacion: 'Location',
      horario: 'Hours',
    },
    valores: {
      ubicacion: 'Peru',
      horario: '9:00 AM - 6:00 PM',
    },
    descripciones: {
      email: 'Click to copy the email',
      telefono: 'Tap to open the chat',
      ubicacion: 'Available for remote work',
      horario: 'Peru time (UTC-5)',
    },
    badgeCopiar: 'Copy',
    formTitulo: 'Prefer email?',
    formAviso: 'It goes straight to my inbox and I will reply to the address you provide.',
    form: {
      nombre: 'Name',
      email: 'Email',
      asunto: 'Subject',
      mensaje: 'Message',
      nombrePlaceholder: 'Your full name',
      emailPlaceholder: 'you@email.com',
      asuntoPlaceholder: 'Payroll system / Automation / Website',
      mensajePlaceholder: 'Tell me about your project or inquiry...',
      enviar: 'Send message',
      enviando: 'Sending...',
      trampa: 'Leave this field empty',
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
      exito: 'Message sent. I will get back to you soon by email.',
      error: 'The message could not be sent. In the meantime, you can reach me directly:',
      limite: 'I already received your recent messages. If you need anything else, reach me directly:',
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
      habilidades: 'Stack',
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
      technicalNote: 'More than 370 automated tests that run before every change.',
      datosClave: ['6 labor regimes', 'Several companies in one installation', 'Payslips'],
    },
    '2': {
      title: 'SIGEMYPE',
      description:
        'Organizes an accounting firm’s work: SUNAT tax due-date schedules, alerts before every deadline, the team’s daily work log and automated RUC, DNI and exchange-rate lookups.',
      technicalNote: 'Imports data from Excel and has more than 120 automated tests.',
      datosClave: ['SUNAT schedule with alerts', 'Team daily work log', 'RUC, DNI and exchange-rate lookups'],
    },
    '3': {
      title: 'Multi-Company HR System',
      description:
        'Centralizes staff records, contracts and documents for several companies, and generates print-ready ID badges and cards as PDFs.',
      technicalNote: 'Username and password access, with data validation on every form.',
      datosClave: ['Several companies', 'Staff records and contracts', 'PDF ID cards'],
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
    '9': {
      title: 'Valentino Benites — online store',
      description:
        'Online store for made-to-order handcrafted handbags and accessories: catalog by category, cart, payment with Yape or Plin (Peruvian mobile wallets) and nationwide shipping, plus a panel where the brand manages its products.',
      technicalNote: 'Monorepo with a Next.js frontend and a NestJS + Prisma API; JWT-protected admin panel, images on S3 and catalog import from Excel.',
    },
    '12': {
      title: 'Human Touch Books — publisher website with its own CMS',
      description:
        'Website for a Peruvian publisher of school guidance textbooks and a reading program: catalog by grade and line, institutional pages, FAQ and contact form. The publisher edits copy, images, books and pages from its own admin panel, without relying on a developer.',
      technicalNote: 'Server-rendered Astro with Prisma and PostgreSQL; admin panel with revocable JWT sessions, images optimized with sharp on S3, rate-limited contact form and automated tests.',
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
