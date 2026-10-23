# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Portfolio personal de Gianpierre Terrazas — sitio one-page construido con Next.js 15 (App Router), React 19, TypeScript y Tailwind CSS 4. Deploy en Railway (https://portfolio-gian-production.up.railway.app). El público objetivo son clientes potenciales (empresas peruanas, estudios contables, pymes), no reclutadores.

## Comandos

```bash
npm run dev     # Desarrollo con Turbopack (http://localhost:3000)
npm run build   # Build de producción (output: standalone)
npm start       # Servir build de producción
npm run lint    # ESLint (eslint-config-next)
```

No hay tests configurados en este proyecto.

Nota: aunque las convenciones globales de `C:\dev\CLAUDE.md` indican pnpm, este proyecto usa npm (no hay pnpm-lock.yaml; el README documenta npm).

## Arquitectura

Es una single page: `src/app/page.tsx` (server component) compone todas las secciones en orden (SkipLink → Navbar → Hero → About → Services → Projects → Skills → Contact → Footer). No hay rutas adicionales de UI.

- `src/app/page.tsx` — obtiene las métricas de GitHub en el servidor y las pasa como props a Projects.
- `src/components/sections/` — secciones de la página (Hero, About, Services, Projects, Skills, Contact). Son client components con animaciones de Framer Motion.
- `src/components/` — Navbar, Footer, SkipLink, ThemeProvider y SmoothScroll (Lenis + `MotionConfig reducedMotion="user"`).
- `src/components/ui/` — primitivas reutilizables (Button, RippleButton, etc.).
- `src/i18n/` — diccionarios ES/EN (`es.ts` es la fuente de verdad del shape, `types.ts` la interfaz). Todo texto visible va aquí; el español es neutro con tuteo.
- `src/data/personal.ts` — datos personales (nombre, título, email, skills, experiencia). Cambios de contenido van aquí, no en los componentes.
- `src/data/proyectos.ts` — datos técnicos de los proyectos (stack, links, repo, estado). Los textos de cada proyecto viven en el diccionario i18n, keyed por id.
- `src/lib/github.ts` — integración con la API pública de GitHub (username hardcodeado `Gianpierre-dev`). Usa `next: { revalidate: 3600 }`; solo se llama desde el servidor.
- `src/lib/email.ts` — el formulario de contacto abre WhatsApp (`wa.me` con mensaje pre-armado). No hay API de envío de email (se eliminó: era pública y sin uso).
- `src/lib/site.ts` — URL canónica (`SITE_URL`) y textos SEO. Fuente única para metadataBase, sitemap, robots y JSON-LD.
- `src/app/opengraph-image.tsx` y `src/app/twitter-image.tsx` — imagen de previsualización generada con `next/og` (`src/lib/og-imagen.tsx`).
- `src/types/index.ts` — tipos compartidos (Skill, ContactForm, SocialLink, etc.).

## Convenciones

- Tema claro/oscuro con `next-themes` (`ThemeProvider` en `src/components/`), variante `dark:` por clase (ver `globals.css`); todo estilo nuevo debe incluir variantes `dark:`. El hero es oscuro en ambos temas.
- Iconos: Lucide React; los íconos decorativos llevan `aria-hidden` y los enlaces solo-ícono un `aria-label` del diccionario (`t.a11y`).
- Formularios con react-hook-form (ver Contact), con `aria-invalid` y `aria-describedby` en los errores.
- `next.config.ts` define headers de seguridad (X-Frame-Options, nosniff, Referrer-Policy) y dominios permitidos de imágenes — actualizar ahí si se agregan imágenes remotas nuevas.

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio. Se inyecta en build; si falta, se usa el dominio de Railway (ver `src/lib/site.ts`). No definir defaults en `next.config.ts` (un default a localhost terminaba en og:image).
- `GITHUB_TOKEN` — opcional (token sin permisos); sube el límite de la API de GitHub de 60 a 5000 req/h.
- La imagen OG carga Inter desde `src/assets/fonts/` con `fs`; `next.config.ts` la incluye vía `outputFileTracingIncludes` para el output standalone.
