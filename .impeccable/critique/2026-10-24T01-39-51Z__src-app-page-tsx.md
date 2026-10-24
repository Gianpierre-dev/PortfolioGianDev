---
target: homepage del portfolio
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
target_fingerprint: "sha256:e435525a457e87ccb382143fb30e2a76251d0cc467c49d924619bacdd5e60c0c"
target_path: "C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
timestamp: 2026-10-24T01-39-51Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design-review · B: detector)

## Design Health Score

| # | Heurística | Puntaje | Hallazgo clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | Barra de progreso, sección activa y estados de envío y error presentes. |
| 2 | Coincidencia con el mundo real | 3 | Servicios en lenguaje del cliente; jerga en Proyectos (Frontend, arquitectura hexagonal, CI bloqueante, hardening). |
| 3 | Control y libertad | 3 | El menú móvil no cierra con Esc. |
| 4 | Consistencia y estándares | 2 | Tarjeta de WhatsApp azul en Contacto; "Habilidades" vs "Stack tecnológico"; en oscuro cuatro secciones comparten fondo. |
| 5 | Prevención de errores | 3 | Validación en línea buena; Asunto acepta "Prueba". |
| 6 | Reconocer en vez de recordar | 3 | "hace 9 meses" sin etiqueta. |
| 7 | Flexibilidad | n/a | Página persuasiva de un solo recorrido. |
| 8 | Estética y minimalismo | 2 | Proyectos ~2840 px desktop / ~5300 px móvil; 10 filas con el mismo peso. |
| 9 | Recuperación de errores | 3 | Fallback a WhatsApp y datos conservados; el mensaje no dice si reintentar. |
| 10 | Ayuda y documentación | n/a | "Cómo trabajo" cumple el rol. |
| **Total** | | **22/32** | **Acceptable (69%)** |

## Design Specificity Verdict

Evaluación de diseño: contenido muy específico (6 regímenes, SUNAT, RUC/DNI, Yape/Plin, WhatsApp precargado con el sistema), forma de portfolio genérico (hero oscuro con foto circular y nombre gigante, 4 tarjetas con ícono, proceso 01–04, chips de stack). "El Expediente Claro" no se ve; los 3 sistemas privados, la mejor prueba, son las filas visualmente más pobres.

Detector: 18 hallazgos — overused-font (Inter, globals.css:72), gradient-text (globals.css:256), 15 design-system-color, 1 design-system-radius. Falsos positivos: gradient-text y la mayoría de colores están en código muerto de globals.css (.text-gradient, .glass-effect, .shadow-glow*) o en og-imagen.tsx (no admite tokens). Inter es real.

Overlay: no disponible; Chrome retuvo la carga de detect.js desde localhost en la página https.

## Priority Issues

1. [P1] Proyectos entierra la prueba y diluye el posicionamiento: 10 filas iguales, privados sin visual, proyectos personales "En desarrollo" con fechas viejas, "Destacado" en desarrollo, columna de año redundante. Fix: 3 casos destacados con visual de demostración no real, resto plegable en "Otros proyectos", estado en lugar de año. /impeccable distill + /impeccable layout
2. [P1] Falta tranquilidad antes de contactar: Contacto no dice qué pasa después ni tiempos; 3 canales sin jerarquía; tarjeta WhatsApp azul. Fix: bloque principal verde de WhatsApp con línea de tranquilidad confirmada por el usuario; formulario secundario. /impeccable clarify
3. [P2] El hero vende a la persona antes que la solución: foto 190 px + nombre como H1; 7 acciones juntas. Fix: propuesta como H1, nombre como etiqueta, 2 botones, CV fuera del hero. /impeccable typeset + /impeccable distill
4. [P2] Inconsistencias en oscuro y navegación: fondos sin alternar en oscuro, "Habilidades" vs "Stack tecnológico", ícono solo en Proyectos, Esc no cierra menú, menú sin WhatsApp. /impeccable polish + /impeccable harden
5. [P2] Áreas táctiles chicas en acciones de conversión: Consultar/Ver sitio/Código ~20 px, WhatsApp navbar 40×32. /impeccable adapt

## Persona Red Flags

- Jordan: filtros "Frontend 2" / "Automatización 1" opacos; "hace 9 meses" sin contexto; "Privado" puede leerse como no verificable.
- Casey: ~5300 px de proyectos; filtros en dos líneas; "Consultar" diminuto; placeholder de Asunto cortado.
- Riley: "3+ años" vs Ingecem 2018–2022 + 2024–2026; "25+ proyectos" vs 10 listados; formulario promete correo y hoy falla (sin RESEND_API_KEY).
- Rosa (contadora, celular): SIGEMYPE sin visual ni respuesta a "¿sirve para mis 40 RUC?"; no ve modalidad, confidencialidad ni tiempo de respuesta.

## Minor Observations

- Mr. Sif duplicado como proyecto y experiencia.
- Nota técnica 12 px de bajo contraste en oscuro (no medido).
- "Teléfono" + chip "WhatsApp" ambiguo.
- Subtítulo de Contacto genérico.
- "Scroll" con chevron gastado.
- Código muerto en globals.css (gradientes, glass, glow, text-gradient).

## Questions to Consider

1. Sin nombre ni foto en el hero, ¿un dueño de pyme sabría en 3 segundos si el sitio es para él?
2. ¿Qué se pierde de verdad sin TeachGenius, Tonin y la sección Stack?
3. ¿Qué artefacto de demostración puede mostrar los sistemas privados sin violar la confidencialidad?
