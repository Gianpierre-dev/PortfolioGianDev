# Portfolio de Gianpierre Terrazas

Portfolio personal de Gianpierre Terrazas — desarrollador Full Stack especializado en sistemas de gestión empresarial (planillas, RRHH, automatización SUNAT) con TypeScript de punta a punta.

## Tecnologías

- **Framework**: Next.js 15 (App Router) + React 19
- **Estilos**: Tailwind CSS 4
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form
- **Iconos**: Lucide React
- **Tipado**: TypeScript
- **Deploy**: Railway

## Desarrollo

```bash
npm install     # Instalar dependencias
npm run dev     # Desarrollo (http://localhost:3000)
npm run build   # Build de producción (output: standalone)
npm start       # Servir build de producción
npm run lint    # ESLint
```

## Estructura

- `src/data/personal.ts` — datos personales, skills y experiencia
- `src/data/proyectos.ts` — datos técnicos de los proyectos; sus textos viven en `src/i18n/` (ES/EN)
- `src/lib/github.ts` — métricas de repos públicos vía API de GitHub, en el servidor (caché de 1 hora)
- `src/lib/email.ts` y `src/app/api/contacto/route.ts` — enlaces de WhatsApp y envío del formulario de contacto por correo (Resend)
- `cv/` — fuente HTML de los CV en español e inglés; los PDF se publican en `public/documents/`

## Variables de entorno

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio   # URL pública del sitio (se inyecta en build)
GITHUB_TOKEN=...                          # Opcional: sube el límite de la API de GitHub
RESEND_API_KEY=...                        # Envío del formulario de contacto por correo
CONTACTO_EMAIL_DESTINO=...                # Opcional: por defecto el email de personal.ts
```

## Deploy en Railway

El servicio de Railway está conectado a la rama `main` de este repositorio con auto-deploy. Railway detecta Next.js y usa `npm run build` y `npm start` (`output: standalone`); no hace falta configurar comandos propios.

Configura `NEXT_PUBLIC_SITE_URL` con el dominio asignado por Railway.
