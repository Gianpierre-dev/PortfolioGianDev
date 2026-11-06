---
target: src/app/page.tsx
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
target_identity: "file:C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
target_fingerprint: "sha256:e435525a457e87ccb382143fb30e2a76251d0cc467c49d924619bacdd5e60c0c"
target_path: "C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
timestamp: 2026-11-06T14-46-11Z
slug: src-app-page-tsx
---
Method: dual-agent (A: diseño · B: detector y navegador), secuencial por navegador compartido.

## Design Health Score

| # | Heurística | Puntaje | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | Al llegar a un proyecto desde Servicios, la fila no se resalta. |
| 2 | Lenguaje del usuario | 3 | "TypeScript de punta a punta" en la prueba del hero y el stack bajo cada sistema hablan a desarrolladores. |
| 3 | Control y libertad | 3 | Sin problemas relevantes. |
| 4 | Consistencia | 2 | Subtítulo "respaldado por sistemas que ya están en uso", pero la prueba de SUNAT es un proyecto propio en desarrollo y la de planillas enlaza a RRHH, que no calcula planillas. |
| 5 | Prevención de errores | 3 | "Toca para abrir el chat" también en escritorio. |
| 6 | Reconocimiento | 3 | Ficha campo · valor clara. |
| 7 | Flexibilidad | n/a | Página persuasiva sin tareas repetidas. |
| 8 | Estética minimalista | 3 | Columna izquierda huérfana en las filas de sistemas privados. |
| 9 | Recuperación de errores | 3 | El error de envío ofrece WhatsApp. |
| 10 | Ayuda | n/a | "Cómo trabajo" cubre la función en una página de servicios. |
| **Total** | | **23/32 (72 %, Good)** | |

## Design Specificity Verdict
Específico en el centro y genérico en los bordes. La ficha del sistema y los servicios enlazados a su prueba son propios del expediente. El hero, las tres cifras de Sobre mí, el Stack y el footer podrían ser de cualquier freelancer.

Detector: 0 hallazgos en page.tsx y src/components. El overlay detect.js no cargó en el sitio HTTPS (Chrome bloquea localhost). En el navegador: sin desborde horizontal, 0 imágenes sin alt, 0 errores en consola. Objetivos táctiles menores de 44 px: enlaces del footer (17 px de alto), enlaces de email y WhatsApp en Contacto (20 px), botón del logo (36 px).

## Priority Issues
1. [P1] Las pruebas de planillas y SUNAT no prueban lo que promete la tarjeta: planillas → RRHH (no calcula planillas); SUNAT → proyecto propio en desarrollo; el subtítulo dice "ya están en uso". Fix: ajustar el texto a la evidencia (RRHH en producción, Planillas en desarrollo con 370 pruebas; SUNAT respaldado por la experiencia en STI GOLD). /impeccable clarify
2. [P2] Columna huérfana en las filas de sistemas privados: el texto termina ~150 px antes que la ficha. Fix: mover Consultar a la columna izquierda bajo la descripción. /impeccable layout
3. [P2] Página larga en móvil (~16 pantallas, Proyectos 4.561 px) sin CTA intermedio entre Servicios y Contacto. Fix: plegar parte de los sitios públicos; integrar Stack en Sobre mí o quitarlo. /impeccable distill
4. [P2] Prueba del hero en jerga técnica ("TypeScript de punta a punta", "STI GOLD"). Fix: datos que entienda un cliente. /impeccable clarify
5. [P3] Objetivos táctiles chicos (footer 17 px, enlaces de contacto 20 px) y el botón azul del formulario compite con WhatsApp. /impeccable polish

## Persona Red Flags
- Jordan: "Sistemas en producción" junto a "En desarrollo" sin explicación; estrellas y forks son ruido.
- Riley: los años no cuadran (3+ vs 2018); horario sin días frente a "mismo día hábil"; "Toca" en escritorio.
- Casey: la línea de garantía queda bajo el pliegue en 844 px; 16 pantallas; enlaces del footer de 17 px.
- Contador / dueño de pyme: llega por SUNAT y planillas, justo donde la evidencia es más débil; la confidencialidad solo aparece en Contacto, no junto a los sistemas privados.

## Minor Observations
- page.tsx:3 dos imports en una línea.
- Estado `demo` definido y sin uso.
- Navbar "Gianpierre Terrazas" vs hero "Gianpierre Terrazas Tello".
- Punto pulsante del footer: única animación decorativa restante.
- Sin resaltado :target al saltar desde Servicios.

## Questions to Consider
- Si la prueba fuerte es SIGEMYPE y RRHH, ¿por qué abrir con cuatro servicios simétricos?
- ¿El Stack es para el cliente o para un reclutador?
- ¿Qué gana el contador si la ficha dice "confidencial" y no muestra el stack?
