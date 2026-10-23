import type { Diccionario } from './types';

// Diccionario en español. Fuente de verdad del shape de traducciones.
export const es: Diccionario = {
  nav: {
    inicio: 'Inicio',
    about: 'Sobre mí',
    servicios: 'Servicios',
    proyectos: 'Proyectos',
    habilidades: 'Habilidades',
    contacto: 'Contacto',
    rolLogo: 'Full Stack Developer',
    irInicio: 'Ir al inicio',
    navegacionPrincipal: 'Navegación principal',
    cambiarTema: 'Cambiar tema',
    cambiarTemaClaro: 'Cambiar a modo claro',
    cambiarTemaOscuro: 'Cambiar a modo oscuro',
    cambiarIdioma: 'Cambiar idioma a inglés',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
  },
  a11y: {
    saltarContenido: 'Saltar al contenido principal',
    github: 'Perfil de GitHub',
    linkedin: 'Perfil de LinkedIn',
    email: 'Enviar un correo',
    whatsapp: 'Escribir por WhatsApp',
    nuevaPestana: 'se abre en una nueva pestaña',
    fotoPerfil: 'Foto profesional de',
  },
  hero: {
    statementLinea1: 'Construyo los sistemas que gestionan',
    statementLinea2Pre: 'planillas, RRHH y procesos SUNAT',
    statementLinea2Post: ' de empresas peruanas.',
    prueba: 'Tech Lead en STI GOLD · Sistemas en producción · TypeScript de punta a punta',
    ctaProyectos: 'Ver Proyectos',
    ctaCV: 'Descargar CV',
    ctaContacto: 'Contactar',
    scroll: 'Scroll',
  },
  about: {
    titulo: 'Sobre mí',
    subtitulo: 'Conoce más sobre mi experiencia, habilidades y pasión por el desarrollo',
    bioTitulo: 'Sobre mí',
    bioParrafos: [
      'Desarrollador Full Stack especializado en sistemas de gestión para empresas: planillas, recursos humanos, inventarios y automatización de procesos tributarios (SUNAT).',
      'Trabajo con TypeScript en todo el stack: NestJS, Prisma y PostgreSQL en el backend; Next.js y Tailwind CSS en el frontend; Astro para sitios corporativos. Mis proyectos se despliegan en Railway con almacenamiento en la nube.',
      'Mi objetivo es construir sistemas que aporten valor real al negocio, con código probado, arquitectura limpia y una buena experiencia de usuario.',
    ],
    stats: {
      experiencia: 'Años de Experiencia',
      proyectos: 'Proyectos Completados',
      ubicacion: 'Ubicación',
    },
    ubicacionValor: 'Perú',
    cvBoton: 'Descargar mi CV',
    enfoqueTitulo: 'Mi Enfoque de Trabajo',
    enfoqueBullets: [
      'Aprendizaje continuo',
      'Código limpio y mantenible',
      'Colaboración efectiva',
      'Soluciones prácticas',
    ],
    cita: '“Cada proyecto es una oportunidad de crear algo útil y bien hecho.”',
    experienciaTitulo: 'Experiencia Profesional',
  },
  servicios: {
    titulo: 'Servicios',
    subtitulo: 'Lo que puedo construir para tu empresa, respaldado por sistemas que ya están en uso.',
    items: [
      {
        titulo: 'Sistemas de planillas y RRHH a medida',
        beneficio:
          'Calcula la planilla según el régimen laboral de cada trabajador, genera boletas y centraliza legajos, contratos y documentos del personal.',
      },
      {
        titulo: 'Automatización de procesos SUNAT',
        beneficio:
          'Descarga y clasifica comprobantes electrónicos de forma masiva, sin horas de trabajo manual en el portal SUNAT.',
      },
      {
        titulo: 'Sistemas de gestión para estudios contables',
        beneficio:
          'Cronogramas de vencimientos, alertas, parte diario del equipo y consultas de RUC y DNI en un solo lugar.',
      },
      {
        titulo: 'Sitios web y tiendas online',
        beneficio:
          'Una web o tienda online profesional, rápida y adaptada a móviles: catálogo, carrito, pagos con Yape o Plin y pedidos por WhatsApp, optimizada para que tus clientes te encuentren en Google.',
      },
    ],
    procesoTitulo: 'Cómo trabajo',
    procesoSubtitulo: 'Un proceso claro, desde la primera conversación hasta el sistema en producción.',
    pasos: [
      {
        titulo: 'Reunión de descubrimiento',
        descripcion: 'Conversamos sobre tu proceso actual, el problema que quieres resolver y tus objetivos.',
      },
      {
        titulo: 'Propuesta y alcance',
        descripcion: 'Recibes una propuesta con el alcance y el plan de entregas definidos antes de empezar.',
      },
      {
        titulo: 'Desarrollo con entregas periódicas',
        descripcion: 'Avanzamos por etapas y revisas el sistema funcionando en cada entrega, no solo al final.',
      },
      {
        titulo: 'Despliegue y soporte',
        descripcion: 'Publico el sistema en producción y te acompaño con soporte después de la entrega.',
      },
    ],
    cta: 'Cuéntame tu proyecto',
  },
  projects: {
    titulo: 'Mis Proyectos',
    subtitulo:
      'Sistemas de gestión empresarial y productos propios. Los proyectos privados se desarrollaron para empresas y no exponen código.',
    categorias: {
      all: 'Todos',
      fullstack: 'Sistemas',
      frontend: 'Frontend',
      automation: 'Automatización',
    },
    status: {
      live: 'En Producción',
      development: 'En Desarrollo',
      demo: 'Demo',
    },
    destacado: 'Destacado',
    privadoBadge: 'Privado',
    consultar: 'Consultar',
    verDemo: 'Ver Demo',
    codigo: 'Código',
    githubNotice: 'Las métricas se actualizan automáticamente desde GitHub',
    estrellas: 'estrellas',
    forks: 'forks',
  },
  skills: {
    titulo: 'Stack tecnológico',
    subtitulo: 'Tecnologías con las que construyo y despliego los sistemas',
    categorias: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Bases de datos',
      tools: 'Herramientas',
    },
  },
  contact: {
    titulo: 'Contacto',
    subtitulo: '¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.',
    infoTitulo: 'Información de Contacto',
    infoTexto: 'Siempre estoy interesado en nuevos proyectos. No dudes en contactarme.',
    labels: {
      email: 'Email',
      telefono: 'Teléfono',
      ubicacion: 'Ubicación',
      horario: 'Horario',
    },
    valores: {
      ubicacion: 'Perú',
      horario: '9:00 AM - 6:00 PM',
    },
    descripciones: {
      email: 'Clic para copiar el email',
      telefono: 'Clic para escribir por WhatsApp',
      ubicacion: 'Disponible para trabajo remoto',
      horario: 'Hora de Perú (UTC-5)',
    },
    badgeCopiar: 'Copiar',
    badgeWhatsapp: 'WhatsApp',
    redesTitulo: 'Sígueme en mis redes',
    formTitulo: 'Envíame un Mensaje',
    formAviso: 'Al enviar, se abrirá WhatsApp con tu mensaje listo para enviar.',
    form: {
      nombre: 'Nombre',
      email: 'Email',
      asunto: 'Asunto',
      mensaje: 'Mensaje',
      nombrePlaceholder: 'Tu nombre completo',
      emailPlaceholder: 'tu@email.com',
      asuntoPlaceholder: 'Sistema de planillas / Automatización / Sitio web',
      mensajePlaceholder: 'Cuéntame sobre tu proyecto o consulta...',
      enviar: 'Enviar por WhatsApp',
      enviando: 'Abriendo WhatsApp...',
    },
    validaciones: {
      nombreRequerido: 'El nombre es requerido',
      nombreMin: 'El nombre debe tener al menos 2 caracteres',
      emailRequerido: 'El email es requerido',
      emailInvalido: 'Email inválido',
      asuntoRequerido: 'El asunto es requerido',
      asuntoMin: 'El asunto debe tener al menos 5 caracteres',
      mensajeRequerido: 'El mensaje es requerido',
      mensajeMin: 'El mensaje debe tener al menos 10 caracteres',
    },
    mensajes: {
      copiado: 'Email copiado al portapapeles.',
      exito: 'Se abrió WhatsApp con tu mensaje. Solo falta que lo envíes desde allí. Te responderé pronto.',
      error:
        'No se pudo abrir WhatsApp. Puedes escribirme directamente a mi email o a mi número de teléfono.',
    },
  },
  footer: {
    descripcion:
      'Desarrollo sistemas de planillas, RRHH y automatización de procesos SUNAT para empresas peruanas, con TypeScript de punta a punta.',
    navegacionTitulo: 'Navegación',
    navegacion: {
      about: 'Sobre mí',
      servicios: 'Servicios',
      proyectos: 'Proyectos',
      habilidades: 'Habilidades',
      contacto: 'Contacto',
    },
    contactoTitulo: 'Contacto',
    ubicacion: 'Perú',
    copyright: 'Todos los derechos reservados.',
    disponible: 'Disponible para proyectos',
  },
  experiencias: {
    'STI GOLD': {
      period: 'Enero 2026 - Presente',
      position: 'Tech Lead & Full Stack Developer',
      description:
        'Desarrollo completo de sistemas internos: arquitectura, backend, frontend y deploy. Automatización de consultas SUNAT con Playwright y APIs REST con Spring Boot y NestJS, con almacenamiento de archivos en Wasabi S3.',
    },
    JJMM: {
      period: 'Enero 2026 - Presente',
      position: 'Programador',
      description:
        'Desarrollo de software a medida para necesidades operativas de la empresa y automatización de procesos contables con Python.',
    },
    SipnasisCode: {
      period: 'Julio 2025 - Diciembre 2025',
      position: 'Full Stack Developer',
      description:
        'Desarrollo de múltiples sistemas empresariales para clientes de la agencia, participando en proyectos Full Stack bajo acuerdo de confidencialidad.',
    },
    'GALDIAZ S.A.C.': {
      period: '2024 - Julio 2025',
      position: 'Programador Informático',
      description:
        'Sistema de control de inventario y gestión de stock, automatización de tareas administrativas con Python y macros VBA, y optimización de base de datos SQL Server.',
    },
    'Mr. Sif': {
      period: '2024',
      position: 'Front-End Developer & SEO',
      description:
        'Desarrollo de interfaces web con AlpineJS y Tailwind CSS, y gestión de posicionamiento SEO y marketing digital.',
    },
    'Ingecem Perú': {
      period: '2018 - 2022',
      position: 'Desarrollador Web',
      description:
        'Desarrollo de sistema de control de inventario en C#, diseño e implementación de interfaces de usuario y apoyo en el levantamiento de requerimientos.',
    },
  },
  proyectos: {
    '1': {
      title: 'Sistema de Planillas Multiempresa',
      description:
        'Calcula la planilla de los 6 regímenes laborales privados del Perú y genera las boletas de pago, para varias empresas a la vez. Pensado para quienes gestionan la planilla de más de una empresa.',
      technicalNote: 'Arquitectura hexagonal, más de 370 tests automatizados y CI bloqueante.',
    },
    '2': {
      title: 'SIGEMYPE',
      description:
        'Organiza el trabajo de un estudio contable: cronogramas de vencimientos SUNAT, alertas antes de cada fecha límite, parte diario del equipo y consultas automáticas de RUC, DNI y tipo de cambio.',
      technicalNote: 'Monorepo con Turborepo, importación desde Excel, más de 120 tests y hardening de seguridad.',
    },
    '3': {
      title: 'Sistema de RRHH Multiempresa',
      description:
        'Centraliza los legajos, contratos y documentos del personal de varias empresas, y genera photochecks y carnets en PDF listos para imprimir.',
      technicalNote: 'Autenticación JWT, validación con Zod y despliegue en Railway.',
    },
    '4': {
      title: 'Automatización SUNAT',
      description:
        'Descarga de forma masiva los comprobantes electrónicos (facturas, boletas y guías de remisión) del portal SUNAT y los clasifica automáticamente, sin trabajo manual.',
      technicalNote: 'Scraping con Playwright, lectura de XML UBL 2.1 e interfaz de escritorio con PySide6.',
    },
    '5': {
      title: 'TeachGenius',
      description:
        'Plataforma educativa: los docentes crean sopas de letras sobre figuras literarias y los alumnos las resuelven desde cualquier dispositivo, contra el tiempo.',
      technicalNote: 'Backend NestJS con Prisma y frontend Astro + React.',
    },
    '6': {
      title: 'Tonin',
      description:
        'Producto propio: frases motivacionales según tu estado de ánimo, con música ambiental, experiencia tipo swipe y panel de administración.',
      technicalNote: 'Frontend React con Zustand; API en Java 21 + Spring Boot con JWT y almacenamiento en Wasabi S3.',
    },
    '8': {
      title: 'Sitio web Ingecem',
      description:
        'Sitio corporativo para una empresa de ingeniería: presenta sus servicios, recibe consultas de clientes y está optimizado para buscadores.',
      technicalNote: 'Diseño responsive con TypeScript, Vite y Tailwind CSS.',
    },
    '9': {
      title: 'Valentino Benites — tienda online',
      description:
        'Tienda online de carteras y accesorios artesanales hechos a pedido: catálogo por categorías, carrito, pago con Yape o Plin y envíos a todo el Perú, con un panel para que la marca administre sus productos.',
      technicalNote: 'Monorepo con frontend Next.js y API NestJS + Prisma; panel con autenticación JWT, imágenes en S3 e importación del catálogo desde Excel.',
    },
    '12': {
      title: 'Human Touch Books — sitio editorial con panel propio',
      description:
        'Sitio de una editorial peruana de textos escolares de tutoría y plan lector: catálogo por grado y línea, páginas institucionales, preguntas frecuentes y formulario de contacto. La editorial edita textos, imágenes, libros y páginas desde su propio panel, sin depender de un desarrollador.',
      technicalNote: 'Astro con renderizado en servidor, Prisma y PostgreSQL; panel con sesiones JWT revocables, imágenes optimizadas con sharp en S3, formulario con límite de intentos y pruebas automatizadas.',
    },
    '10': {
      title: "Tlacuache's Store — catálogo outlet",
      description:
        'Catálogo online de un outlet de carteras y billeteras de marca: muestra precio de outlet frente al precio de tienda, novedades y categorías, y los pedidos se cierran por WhatsApp.',
      technicalNote: 'Sitio rápido y estático con Astro y Tailwind CSS.',
    },
    '11': {
      title: 'Mr. Sif — sitio comercial',
      description:
        'Sitio comercial de un sistema de facturación electrónica para mypes: presenta beneficios, soluciones y planes, y lleva a los visitantes a solicitar una demo.',
      technicalNote: 'Interfaces con AlpineJS y Tailwind CSS, y posicionamiento SEO.',
    },
  },
};
