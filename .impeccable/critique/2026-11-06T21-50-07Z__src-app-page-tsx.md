---
target: src/app/page.tsx
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 0
target_identity: "file:C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
target_fingerprint: "sha256:4e30c7ee07c7cf91a3b0b75ed0689a943a36f0ff82d7f717439629c49597d8c0"
target_path: "C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
timestamp: 2026-11-06T21-50-07Z
slug: src-app-page-tsx
---
Method: dual-agent (A: diseño · B: detector y navegador), secuencial por navegador compartido.

## Design Health Score

| # | Heurística | Puntaje | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 4 | Sección activa, progreso, fila resaltada, envío, estados. |
| 2 | Lenguaje del usuario | 3 | "Full Stack Developer", "Stack", "Frontend/Backend", "forks". |
| 3 | Control y libertad | 3 | Historial y "Volver a Servicios" funcionan; history.back falla si se navegó entre medio. |
| 4 | Consistencia | 3 | Borde izquierdo distinto por sección; sombras fuera del sistema. |
| 5 | Prevención de errores | 3 | Bien. |
| 6 | Reconocimiento | 3 | "SIGEMYPE" en la portada sin contexto. |
| 7 | Flexibilidad | n/a | Página persuasiva. |
| 8 | Estética minimalista | 3 | Largo en celular (~15 pantallas). |
| 9 | Recuperación de errores | 3 | "Email inválido" no sugiere el formato. |
| 10 | Ayuda | n/a | Sitio de servicios. |
| **Total** | | **25/32 (78 %, Good)** | |

## Design Specificity Verdict
Específico: ficha en portada, servicios como registro con prueba, ficha del sistema. Zonas genéricas: tarjetas de cifras de Sobre mí y tarjetas con ícono de Stack.

Detector: 0 hallazgos. Overlay bloqueado por Chrome (loopback). Navegador: sin overflow, 0 objetivos <44 px, 0 imágenes sin alt, 0 errores; contraste mínimo 4.62 (claro); 8 enlaces (Prueba y Consultar) solo muestran foco con subrayado.

## Priority Issues
1. [P2] Borde izquierdo distinto por sección (112/176/240/208/240/176 px a 1440) por contenedores 7xl/6xl/5xl mezclados. /impeccable layout
2. [P2] Proyectos ocupa ~5 pantallas en celular: capturas a todo ancho. /impeccable distill
3. [P2] Selector de idioma: nombre accesible no contiene el texto visible "ES | EN" (WCAG 2.5.3). /impeccable harden
4. [P2] Sin JS, las secciones con whileInView quedan en opacity 0 (SSR). /impeccable harden
5. [P3] Sombras fuera del sistema (capturas, hover de tarjetas de contacto); foco solo con subrayado en Prueba/Consultar; menú móvil sin foco visible. /impeccable polish

## Persona Red Flags
- Jordan: "SIGEMYPE" y "Stack" opacos.
- Riley: contenido invisible sin JS; history.back tras navegar entre medio; console.log con emoji en descarga de CV.
- Casey: ~15 pantallas; SIGEMYPE llega tras ~2.300 px.
- Contador: la portada no dice qué maneja ya en producción en términos operativos; Zustand/Turborepo son ruido.

## Minor Observations
- "Email inválido" sin formato esperado.
- DESIGN.md documenta filtros de proyectos que ya no existen.
- Formulario y columna izquierda de Contacto no comparten línea superior.

## Questions to Consider
- ¿Stack necesita tarjetas o basta una línea mono?
- ¿Y si la ficha de la portada diera un dato operativo en vez de nombres propios?
