import type { Diccionario } from './types';

// Diccionario en español. Fuente de verdad del shape de traducciones.
export const es: Diccionario = {
  nav: {
    inicio: 'Inicio',
    about: 'Sobre mí',
    servicios: 'Servicios',
    proyectos: 'Proyectos',
    habilidades: 'Stack',
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
  whatsapp: {
    cta: 'Escríbeme por WhatsApp',
    mensajeGeneral: 'Hola Gianpierre, vi tu portfolio y quiero conversar sobre un proyecto para mi empresa.',
    mensajeProyecto: 'Hola Gianpierre, vi tu portfolio y me interesa un sistema como',
  },
  hero: {
    statementLinea1: 'Construyo los sistemas que gestionan',
    statementLinea2Pre: 'planillas, RRHH y procesos SUNAT',
    statementLinea2Post: ' de empresas peruanas.',
    prueba: 'Tech Lead en STI GOLD · Sistemas en producción · TypeScript de punta a punta',
    ctaProyectos: 'Ver proyectos',
    ctaCV: 'Descargar CV',
  },
  about: {
    titulo: 'Sobre mí',
    subtitulo: 'Quién desarrolla tu sistema y con qué experiencia.',
    bioParrafos: [
      'Soy desarrollador full stack y trabajo con empresas peruanas que necesitan dejar atrás las hojas de cálculo y los procesos manuales: planillas, recursos humanos, inventarios y trámites con SUNAT.',
      'Me encargo del proyecto completo: entiendo tu proceso, propongo la solución, la desarrollo y la dejo funcionando en producción. Hoy también lidero el desarrollo de sistemas internos como Tech Lead en STI GOLD.',
      'Construyo con tecnologías actuales (TypeScript, NestJS, Next.js y PostgreSQL) y con pruebas automatizadas, para que el sistema sea confiable y fácil de mantener a medida que tu empresa crece.',
    ],
    stats: {
      experiencia: 'Años de experiencia',
      proyectos: 'Proyectos completados',
      ubicacion: 'Ubicación',
    },
    ubicacionValor: 'Perú',
    experienciaTitulo: 'Experiencia profesional',
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
          'Descarga y clasifica de forma masiva facturas, boletas y guías de remisión del portal SUNAT, sin horas de trabajo manual ni descargas una por una.',
      },
      {
        titulo: 'Sistemas de gestión para estudios contables',
        beneficio:
          'Cronogramas de vencimientos con alertas antes de cada fecha límite, parte diario del equipo y consultas de RUC, DNI y tipo de cambio en un solo lugar.',
      },
      {
        titulo: 'Sitios web y tiendas online',
        beneficio:
          'Web o tienda online rápida y adaptada a móviles: catálogo, carrito, pagos con Yape o Plin y pedidos por WhatsApp, lista para que tus clientes te encuentren en Google.',
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
    cta: 'Cuéntame tu proyecto por WhatsApp',
  },
  projects: {
    titulo: 'Proyectos',
    subtitulo:
      'Sistemas de gestión, tiendas online y sitios web en producción. Los sistemas privados se desarrollaron para empresas y no exponen su código.',
    status: {
      live: 'En producción',
      development: 'En desarrollo',
      demo: 'Demo',
    },
    privadoBadge: 'Privado',
    datosClave: 'Datos clave',
    actualizado: 'Código actualizado',
    otrosTitulo: 'Proyectos propios',
    otrosDescripcion: 'Productos y herramientas que desarrollo por mi cuenta, con código público.',
    consultar: 'Consultar',
    verDemo: 'Ver sitio',
    codigo: 'Código',
    capturaAlt: 'Captura de la página principal de',
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
    subtitulo: 'Cuéntame qué necesita tu empresa y te propongo los siguientes pasos.',
    infoTitulo: 'La forma más rápida: WhatsApp',
    infoTexto: 'Escríbeme y conversamos sobre tu proceso actual y lo que quieres resolver.',
    garantias: [
      'Respondo el mismo día hábil.',
      'La primera conversación para entender tu proyecto no tiene costo.',
      'Trabajo con acuerdo de confidencialidad sobre los datos de tu empresa.',
    ],
    labels: {
      email: 'Email',
      telefono: 'WhatsApp',
      ubicacion: 'Ubicación',
      horario: 'Horario',
    },
    valores: {
      ubicacion: 'Perú',
      horario: '9:00 AM - 6:00 PM',
    },
    descripciones: {
      email: 'Clic para copiar el email',
      telefono: 'Toca para abrir el chat',
      ubicacion: 'Disponible para trabajo remoto',
      horario: 'Hora de Perú (UTC-5)',
    },
    badgeCopiar: 'Copiar',
    formTitulo: '¿Prefieres escribir por correo?',
    formAviso: 'Llega directo a mi correo y te respondo a la dirección que indiques.',
    form: {
      nombre: 'Nombre',
      email: 'Email',
      asunto: 'Asunto',
      mensaje: 'Mensaje',
      nombrePlaceholder: 'Tu nombre completo',
      emailPlaceholder: 'tu@email.com',
      asuntoPlaceholder: 'Ej.: sistema de planillas',
      mensajePlaceholder: 'Cuéntame sobre tu proyecto o consulta...',
      enviar: 'Enviar mensaje',
      enviando: 'Enviando...',
      trampa: 'No completes este campo',
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
      exito: 'Mensaje enviado. Te responderé pronto a tu correo.',
      error: 'No se pudo enviar el mensaje. Mientras tanto, puedes escribirme directamente:',
      limite: 'Ya recibí tus mensajes recientes. Si necesitas algo más, escríbeme directamente:',
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
      habilidades: 'Stack',
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
      technicalNote: 'Más de 370 pruebas automatizadas que se ejecutan antes de cada cambio.',
      datosClave: ['6 regímenes laborales', 'Varias empresas en una instalación', 'Boletas de pago'],
    },
    '2': {
      title: 'SIGEMYPE',
      description:
        'Organiza el trabajo de un estudio contable: cronogramas de vencimientos SUNAT, alertas antes de cada fecha límite, parte diario del equipo y consultas automáticas de RUC, DNI y tipo de cambio.',
      technicalNote: 'Importa datos desde Excel y tiene más de 120 pruebas automatizadas.',
      datosClave: ['Cronograma SUNAT con alertas', 'Parte diario del equipo', 'Consultas de RUC, DNI y tipo de cambio'],
    },
    '3': {
      title: 'Sistema de RRHH Multiempresa',
      description:
        'Centraliza los legajos, contratos y documentos del personal de varias empresas, y genera photochecks y carnets en PDF listos para imprimir.',
      technicalNote: 'Acceso con usuario y contraseña, y validación de datos en cada formulario.',
      datosClave: ['Varias empresas', 'Legajos y contratos', 'Carnets en PDF'],
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
