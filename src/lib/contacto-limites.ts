// Reglas de largo del formulario de contacto. Las comparten el formulario
// (validación inmediata) y la API (validación definitiva), para que un dato
// aceptado en el navegador nunca vuelva rechazado del servidor.
export const MAXIMOS_CONTACTO = { nombre: 120, email: 160, asunto: 150, mensaje: 5000 } as const;

// El asunto es opcional: vacío se acepta; si se escribe, debe tener este mínimo.
export const MINIMOS_CONTACTO = { nombre: 2, asunto: 3, mensaje: 10 } as const;

// Asunto del correo cuando el visitante no escribe uno.
export const ASUNTO_POR_DEFECTO = 'Consulta sin asunto';
