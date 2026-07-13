# Portfolio de Gianpierre Terrazas

Portfolio personal de Gianpierre Terrazas — desarrollador Full Stack especializado en sistemas de gestión empresarial (planillas, RRHH, automatización SUNAT) con TypeScript de punta a punta.

## Tecnologías

- **Framework**: Next.js 15 (App Router) + React 19
- **Estilos**: Tailwind CSS 4
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form
- **Iconos**: Lucide React + react-icons
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

- `src/data/personal.ts` — datos personales, skills y experiencia (única fuente de contenido)
- `src/components/sections/Projects.tsx` — proyectos curados; los privados se muestran como case studies sin código
- `src/lib/github.ts` — métricas de repos públicos vía API de GitHub (caché de 1 hora)
- `src/lib/email.ts` — contacto vía WhatsApp; alternativa por email en `src/app/api/send-email/route.ts`

## Variables de entorno

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio   # URL pública del sitio
EMAILJS_SERVICE_ID=...                    # Opcional (envío por email)
EMAILJS_TEMPLATE_ID=...
EMAILJS_PUBLIC_KEY=...
```

## Deploy en Railway

El proyecto se despliega en Railway con build estándar de Next.js (`output: standalone`):

```bash
railway up
```

Configura `NEXT_PUBLIC_SITE_URL` con el dominio asignado por Railway.
