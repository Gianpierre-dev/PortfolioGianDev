// Interfaz del diccionario de traducciones. El español (es.ts) es la fuente de
// verdad del shape; en.ts debe implementar exactamente las mismas keys.

export type Idioma = 'es' | 'en';

export interface DiccionarioNav {
  inicio: string;
  about: string;
  proyectos: string;
  habilidades: string;
  contacto: string;
  rolLogo: string;
  irInicio: string;
  cambiarTemaClaro: string;
  cambiarTemaOscuro: string;
  cambiarIdioma: string;
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
  tecnologias: string;
  ubicacion: string;
}

export interface DiccionarioAbout {
  titulo: string;
  subtitulo: string;
  bioTitulo: string;
  bioParrafos: string[];
  stats: DiccionarioAboutStats;
  ubicacionValor: string;
  cvBoton: string;
  enfoqueTitulo: string;
  enfoqueBullets: string[];
  cita: string;
  experienciaTitulo: string;
}

export interface DiccionarioProjects {
  titulo: string;
  sincronizando: string;
  subtitulo: string;
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
  githubNotice: string;
}

export interface DiccionarioSkills {
  titulo: string;
  subtitulo: string;
  metricas: {
    tecnologias: string;
    nivelPromedio: string;
    aniosExp: string;
  };
  categorias: {
    all: string;
    frontend: string;
    backend: string;
    database: string;
    tools: string;
  };
  niveles: {
    experto: string;
    avanzado: string;
    intermedio: string;
    basico: string;
  };
  promedio: string;
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
  redesTitulo: string;
  formTitulo: string;
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
    exitoSoloWhatsapp: string;
    error: string;
  };
}

export interface DiccionarioFooter {
  descripcion: string;
  navegacionTitulo: string;
  navegacion: {
    about: string;
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
  description: string;
  longDescription: string;
}

export interface Diccionario {
  nav: DiccionarioNav;
  hero: DiccionarioHero;
  about: DiccionarioAbout;
  projects: DiccionarioProjects;
  skills: DiccionarioSkills;
  contact: DiccionarioContact;
  footer: DiccionarioFooter;
  // Keyed por company (personal.ts mantiene period/technologies/company).
  experiencias: Record<string, ExperienciaTraducida>;
  // Keyed por id de proyecto (personal/Projects mantiene tech/links/year).
  proyectos: Record<string, ProyectoTraducido>;
}
