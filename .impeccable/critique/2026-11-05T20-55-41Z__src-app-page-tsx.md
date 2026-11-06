---
target: src/app/page.tsx
total_score: 25
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
target_fingerprint: "sha256:e435525a457e87ccb382143fb30e2a76251d0cc467c49d924619bacdd5e60c0c"
target_path: "C:\\dev\\gian\\PortfolioGianDev\\src\\app\\page.tsx"
timestamp: 2026-11-05T20-55-41Z
slug: src-app-page-tsx
---
Method: dual-agent (A: revisión de diseño · B: detector + navegador). El overlay en el navegador falló (detect.js no cargó en el sitio HTTPS en vivo); el escaneo CLI sí corrió.

## Puntaje de diseño

| # | Heurística | Puntaje | Problema principal |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | Progreso, menú activo y estados del formulario correctos; WhatsApp abre con un mensaje que no se ve antes. |
| 2 | Coincidencia con el mundo real | 3 | "Stack", líneas de tecnologías y "Clic para copiar el email" en celular (`es.ts:161`). |
| 3 | Control y libertad | 3 | Tocar el email lo copia en vez de abrir el correo. |
| 4 | Consistencia | 3 | Esmeralda en "En producción" (`Projects.tsx:16`) y en el aviso de copiado; violeta en "Demo" (`Projects.tsx:18`). |
| 5 | Prevención de errores | 3 | El asunto exige 5 caracteres (`Contact.tsx:372`) y rechaza "RRHH". |
| 6 | Reconocer en vez de recordar | 3 | Los servicios no enlazan al proyecto que los respalda. |
| 7 | Flexibilidad y eficiencia | n/a | Página de una sola visita para convencer. |
| 8 | Estética y minimalismo | 2 | "Datos clave" repite la descripción; 13.500 px en celular, Proyectos 4.600 px. |
| 9 | Recuperación de errores | 3 | El formulario ofrece WhatsApp si falla. |
| 10 | Ayuda y documentación | 2 | No responde costo, plazos ni propiedad del código. |
| **Total** | | **25/36 (69 %)** | **Aceptable** |

## Especificidad del diseño

El texto es específico (SUNAT, regímenes, RUC/DNI, Yape/Plin); la parte visual es de plantilla (hero oscuro con grilla, foto circular, tarjetas con ícono, pasos 01–04, grilla de tecnologías). "El Expediente Claro" no se ve. DESIGN.md quedó desactualizado: la columna de año se quitó a propósito en `f206fbc` y el Display ya no es el nombre.

Escaneo CLI: código 2, 19 hallazgos (2 advertencias, 17 avisos). Mayoría CSS muerto en `globals.css:187-259` (`.text-gradient`, `.glass-effect`, `.shadow-glow*`); Inter es decisión documentada. Desvíos reales: `text-[3.4rem]` en `Hero.tsx:67`, color de la grilla en `Hero.tsx:34`, colores literales de la imagen OG (menor).

## Lo que funciona

1. El hero dice la oferta en palabras del cliente y WhatsApp domina.
2. "Consultar" precarga el nombre del sistema en el mensaje.
3. Errores honestos: el formulario cae a WhatsApp, límite de envíos, nada inventado.

## Problemas prioritarios

1. **[P1] La confianza llega al final.** Las garantías solo están en Contacto (~10.900 px en celular). Arreglo: una línea con dos garantías bajo los botones del hero y junto al botón de Servicios. Comando: clarify.
2. **[P1] Los sistemas privados no prueban casi nada.** "Datos clave" repite la descripción; el hero dice "Sistemas en producción" y Planillas está "En desarrollo" (`proyectos.ts:56`). Arreglo: datos nuevos (qué reemplazó, tipo de organización) y primero los sistemas en producción. Requiere datos del usuario. Comandos: distill, clarify.
3. **[P2] Estética de plantilla.** Nada se ve como expediente. Arreglo: sistemas privados como fichas con campos, quitar la grilla decorativa, actualizar DESIGN.md. Comandos: shape, bolder, document.
4. **[P2] Servicios sin enlace a su prueba; sin respuestas para el comprador.** `Services.tsx:52`. Arreglo: enlace por servicio al proyecto y preguntas frecuentes breves (costo, plazos, propiedad). Comandos: layout, clarify.
5. **[P2] Fricción en Contacto y colores fuera del sistema.** Asunto rechaza "RRHH", email se copia al tocar, "Clic" en táctil, Horario/Ubicación parecen tocables, esmeralda y violeta en estados. Comandos: harden, polish.

## Señales por persona

- Jordan: "Stack", "Tech Lead en STI GOLD" como primera prueba, líneas de tecnologías, sin costo ni plazos.
- Riley: "RRHH" falla, email copia sin correo, tarjetas no tocables con estilo tocable, verde de estado vs WhatsApp.
- Casey: garantías a 11.000 px, Proyectos de 4.600 px, "Clic", datos de Sobre mí apretados.
- Dueño de estudio contable en Lima: SIGEMYPE sin nada que mirar, Planillas "En desarrollo", confidencialidad escondida.

## Observaciones menores

- Fondo de la foto del hero poco profesional (tarea de contenido).
- "Perú" repetido 4+ veces.
- Email hotmail (pendiente dominio propio).
- Experiencia y Stack completos; podrían plegarse.
- 7+ botones verdes de WhatsApp.
- Sin margen de scroll bajo la barra fija al saltar a secciones.
- CSS muerto en `globals.css:187-259`.

## Preguntas

1. Si el concepto es "expediente", ¿por qué nada se ve como ficha?
2. ¿Las webs y tiendas suman junto a planillas y SUNAT, o dan imagen de agencia generalista?
3. ¿Un "desde S/ X" o un plazo típico convertiría mejor?
4. ¿La primera conversación sin costo debería abrir la página?
