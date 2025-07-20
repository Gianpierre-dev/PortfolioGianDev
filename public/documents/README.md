# 📄 Documentos del Portfolio

## CV/Resume

Para que la descarga de CV funcione correctamente:

### 1. **Agregar tu CV en PDF**
- Coloca tu archivo CV en: `/public/documents/CV_Gianpierre_Terrazas.pdf`
- Asegúrate de que el nombre coincida exactamente

### 2. **Formatos recomendados**
- **Formato:** PDF (obligatorio)
- **Tamaño:** Máximo 2MB
- **Páginas:** 1-2 páginas recomendado
- **Nombre:** `CV_Gianpierre_Terrazas.pdf`

### 3. **¿Dónde aparece el botón?**
- ✅ **Hero Section** - Botón principal
- ✅ **About Section** - Después de las estadísticas
- 🔄 **Future:** Navbar (opcional)

### 4. **Personalización**
Si quieres cambiar el nombre del archivo:
1. Actualiza en `/src/lib/utils.ts` la función `downloadCV()`
2. Cambia la ruta: `/documents/TU_NUEVO_NOMBRE.pdf`

### 5. **Verificar funcionamiento**
1. Coloca tu CV en la carpeta
2. Ejecuta `npm run dev`
3. Haz clic en "Descargar CV"
4. Debe descargar automáticamente

---
**Nota:** Los archivos en `/public/documents/` son públicamente accesibles. 