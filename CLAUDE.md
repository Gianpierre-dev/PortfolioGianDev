# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Portfolio personal de Gianpierre Terrazas — sitio one-page construido con Next.js 15 (App Router), React 19, TypeScript y Tailwind CSS 4. Deploy en Vercel.

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

Es una single page: `src/app/page.tsx` compone todas las secciones en orden (Navbar → Hero → About → Projects → Skills → Contact → footer inline). No hay rutas adicionales de UI.

- `src/components/sections/` — secciones de la página (Hero, About, Projects, Skills, Contact). Son client components con animaciones de Framer Motion.
- `src/components/ui/` — primitivas reutilizables (Button, Typography, RevealSection, ParallaxBackground, RippleButton, Grid).
- `src/data/personal.ts` — única fuente de datos personales (nombre, título, email, username de GitHub, skills). Cambios de contenido van aquí, no en los componentes.
- `src/lib/github.ts` — integración con la API pública de GitHub (username hardcodeado `Gianpierre-dev`). Usa `next: { revalidate: 3600 }` para cachear; la sección Projects se alimenta de aquí automáticamente.
- `src/lib/email.ts` — el formulario de contacto envía por WhatsApp (`wa.me` con mensaje pre-armado) como método principal; existe también `src/app/api/send-email/route.ts` con nodemailer/EmailJS como alternativa.
- `src/types/index.ts` — tipos compartidos (Project, GitHubUser, ContactForm, etc.).
- `src/app/sitemap.ts` y `src/app/robots.ts` — SEO generado por Next.js; la URL base viene de `NEXT_PUBLIC_SITE_URL`.

## Convenciones

- Tema claro/oscuro con `next-themes` (`ThemeProvider` en `src/components/`); todo estilo nuevo debe incluir variantes `dark:`.
- Iconos: Lucide React y react-icons.
- Formularios con react-hook-form (ver Contact).
- `next.config.ts` define headers de seguridad (X-Frame-Options, nosniff, Referrer-Policy) y dominios permitidos de imágenes (GitHub avatars, *.github.io, *.vercel.app) — actualizar ahí si se agregan imágenes remotas nuevas.

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio (default `http://localhost:3000`).
- `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY` — opcionales, para el envío de email alternativo.
