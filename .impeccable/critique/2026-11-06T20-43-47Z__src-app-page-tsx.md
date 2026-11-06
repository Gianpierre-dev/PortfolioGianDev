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
timestamp: 2026-11-06T20-43-47Z
slug: src-app-page-tsx
---
Method: dual-agent (A: diseño · B: detector y navegador), secuencial por navegador compartido.

## Design Health Score

| # | Heurística | Puntaje | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | Bien; la portada no dice qué está en producción. |
| 2 | Lenguaje del usuario | 3 | "Full Stack Developer", "Stack", "Email", "forks"; horario sin días. |
| 3 | Control y libertad | 2 | Los saltos internos no crean historial: "volver" saca del sitio; secciones sin URL compartible. |
| 4 | Consistencia | 3 | Botones de WhatsApp con radios y textos distintos; flechas de Prueba desalineadas. |
| 5 | Prevención de errores | 3 | maxLength compartido, asunto opcional. |
| 6 | Reconocimiento | 3 | Al llegar a la fila se pierde el contexto del servicio. |
| 7 | Flexibilidad | n/a | Página persuasiva. |
| 8 | Estética minimalista | 3 | 9 accesos a WhatsApp; ~12.500 px en celular. |
| 9 | Recuperación de errores | 3 | "Email inválido" no dice cómo corregir. |
| 10 | Ayuda | n/a | Sitio de servicios. |
| **Total** | | **23/32 (72 %, Good)** | |

## Design Specificity Verdict
Específico de Servicios hacia abajo (registro con Prueba, ficha, estados); la portada sigue siendo la plantilla de freelance (fondo oscuro, foto circular, dos botones).

Detector: 0 hallazgos. Overlay bloqueado por Chrome (loopback). Navegador: sin overflow, 0 objetivos <44 px, 0 imágenes sin alt, 0 errores; contraste mínimo 4.95 (oscuro) y 4.62 (claro, text-gray-500 de 12–14 px: margen mínimo).

## Priority Issues
1. [P1] Saltos internos rompen "volver": preventDefault + scrollIntoView sin pushState; navbar con button. Fix: pushState del hash, enlaces reales, "← Volver a Servicios". /impeccable harden
2. [P2] Portada sin identidad de expediente: línea de prueba en formato ficha. /impeccable bolder
3. [P2] Saturación de WhatsApp en Proyectos: "Consultar" como enlace con ícono, sin borde. /impeccable quieter
4. [P2] Largo en celular: compactar filas de proyecto (padding, stack en una línea, nota técnica). /impeccable adapt
5. [P3] Pulido: divisores curvos por rounded-xl + divide-y; flechas desalineadas; radios de botones WhatsApp; DESIGN.md dice que el formulario tiene sombra. /impeccable polish

## Persona Red Flags
- Jordan: jerga; "Privado" leído como no disponible.
- Riley: volver sale del sitio; "Te responderé pronto" más débil que "mismo día hábil"; horario sin días.
- Casey: garantías bajo el pliegue a 844 px; ~15 pantallas.
- Contadora: "Más de 120 pruebas" no dice qué gana ella; confidencialidad solo en Contacto; correo hotmail.

## Minor Observations
- Grises de 12 px en claro con margen mínimo (4.62–4.84).
- ~190 px vacíos bajo el hero a 1440.
- Descripción del footer omite estudios contables y webs.

## Questions to Consider
- ¿Cómo sería una portada que ya sea la primera hoja del expediente?
- ¿"370 pruebas" o "cada cambio se verifica antes de tocar tu planilla"?
