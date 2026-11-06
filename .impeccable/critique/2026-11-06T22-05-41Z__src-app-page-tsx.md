---
target: src/app/page.tsx
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 0
target_identity: "file:C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
target_fingerprint: "sha256:4e30c7ee07c7cf91a3b0b75ed0689a943a36f0ff82d7f717439629c49597d8c0"
target_path: "C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
timestamp: 2026-11-06T22-05-41Z
slug: src-app-page-tsx
---
Method: dual-agent (A: diseño · B: detector y navegador), secuencial por navegador compartido.

## Design Health Score

| # | Heurística | Puntaje | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | "Código actualizado hace 9 meses" en proyecto propio parece abandono. |
| 2 | Lenguaje del usuario | 4 | Regímenes, boletas, RUC/DNI, Yape/Plin, vencimientos SUNAT. |
| 3 | Control y libertad | 3 | "Ver toda la experiencia" no se vuelve a plegar. |
| 4 | Consistencia | 3 | Cifras de Sobre mí en tarjetas; cierre de Proyectos centrado; footer con anclas nativas. |
| 5 | Prevención de errores | 3 | Mínimo de 10 caracteres del mensaje solo visible al fallar. |
| 6 | Reconocimiento | 4 | Cada servicio muestra su prueba con estado. |
| 7 | Flexibilidad | n/a | Página persuasiva. |
| 8 | Estética minimalista | 3 | Tarjetas de cifras y "25+" duplicado. |
| 9 | Recuperación de errores | 3 | Mensajes de "requerido" genéricos. |
| 10 | Ayuda | n/a | Sitio de servicios. |
| **Total** | | **26/32 (81 %, Good)** | |

## Design Specificity Verdict
Casi todo específico (ficha, registro con Prueba, mono solo para datos). Genérico: composición del hero y tarjetas con íconos en Contacto.

Detector: 0 hallazgos. Overlay bloqueado por Chrome (loopback). Navegador: sin overflow, 0 <44 px, 0 sin alt, 0 errores, foco visible en los 30 primeros, todos los bordes a 172 px, noscript presente. Contraste claro 4.62–4.84 (gray-500).

## Priority Issues
1. [P2] Prueba SUNAT con "Código actualizado hace 9 meses": parece abandonada. /impeccable clarify
2. [P3] Cifras de Sobre mí en tarjetas con ícono; "25+" duplicado; Ubicación repetida. /impeccable distill
3. [P3] 7 proyectos de clientes sin agrupar (sistemas vs sitios). /impeccable layout
4. [P3] Cierre de Proyectos centrado; footer con anclas nativas; mismo ícono en Asunto y Mensaje. /impeccable polish

## Persona Red Flags
- Jordan: "Stack" opaco; "Prueba" leída como demo.
- Riley: mínimo de 10 caracteres sin pista; asunto opcional falla con 1–2 caracteres.
- Casey: CTA del hero en y=802 de 844.
- Contador: SUNAT "En desarrollo · hace 9 meses".

## Minor Observations
- Ficha del hero alineada a la izquierda en celular con texto centrado.
- Hero y Servicios poco distinguibles en oscuro.
- Grises de modo claro con margen mínimo sobre AA.

## Questions to Consider
- ¿SUNAT debería encabezar con la experiencia en STI GOLD antes que con el proyecto propio?
- ¿"Stack" necesita estar en la navegación principal?
