---
name: Portfolio Gianpierre Terrazas
description: Sitio de servicios y portfolio de un desarrollador full stack que construye sistemas de gestión para empresas peruanas.
colors:
  brand-blue: "oklch(54.6% 0.245 262.881)"
  brand-blue-deep: "oklch(48.8% 0.243 264.376)"
  brand-blue-light: "oklch(70.7% 0.165 254.624)"
  whatsapp-green: "oklch(52.7% 0.154 150.069)"
  whatsapp-green-deep: "oklch(44.8% 0.119 151.328)"
  night-ink: "oklch(13% 0.028 261.692)"
  ink: "oklch(21% 0.034 264.665)"
  slate-text: "oklch(44.6% 0.03 256.802)"
  slate-muted: "oklch(55.1% 0.027 264.364)"
  hairline: "oklch(92.8% 0.006 264.531)"
  paper-mist: "oklch(98.5% 0.002 247.839)"
  paper: "#ffffff"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.55
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label-mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.625
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  section-y: "80px"
  card: "24px"
  gutter: "16px"
components:
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  button-whatsapp-hover:
    backgroundColor: "{colors.whatsapp-green-deep}"
  button-primary:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-blue-deep}"
  button-outline-dark:
    textColor: "{colors.brand-blue-light}"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  card-service:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  chip-filter-active:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: Portfolio Gianpierre Terrazas

<!-- Documentado desde el código y el sitio en vivo (scan mode). El nombre de la North Star y el lenguaje descriptivo los propuso el agente sin entrevista: el usuario pidió avanzar sin preguntas. Revisarlos cuando convenga. -->

## Overview

**Creative North Star: "El Expediente Claro"**

El sitio se comporta como un expediente bien ordenado que un contador o el dueño de una pyme puede revisar en minutos: qué se ofrece, qué ya está en producción y cómo contactar. La claridad pesa más que la expresión. Superficies blancas y gris niebla, tinta azul pizarra para el texto, un solo azul de marca para la acción y la identidad, y un hero nocturno que funciona como portada.

La densidad es media: secciones con aire generoso (80 px de margen vertical), contenido en columnas acotadas (máx. 1024–1152 px) y listas que privilegian la lectura antes que la decoración. Los proyectos se presentan como filas de un registro (año, ficha, estado), no como una galería de tarjetas. El verde de WhatsApp es el único segundo color con permiso, porque es el canal de contacto.

**Key Characteristics:**
- Inter en todo el sitio, jerarquía por peso y tamaño, nunca por color decorativo.
- Un azul de marca para acción, enlaces activos y detalles; un verde reservado a WhatsApp.
- Hero oscuro en ambos temas; el resto del sitio sigue el tema claro u oscuro del visitante.
- Bordes finos y radios suaves en lugar de sombras; la profundidad casi no se usa.
- Monoespaciada solo para datos: años, numeración de pasos y listas de tecnologías.

## Colors

Paleta fría y sobria: neutros azul pizarra de Tailwind, un azul eléctrico de marca y el verde de WhatsApp como excepción funcional.

### Primary
- **Azul Expediente** (`brand-blue`): botones primarios, filtro activo, enlaces y estados activos de la navegación, íconos de sección y el punto de la línea de tiempo. Su versión profunda (`brand-blue-deep`) es el hover. En el hero y en modo oscuro se usa la variante clara (`brand-blue-light`) para texto destacado y botones de contorno.

### Secondary
- **Verde Canal** (`whatsapp-green`): exclusivo de los accesos a WhatsApp (navbar, botón principal del hero, llamado de Servicios, "Consultar" de proyectos privados, tarjeta de contacto). Es más oscuro que el verde oficial de la marca para cumplir el contraste AA con texto blanco. Hover en `whatsapp-green-deep`.

### Neutral
- **Tinta Nocturna** (`night-ink`): fondo del hero, siempre oscuro, y fondo de secciones en modo oscuro.
- **Tinta** (`ink`): títulos y texto principal en modo claro; fondo de tarjetas y secciones en modo oscuro.
- **Pizarra** (`slate-text`): párrafos y descripciones.
- **Pizarra Tenue** (`slate-muted`): metadatos, años, notas técnicas y listas de tecnologías.
- **Línea** (`hairline`): bordes de tarjetas, separadores de filas y campos.
- **Niebla** (`paper-mist`): fondo de las secciones alternas (Servicios, Sobre mí, Stack) y de las tarjetas de contacto.
- **Papel** (`paper`): fondo base y de tarjetas en modo claro.

### Named Rules
**The One Voice Rule.** El azul es la única voz de marca. Ningún componente nuevo introduce un tercer color de acento.

**The Green Means WhatsApp Rule.** El verde solo aparece donde un toque abre WhatsApp. Usarlo para "éxito" decorativo o para otro canal confunde al visitante.

**The Alternating Ground Rule.** Las secciones alternan Papel y Niebla para marcar el ritmo; dos secciones contiguas del mismo fondo necesitan un separador explícito (borde superior de 1 px).

## Typography

**Display Font:** Inter (con -apple-system, Segoe UI, sans-serif)
**Body Font:** Inter
**Label/Mono Font:** monoespaciada del sistema (ui-monospace, SF Mono, Menlo)

**Character:** Una sola familia neutra y muy legible que no compite con el contenido; la monoespaciada aporta el tono de "registro técnico" solo donde hay datos.

### Hierarchy
- **Display** (700, 3.75rem en desktop, 2.25rem en móvil, interlineado 1): solo el nombre en el hero.
- **Headline** (700, 2.25rem, 1.1): títulos de sección (Servicios, Proyectos, Sobre mí, Contacto).
- **Title** (600, 1.125–1.25rem, 1.55): títulos de servicios, proyectos, cargos y pasos.
- **Body** (400, 1rem–1.125rem, 1.6): bio y subtítulos de sección; máximo ~70 caracteres por línea.
- **Body Small** (400, 0.875rem, 1.625): descripciones de servicios, proyectos y experiencia.
- **Label Mono** (400, 0.75rem): años, numeración de pasos (01–04) y stacks separados por " · ".

### Named Rules
**The Data-Only Mono Rule.** La monoespaciada marca datos (fechas, numeración, tecnologías). Nunca títulos ni párrafos.

## Layout

Página única con secciones apiladas. Contenedores centrados con margen lateral de 16 px en móvil, 24 px en tablet y 32 px en desktop; anchos máximos de 1024 px (Proyectos, Sobre mí) a 1280 px (navbar). Margen vertical de sección de 80 px (56 px en Stack).

- **Servicios:** grilla de 2 columnas desde md; proceso en 4 columnas desde lg.
- **Proyectos:** filas de registro con grilla `año (3.5rem) · ficha (flexible) · captura y accesos (16rem)` desde md; en móvil, una columna con la captura antes de los accesos.
- **Sobre mí:** bio con datos clave al costado (17rem) y experiencia a lo ancho en 2 columnas.
- **Contacto:** 2 columnas desde lg; las tarjetas reparten el alto del formulario para terminar alineadas.
- **Navbar:** fija, transparente sobre el hero y con fondo translúcido al hacer scroll.

### Named Rules
**The No-Orphan-Column Rule.** En desktop ninguna columna puede terminar mucho antes que su vecina: si el contenido es desigual, se reorganiza la grilla en vez de dejar el hueco.

## Elevation & Depth

Sistema plano con bordes. La profundidad se comunica con bordes de 1 px y cambios de fondo entre secciones; las sombras se reservan para tres casos: el formulario de contacto (sombra amplia y suave), la barra de navegación al hacer scroll y los botones del hero.

### Named Rules
**The Border-Before-Shadow Rule.** Una tarjeta nueva lleva borde fino, no sombra. La sombra señala algo flotante (navbar) o la acción final (formulario).

## Shapes

Radios suaves y consistentes: 6 px en el botón del formulario, 8 px en campos, 12 px en botones del hero y del navbar, 16 px en tarjetas de servicios y filas de proyectos, y píldora completa en filtros y etiquetas de estado. La foto del hero es circular con un anillo azul tenue. Las capturas de proyectos tienen esquinas de 8 px y borde fino.

## Components

### Buttons
- **Shape:** 12 px en el hero y el navbar, 8 px en secciones y 6 px en el formulario.
- **WhatsApp (acción principal):** Verde Canal con texto blanco y logo oficial de WhatsApp; en el hero, 16×32 px de padding y texto 18 px semibold.
- **Primario:** Azul Expediente con texto blanco; hover en el azul profundo.
- **Contorno sobre oscuro:** borde de 2 px en azul claro y texto azul claro, sin fondo; solo en el hero.
- **Focus:** anillo de 2 px del color del botón con separación de 2 px.

### Chips
- **Filtros de proyectos:** píldora; el activo usa Azul Expediente y el inactivo es blanco con borde fino. Incluyen el conteo en monoespaciada.
- **Insignias:** "Destacado" en azul translúcido y "Privado" en gris, ambas en píldora con ícono de 12 px.
- **Tecnologías (Stack):** rectángulo de 6 px, fondo Niebla y borde fino, texto de 12 px.

### Cards / Containers
- **Corner Style:** 16 px (servicios), 8 px (contacto y datos clave).
- **Background:** Papel en modo claro, Tinta en modo oscuro; tarjetas de contacto en Niebla.
- **Shadow Strategy:** sin sombra (ver Elevation & Depth).
- **Border:** 1 px en Línea.
- **Internal Padding:** 24 px (servicios), 20 px (contacto), 16 px (datos clave).

### Inputs / Fields
- **Style:** fondo blanco, borde de 1 px, radio de 8 px, padding de 12×16 px; etiqueta encima con ícono de 16 px.
- **Focus:** anillo azul de 2 px.
- **Error:** borde rojo, mensaje rojo debajo con ícono, vinculado por `aria-describedby`.

### Navigation
- **Desktop:** enlaces de texto de 16 px con fondo suave al pasar el cursor; el activo se marca en azul con una línea de 2 px debajo. A la derecha, botón compacto de WhatsApp, selector ES|EN y botón de tema.
- **Móvil:** logo `gt_`, WhatsApp solo con ícono, idioma, tema y menú desplegable.
- Una barra de progreso azul de 4 px recorre el borde superior.

### Fila de proyecto (signature)
Registro de tres columnas: año en monoespaciada, ficha (título, insignias, descripción de negocio, nota técnica y stack) y, si hay sitio público, una captura de 1280×800 con estado y enlaces debajo. Al pasar el cursor, la fila toma fondo Niebla y el título se vuelve azul.

## Do's and Don'ts

### Do:
- **Do** usar Azul Expediente (`brand-blue`) como único acento de marca y Verde Canal solo para WhatsApp.
- **Do** alternar fondos Papel y Niebla entre secciones, con borde de 1 px si dos fondos iguales quedan contiguos.
- **Do** incluir variantes `dark:` en todo estilo nuevo; el hero se queda oscuro en ambos temas.
- **Do** mantener el contraste AA: texto blanco sobre `whatsapp-green` y no sobre el verde oficial #25D366.
- **Do** verificar cada cambio de layout en 1440 px y en 390 px.

### Don't:
- **Don't** usar los gradientes violeta y rosa, `.glass-effect`, `.shadow-glow` ni `.text-gradient` de `globals.css`: son restos de una versión anterior y no forman parte del sistema.
- **Don't** volver a la burbuja flotante de WhatsApp: el acceso fijo vive en el navbar.
- **Don't** usar la monoespaciada para títulos o párrafos.
- **Don't** agregar sombras a tarjetas nuevas.
- **Don't** mostrar métricas, testimonios o logos de clientes que no existan.
