// Interfaz del diccionario de traducciones. El español (es.ts) es la fuente de
// verdad del shape; en.ts debe implementar exactamente las mismas keys.

export type Idioma = 'es' | 'en';

export interface DiccionarioNav {
  inicio: string;
  about: string;
  servicios: string;
  proyectos: string;
  habilidades: string;
  contacto: string;
  rolLogo: string;
  irInicio: string;
  navegacionPrincipal: string;
  cambiarTema: string;
  cambiarTemaClaro: string;
  cambiarTemaOscuro: string;
  cambiarIdioma: string;
  abrirMenu: string;
  cerrarMenu: string;
}

// Nombres accesibles de enlaces y botones que solo muestran un ícono.
export interface DiccionarioA11y {
  saltarContenido: string;
  github: string;
  linkedin: string;
  email: string;
  whatsapp: string;
  nuevaPestana: string;
  // Prefijo del alt del avatar; el nombre se concatena en el componente.
  fotoPerfil: string;
}

export interface DiccionarioHero {
  statementLinea1: string;
  statementLinea2Pre: string;
  statementLinea2Post: string;
  prueba: string;
  ctaProyectos: string;
  ctaCV: string;
  ctaContacto: string;
  scroll: string;
}

export interface DiccionarioAboutStats {
  experiencia: string;
  proyectos: string;
  ubicacion: string;
}

export interface DiccionarioAbout {
  titulo: string;
  subtitulo: string;
  bioParrafos: string[];
  stats: DiccionarioAboutStats;
  ubicacionValor: string;
  experienciaTitulo: string;
}

export interface ServicioTraducido {
  titulo: string;
  beneficio: string;
}

export interface PasoProceso {
  titulo: string;
  descripcion: string;
}

export interface DiccionarioServicios {
  titulo: string;
  subtitulo: string;
  // Orden fijo: planillas/RRHH, SUNAT, estudios contables, web corporativa.
  items: ServicioTraducido[];
  procesoTitulo: string;
  procesoSubtitulo: string;
  pasos: PasoProceso[];
  cta: string;
}

export interface DiccionarioProjects {
  titulo: string;
  subtitulo: string;
  // Aclaración de términos locales (SUNAT, planilla) para lectores extranjeros.
  // Solo existe en los idiomas que la necesitan.
  notaContexto?: string;
  categorias: {
    all: string;
    fullstack: string;
    frontend: string;
    automation: string;
  };
  status: {
    live: string;
    development: string;
    demo: string;
  };
  destacado: string;
  privadoBadge: string;
  consultar: string;
  verDemo: string;
  codigo: string;
  // Prefijo del alt de la captura; el título del proyecto se concatena.
  capturaAlt: string;
  estrellas: string;
  forks: string;
}

export interface DiccionarioSkills {
  titulo: string;
  subtitulo: string;
  categorias: {
    frontend: string;
    backend: string;
    database: string;
    tools: string;
  };
}

export interface DiccionarioContact {
  titulo: string;
  subtitulo: string;
  infoTitulo: string;
  infoTexto: string;
  labels: {
    email: string;
    telefono: string;
    ubicacion: string;
    horario: string;
  };
  valores: {
    ubicacion: string;
    horario: string;
  };
  descripciones: {
    email: string;
    telefono: string;
    ubicacion: string;
    horario: string;
  };
  badgeCopiar: string;
  badgeWhatsapp: string;
  formTitulo: string;
  formAviso: string;
  form: {
    nombre: string;
    email: string;
    asunto: string;
    mensaje: string;
    nombrePlaceholder: string;
    emailPlaceholder: string;
    asuntoPlaceholder: string;
    mensajePlaceholder: string;
    enviar: string;
    enviando: string;
  };
  validaciones: {
    nombreRequerido: string;
    nombreMin: string;
    emailRequerido: string;
    emailInvalido: string;
    asuntoRequerido: string;
    asuntoMin: string;
    mensajeRequerido: string;
    mensajeMin: string;
  };
  mensajes: {
    copiado: string;
    exito: string;
    error: string;
  };
}

export interface DiccionarioFooter {
  descripcion: string;
  navegacionTitulo: string;
  navegacion: {
    about: string;
    servicios: string;
    proyectos: string;
    habilidades: string;
    contacto: string;
  };
  contactoTitulo: string;
  ubicacion: string;
  copyright: string;
  disponible: string;
}

export interface ExperienciaTraducida {
  position: string;
  description: string;
  period: string;
}

export interface ProyectoTraducido {
  title: string;
  // Qué problema resuelve y para quién, en lenguaje de negocio.
  description: string;
  // Una línea técnica breve; el stack completo vive en los datos del proyecto.
  technicalNote: string;
}

export interface Diccionario {
  nav: DiccionarioNav;
  a11y: DiccionarioA11y;
  hero: DiccionarioHero;
  about: DiccionarioAbout;
  servicios: DiccionarioServicios;
  projects: DiccionarioProjects;
  skills: DiccionarioSkills;
  contact: DiccionarioContact;
  footer: DiccionarioFooter;
  // Keyed por company (personal.ts mantiene company y los textos de respaldo).
  experiencias: Record<string, ExperienciaTraducida>;
  // Keyed por id de proyecto (data/proyectos.ts mantiene tech/links/year).
  proyectos: Record<string, ProyectoTraducido>;
}
