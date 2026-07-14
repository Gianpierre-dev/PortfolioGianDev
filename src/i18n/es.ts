import type { Diccionario } from './types';

// Diccionario en español. Fuente de verdad del shape de traducciones.
export const es: Diccionario = {
  nav: {
    inicio: 'Inicio',
    about: 'Sobre mí',
    proyectos: 'Proyectos',
    habilidades: 'Habilidades',
    contacto: 'Contacto',
    rolLogo: 'Full Stack Developer',
    irInicio: 'Ir al inicio',
    cambiarTemaClaro: 'Cambiar a modo claro',
    cambiarTemaOscuro: 'Cambiar a modo oscuro',
    cambiarIdioma: 'Cambiar idioma a inglés',
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
      tecnologias: 'Tecnologías',
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
  projects: {
    titulo: 'Mis Proyectos',
    sincronizando: 'Sincronizando con GitHub...',
    subtitulo:
      'Sistemas de gestión empresarial y productos propios. Los proyectos privados se desarrollaron para empresas y no exponen código.',
    metricasNota: 'Métricas de proyectos públicos sincronizadas desde GitHub',
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
    estadoCorto: {
      live: 'En vivo',
      development: 'En desarrollo',
      demo: 'Demo',
    },
    destacado: 'Proyecto Destacado',
    privado: 'Proyecto privado',
    privadoBadge: 'Privado',
    privadoConsultar: 'Proyecto privado — Consultar',
    consultar: 'Consultar',
    verDemoLive: 'Ver Demo Live',
    verCodigo: 'Ver Código',
    verDemo: 'Ver Demo',
    codigo: 'Código',
    stackTecnologico: 'Stack Tecnológico',
    githubNotice: 'Las métricas se actualizan automáticamente desde GitHub',
  },
  skills: {
    titulo: 'Skills & Expertise',
    subtitulo: 'Tecnologías y herramientas que domino profesionalmente',
    metricas: {
      tecnologias: 'Tecnologías',
      nivelPromedio: 'Nivel Promedio',
      aniosExp: 'Años Exp.',
    },
    categorias: {
      all: 'Todas',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Base de Datos',
      tools: 'Herramientas',
    },
    niveles: {
      experto: 'Experto',
      avanzado: 'Avanzado',
      intermedio: 'Intermedio',
      basico: 'Básico',
    },
    promedio: 'promedio',
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
      email: 'Clic para copiar email',
      telefono: 'Clic para WhatsApp/Llamar',
      ubicacion: 'Disponible para trabajo remoto',
      horario: 'Hora de Perú (UTC-5)',
    },
    badgeCopiar: 'Copiar',
    badgeWhatsapp: 'WhatsApp',
    redesTitulo: 'Sígueme en mis redes',
    formTitulo: 'Envíame un Mensaje',
    form: {
      nombre: 'Nombre',
      email: 'Email',
      asunto: 'Asunto',
      mensaje: 'Mensaje',
      nombrePlaceholder: 'Tu nombre completo',
      emailPlaceholder: 'tu@email.com',
      asuntoPlaceholder: 'Proyecto web / Colaboración / Consulta',
      mensajePlaceholder: 'Cuéntame sobre tu proyecto o consulta...',
      enviar: 'Enviar Mensaje',
      enviando: 'Enviando...',
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
      copiado: '¡Email copiado al portapapeles! 📋',
      exito: '¡Mensaje enviado por email y WhatsApp! 📧📱 Te responderé pronto.',
      exitoSoloWhatsapp:
        'Mensaje enviado por WhatsApp 📱 (Email en configuración). ¡Te responderé pronto!',
      error:
        'Error al enviar. Pero se abrió WhatsApp 📱 - También puedes contactarme por email directamente.',
    },
  },
  footer: {
    descripcion:
      'Desarrollador Full Stack especializado en crear soluciones web modernas y escalables. Siempre buscando nuevos desafíos y oportunidades de crecimiento.',
    navegacionTitulo: 'Navegación',
    navegacion: {
      about: 'Sobre mí',
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
      position: 'Tech Lead & Full Stack Developer',
      description:
        'Desarrollo completo de sistemas internos: arquitectura, backend, frontend y deploy. Automatización de consultas SUNAT con Playwright y APIs REST con Spring Boot y NestJS, con almacenamiento de archivos en Wasabi S3.',
    },
    JJMM: {
      position: 'Programador',
      description:
        'Desarrollo de software a medida para necesidades operativas de la empresa y automatización de procesos contables con Python.',
    },
    SipnasisCode: {
      position: 'Full Stack Developer',
      description:
        'Desarrollo de múltiples sistemas empresariales para clientes de la agencia, participando en proyectos Full Stack bajo acuerdo de confidencialidad.',
    },
    'GALDIAZ S.A.C.': {
      position: 'Programador Informático',
      description:
        'Sistema de control de inventario y gestión de stock, automatización de tareas administrativas con Python y macros VBA, y optimización de base de datos SQL Server.',
    },
    'Mr. Sif': {
      position: 'Front-End Developer & SEO',
      description:
        'Desarrollo de interfaces web con AlpineJS y Tailwind CSS, y gestión de posicionamiento SEO y marketing digital.',
    },
    'Ingecem Perú': {
      position: 'Desarrollador Web (Prácticas Pre-Profesionales)',
      description:
        'Desarrollo de sistema de control de inventario en C#, diseño e implementación de interfaces de usuario y apoyo en el levantamiento de requerimientos.',
    },
  },
  proyectos: {
    '1': {
      description:
        'Motor de cálculo de planillas bajo legislación laboral peruana con soporte para los 6 regímenes privados del país.',
      longDescription:
        'Sistema de nómina multiempresa que cubre el ciclo completo: carga de trabajadores, cálculo de planillas bajo los 6 regímenes laborales privados de Perú (General, Pequeña empresa, Microempresa, Agrario, Construcción civil, Trabajadoras del hogar) y generación de boletas de pago. Backend con arquitectura hexagonal, más de 370 tests automatizados y CI bloqueante.',
    },
    '2': {
      description:
        'Sistema de gestión integral para estudio contable: cronogramas tributarios SUNAT, alertas, parte diario y consultas RUC/DNI.',
      longDescription:
        'Plataforma interna para un estudio contable que administra cronogramas de obligaciones tributarias y laborales (SUNAT), alertas de vencimientos, parte diario de trabajo del equipo, planificación de tareas y consultas automatizadas de DNI, RUC y tipo de cambio. Monorepo con Turborepo, importación desde Excel, más de 120 tests, hardening de seguridad (rate limiting, revocación JWT) y métricas Prometheus.',
    },
    '3': {
      description:
        'Gestión de empleados, contratos y documentos con soporte multiempresa y generación de carnets en PDF.',
      longDescription:
        'Sistema de Recursos Humanos en producción para gestión multiempresa: legajos de empleados, contratos, documentos y fotos, con generación automática de photochecks y carnets en PDF. Autenticación JWT, validación con Zod y despliegue en Railway.',
    },
    '4': {
      description:
        'App de escritorio que descarga y clasifica comprobantes electrónicos del portal SUNAT de forma masiva.',
      longDescription:
        'Aplicación de escritorio que automatiza la descarga, organización y clasificación de comprobantes electrónicos (facturas, boletas, guías de remisión) desde el portal SUNAT, parseando XML bajo el estándar UBL 2.1. Scraping con Playwright, interfaz PySide6 y distribución como ejecutable.',
    },
    '5': {
      description:
        'Plataforma educativa gamificada: profesores crean sopas de letras de figuras literarias y los alumnos compiten contra el tiempo.',
      longDescription:
        'Aplicación educativa gamificada donde los docentes crean actividades de pupiletras (sopas de letras) sobre figuras literarias y los alumnos las resuelven desde cualquier dispositivo con temporizador competitivo. Backend NestJS con Prisma y frontend Astro + React.',
    },
    '6': {
      description:
        'Web app inmersiva de frases motivacionales según tu estado de ánimo, con música ambiental y experiencia swipe.',
      longDescription:
        'Producto propio B2C: frases motivacionales adaptadas al estado de ánimo del usuario con experiencia de swipe, música ambiental por mood, temas dinámicos y panel de administración. Frontend React con Zustand y Framer Motion; API en Java 21 + Spring Boot con JWT y almacenamiento en Wasabi S3.',
    },
    '7': {
      description:
        'Este portfolio: Next.js 15, TypeScript y Tailwind CSS, con proyectos sincronizados desde GitHub.',
      longDescription:
        'Portfolio personal con tema oscuro/claro, animaciones con Framer Motion, optimización SEO y métricas de repositorios actualizadas automáticamente desde la API de GitHub.',
    },
    '8': {
      description:
        'Sitio corporativo para empresa de ingeniería con optimización SEO y formularios de contacto.',
      longDescription:
        'Sitio web corporativo de Ingecem Perú con diseño responsive, optimización SEO, formularios de contacto y secciones informativas sobre servicios de ingeniería.',
    },
  },
};
