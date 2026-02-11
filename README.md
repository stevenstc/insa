# Instituto INSA - Sitio Web

Sitio web moderno y dinámico para el Instituto INSA, diseñado como una single page application con embudo de venta hacia WhatsApp.

## Características

- **Diseño moderno y responsivo**: Funciona perfectamente en dispositivos móviles, tablets y escritorio
- **Animaciones dinámicas**: Transiciones suaves y efectos visuales atractivos
- **Single Page Application**: Navegación fluida entre secciones
- **Embudo de ventas**: Diseñado para convertir visitantes en estudiantes mediante WhatsApp y email
- **Botón flotante de WhatsApp**: Siempre visible para contacto rápido
- **Sin base de datos**: Sitio estático, fácil de desplegar y mantener

## Secciones

1. **Hero**: Presentación principal con llamado a la acción
2. **Nosotros**: Características y beneficios del instituto
3. **Grados**: Información detallada de cada grado (6° a 11°)
4. **Beneficios**: Ventajas de estudiar en INSA
5. **Testimonios**: Historias de éxito de estudiantes
6. **Contacto**: Formulario y botones de contacto directo
7. **Footer**: Información adicional y redes sociales

## Personalización

### Cambiar el número de WhatsApp

Edita estos archivos y reemplaza `573001234567` con tu número (incluye código de país):

- `src/components/WhatsAppButton.tsx` (línea 4)
- `src/components/Contact.tsx` (línea 4)

### Cambiar el email de contacto

Edita estos archivos y reemplaza `contacto@institutoinsa.edu.co`:

- `src/components/Contact.tsx` (línea 9)
- `src/components/Footer.tsx` (línea 33)

### Modificar información de contacto

En `src/components/Contact.tsx`:
- Teléfono (línea 27 y 36)
- Email (línea 45)
- Dirección (línea 54)
- Horarios (líneas 70-72)

### Actualizar redes sociales

En `src/components/Footer.tsx`:
- Agrega los enlaces reales de Facebook, Instagram, YouTube (líneas 36-50)

### Cambiar imágenes de testimonios

En `src/components/Testimonials.tsx`:
- Las imágenes actuales son de Pexels (stock photos gratuitas)
- Reemplaza las URLs con fotos reales de estudiantes graduados

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la build
npm run preview
```

## Expansión Futura

El sitio está estructurado para facilitar expansiones:

### Agregar Base de Datos

Si deseas agregar funcionalidad de backend:

1. **Formulario de registro**: Capturar datos de estudiantes interesados
2. **Sistema de gestión**: Administrar inscripciones y estudiantes
3. **Blog**: Agregar contenido educativo
4. **Portal de estudiantes**: Área privada con materiales

### Agregar Analytics

Para rastrear conversiones:

1. Google Analytics
2. Facebook Pixel
3. Hotjar para mapas de calor

### Integrar CRM

Conectar con herramientas como:
- HubSpot
- Salesforce
- Zoho CRM

## Estructura de Archivos

```
src/
├── components/
│   ├── Navigation.tsx      # Barra de navegación
│   ├── Hero.tsx           # Sección principal
│   ├── About.tsx          # Sobre el instituto
│   ├── Grades.tsx         # Grados ofrecidos
│   ├── Benefits.tsx       # Beneficios
│   ├── Testimonials.tsx   # Testimonios
│   ├── Contact.tsx        # Información de contacto
│   ├── Footer.tsx         # Pie de página
│   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
├── App.tsx                # Componente principal
├── index.css             # Estilos y animaciones
└── main.tsx              # Punto de entrada
```

## Tecnologías

- **React 18**: Framework de UI
- **TypeScript**: Tipado estático
- **Vite**: Build tool y dev server
- **Tailwind CSS**: Framework de estilos
- **Lucide React**: Iconos modernos

## Despliegue

Este sitio se puede desplegar fácilmente en:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop de la carpeta `dist`
- **GitHub Pages**: Configurar GitHub Actions
- **Cualquier hosting estático**: Subir la carpeta `dist`

## Licencia

Proyecto privado para Instituto INSA.
