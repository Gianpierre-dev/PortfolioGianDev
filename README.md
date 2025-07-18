# 🚀 Portfolio de Gianpierre Terrazas

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/PortfolioGianDev)

## 🌟 Características

- ✨ **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 🌙 **Modo Oscuro**: Soporte completo para tema oscuro/claro
- 📱 **Totalmente Responsive**: Adaptado para todos los dispositivos
- 🎯 **Conectado a GitHub**: Proyectos sincronizados automáticamente
- 📧 **Formulario Funcional**: Envío de emails con validación
- 🎨 **Animaciones**: Transiciones suaves con Framer Motion
- ⚡ **Optimizado**: Carga rápida y SEO optimizado

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 14
- **Estilo**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form
- **Iconos**: Lucide React
- **Tipado**: TypeScript
- **Deployment**: Vercel

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/PortfolioGianDev.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🚀 Deployment en Vercel

1. **Fork este repositorio**
2. **Conecta tu cuenta de GitHub con Vercel**
3. **Importa el proyecto en Vercel**
4. **Configura las variables de entorno**
5. **Deploy automático**

### Variables de Entorno (Opcional)

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
EMAILJS_SERVICE_ID=tu_service_id
EMAILJS_TEMPLATE_ID=tu_template_id
EMAILJS_PUBLIC_KEY=tu_public_key
```

## 📋 Secciones

### 🏠 Hero
- Presentación personal
- Efecto de typing animado
- Enlaces sociales
- Call-to-action

### 👨‍💻 Sobre mí
- Biografía profesional
- Estadísticas de experiencia
- Timeline de carrera
- Habilidades destacadas

### 📊 Proyectos
- Conexión automática con GitHub API
- Filtros por tecnología
- Cards interactivas
- Enlaces a código y demos

### 💪 Habilidades
- Progress bars animados
- Categorías organizadas
- Estadísticas por área
- Filtros interactivos

### 📧 Contacto
- Formulario funcional
- Validación en tiempo real
- Información de contacto
- Enlaces sociales

## 🔧 Personalización

### Datos Personales
Edita el archivo `src/data/personal.ts`:

```typescript
export const personalInfo = {
  name: "Tu Nombre",
  title: "Tu Título",
  email: "tu@email.com",
  // ... más configuraciones
};
```

### Estilos
Personaliza colores y estilos en:
- `tailwind.config.js`
- `src/app/globals.css`
- Componentes individuales

### GitHub Integration
El portfolio se conecta automáticamente a tu GitHub usando:
- `src/lib/github.ts`
- Username configurado en `src/data/personal.ts`

## 📈 SEO Optimizado

- ✅ Meta tags completos
- ✅ Open Graph configurado
- ✅ Sitemap.xml automático
- ✅ Robots.txt optimizado
- ✅ Structured data
- ✅ Carga rápida (<3s)

## 🔒 Seguridad

- Headers de seguridad configurados
- Validación de formularios
- Protección XSS
- CSP implementado

## 📱 Responsive Design

- 📱 Mobile First
- 💻 Desktop optimizado
- 📺 Pantallas grandes
- 🎯 Touch-friendly

## 🎨 Animaciones

- Scroll-triggered animations
- Hover effects
- Loading states
- Smooth transitions

## 🌐 Dominio Personalizado

Para usar un dominio personalizado:

1. Compra un dominio (opcional)
2. Configura DNS en Vercel
3. Actualiza `NEXT_PUBLIC_SITE_URL`

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Lucide React](https://lucide.dev/) - Iconos
- [Vercel](https://vercel.com/) - Deployment

---

**Hecho con ❤️ por Gianpierre Terrazas**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Gianpierre-dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/tu-perfil)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://tu-portfolio.vercel.app)
