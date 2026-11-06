---
target: src/app/page.tsx
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
target_identity: "file:C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
target_fingerprint: "sha256:4e30c7ee07c7cf91a3b0b75ed0689a943a36f0ff82d7f717439629c49597d8c0"
target_path: "C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
timestamp: 2026-11-06T17-30-03Z
slug: src-app-page-tsx
---
Method: dual-agent (A: diseño · B: detector y navegador), secuencial por navegador compartido.

## Design Health Score

| # | Heurística | Puntaje | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | Sin problemas relevantes. |
| 2 | Lenguaje del usuario | 3 | "Full Stack Developer", "Stack", "forks" y "Código actualizado" son jerga para un contador. |
| 3 | Control y libertad | 3 | Sin problemas relevantes. |
| 4 | Consistencia | 3 | Cuatro estilos de botón de WhatsApp para la misma acción. |
| 5 | Prevención de errores | 3 | El cliente no recorta espacios ni limita largo; el servidor sí. |
| 6 | Reconocimiento | 3 | "En desarrollo" solo se distingue por un punto gris. |
| 7 | Flexibilidad | n/a | Página persuasiva sin flujos repetidos. |
| 8 | Estética minimalista | 2 | Línea de garantías literal 3 veces más la lista de Contacto; "25+" dos veces; ~9 accesos a WhatsApp. |
| 9 | Recuperación de errores | 3 | Errores de validación del servidor llegan como "No se pudo enviar" genérico. |
| 10 | Ayuda | n/a | Superficie de persuasión. |
| **Total** | | **23/32 (72 %, Good)** | |

## Design Specificity Verdict
Contenido específico, composición de plantilla: la ficha y los enlaces a la prueba son propios; encabezados centrados idénticos, tarjetas de ícono 2×2, proceso 01–04 y cifras son genéricos.

Detector: 0 hallazgos. Overlay bloqueado por Chrome (Local Network Access hacia localhost). Navegador: sin overflow, 0 imágenes sin alt, sin errores propios, contraste ≥4.5:1 en Servicios/Proyectos/Contacto en ambos temas; navbar de escritorio 42 px y "Stack" del footer 37 px de ancho.

## Priority Issues
1. [P1] Jerarquía invertida en Contacto: el formulario (p-8, sombra, título 2xl, botón azul) domina sobre WhatsApp. Fix: bajar el peso del formulario, quitar la sombra, Asunto opcional, plegarlo en móvil. /impeccable layout
2. [P2] Garantías repetidas literalmente: dejarlas en el hero y Contacto. /impeccable distill
3. [P2] Composición genérica fuera de Proyectos: llevar el lenguaje de la ficha a Servicios y alinear encabezados. /impeccable bolder
4. [P2] Longitud en móvil (~13,5 pantallas hasta Contacto): compactar experiencia y Stack sin quitarlo. /impeccable adapt
5. [P3] En móvil el stack y Consultar van antes que la ficha en filas privadas. /impeccable adapt

## Persona Red Flags
- Jordan: jerga en inglés.
- Riley: errores del servidor genéricos; cuatro role="alert" simultáneos.
- Casey: 4 campos obligatorios; Contacto muy abajo.
- Contador: email hotmail; horario sin días; repos públicos de clientes junto a "confidencialidad".

## Minor Observations
- "100 %" se corta en dos líneas (usar espacio de no separación).
- Estrella amber como tercer color.
- whileHover y:-2 en la navbar.
- Subtítulo de Proyectos dice "en producción" para todo.

## Questions to Consider
- Si WhatsApp es el canal, ¿por qué lo más pesado al final es un formulario?
- ¿Y si Servicios se viera como la ficha?
- ¿Mostrar el repo de un cliente refuerza o contradice la confidencialidad?
