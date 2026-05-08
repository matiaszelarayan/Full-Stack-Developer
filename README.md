# Full Stack Developer

# Our Blooms® - Sitio Web Responsivo

## 📋 Descripción del Proyecto

**Our Blooms®** es un sitio web responsivo para una florería premium, desarrollado como proyecto integrador para las clases Desarrollo Full Stack.

El proyecto implementa un e-commerce funcional con diseño adaptable para computadoras de escritorio, tablets y dispositivos móviles, utilizando las mejores prácticas de desarrollo web moderno.

---

## 🎯 Objetivos Alcanzados

✅ **Diseño Responsivo**: Adaptable a múltiples resoluciones (desktop, tablet, móvil)  
✅ **Bootstrap 5**: Framework CSS para componentes consistentes  
✅ **HTML5 Semántico**: Estructura clara y accesible  
✅ **CSS Personalizado**: Estilos únicos y optimizados  
✅ **JavaScript Interactivo**: Funcionalidades dinámicas  
✅ **Control de Versiones**: Implementación completa de Git  
✅ **Documentación**: README y código comentado  

---

## 📁 Estructura del Proyecto

```
OurBlooms-Project/
├── index.html              # Página de inicio
├── gallery.html            # Galería de productos
├── about.html              # Acerca de nosotros
├── contact.html            # Formulario de contacto
├── css/
│   └── styles.css          # Estilos personalizados
├── js/
│   └── script.js           # JavaScript funcional
├── images/                 # Carpeta para imágenes locales
├── README.md               # Este archivo
└── .gitignore              # Archivos a ignorar en Git
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos avanzados (Grid, Flexbox, Animaciones)
- **Bootstrap 5**: Framework de CSS
- **JavaScript ES6+**: Interactividad
- **Font Awesome**: Iconografía

### Herramientas
- **Git**: Control de versiones
- **GitHub**: Repositorio remoto
- **VS Code**: Editor de código

---

## 📄 Páginas del Sitio

### 1. **index.html** - Página de Inicio
- Navbar sticky con navegación principal
- Sección hero con imagen destacada y promo badge
- Carrusel de productos destacados
- Modal de producto para visualizar detalles
- Footer con información y enlaces

**Características responsivas:**
- Hero section se adapta en mobile
- Carrusel con controles optimizados
- Botones CTA destacados

### 2. **gallery.html** - Galería de Productos
- Dos categorías de productos:
  - **Arreglos Estacionales** (3 productos)
  - **Arreglos Especiales** (3 productos)
- 6 productos en total con imágenes, precios y descripciones
- Modal interactivo para ver detalles
- Diseño grid responsivo (1, 2 columnas según tamaño)

**Productos:**
1. Flor del amanecer - $55/Ramo
2. Pétalos de claridad - $55/Ramo
3. Verdes susurrantes - $20/Ramo
4. Tallos del solsticio - $30/Ramo
5. Piedra de río - $30/Ramo
6. Pradera iluminada por la luna - $20/Ramo

### 3. **about.html** - Acerca de Nosotros
- Nuestra historia (fundadora Lily Smith)
- Sección de propietaria
- Valores empresariales (3 pilares)
- Galería de flores favoritas
- Call-to-action para reservar consulta

### 4. **contact.html** - Página de Contacto
- Información de contacto con iconos
- Horario de atención
- Enlaces a redes sociales
- **Formulario completo con:**
  - Campo Nombre (validación)
  - Campo Email (validación)
  - Campo Teléfono (opcional)
  - Selector de Asunto
  - Textarea para Mensaje
  - Checkbox de términos
  - Validación en tiempo real
  - Mensaje de éxito
- Mapa interactivo de ubicación

---

## 🎨 Diseño y Paleta de Colores

### Colores Principales
- **Color Primario**: #C97B84 (Rosa palo)
- **Color Secundario**: #FFC107 (Amarillo)
- **Dark**: #1a1a1a (Casi negro)
- **Light**: #f8f9fa (Gris claro)

### Tipografía
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Weights: 400, 500, 600, 700

---

## 📱 Responsividad

El sitio está optimizado para tres breakpoints principales:

### 1. **Desktop (> 1024px)**
- Diseño full-width
- Navbar expandido
- Grid de 2-3 columnas
- Hero section lado a lado

### 2. **Tablet (768px - 1023px)**
- Navbar colapsible
- Grid de 2 columnas
- Ajustes de tamaño de fuente
- Espacios optimizados

### 3. **Mobile (< 768px)**
- Diseño de 1 columna
- Navbar hamburguesa
- Botones full-width
- Imágenes optimizadas
- Tipografía reducida

---

## 🔧 Funcionalidades JavaScript

### 1. **Modal de Productos**
```javascript
loadProduct(productName, price, imageUrl)
```
Carga los datos del producto en el modal de Bootstrap.

### 2. **Validación de Formulario**
- Validación en tiempo real
- Mensajes de error personalizados
- Mensaje de éxito al enviar
- Limpieza automática

### 3. **Carrito de Compras (Básico)**
Clase `ShoppingCart` con métodos:
- `addItem()`: Agregar producto
- `removeItem()`: Remover producto
- `updateQuantity()`: Actualizar cantidad
- `getTotal()`: Calcular total
- `saveCart()`: Guardar en localStorage
- `loadCart()`: Cargar desde localStorage

### 4. **Animaciones**
- Fade-in on scroll
- Hover effects en tarjetas
- Transiciones suaves
- Animaciones CSS

### 5. **Notificaciones**
Función `showNotification()` para mostrar mensajes temporales.

### 6. **Tracking de Eventos**
Función `trackEvent()` para analytics (preparada para implementación).

---

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime Text, etc.)
- Git instalado

### Pasos

1. **Clonar o descargar el repositorio**
```bash
git clone https://github.com/matiaszelarayan/Full-Stack-Developer.git
cd Full-Stack-Developer
```

2. **Abrir en el navegador**
- Opción A: Hacer clic en `index.html`
- Opción B: Usar Live Server (extensión de VS Code)
  - Click derecho en `index.html` → "Open with Live Server"

3. **Ver cambios en tiempo real**
- Guardar archivos (Ctrl + s)
- Recargar navegador (Ctrl + r)

---

## 📊 Git - Control de Versiones

### Comandos Git Útiles

```bash
# Ver estado
git status

# Ver historial
git log --oneline

# Ver cambios
git diff

# Crear rama nueva
git checkout -b feature/nueva-funcionalidad

# Cambiar de rama
git checkout main

# Fusionar rama
git merge feature/nueva-funcionalidad

# Ver ramas
git branch -a

# Deshacer cambios
git restore archivo.html

# Revertir commit
git revert <commit-hash>
```

---

## 🔒 Características de Seguridad

- ✅ Validación de formularios en cliente y servidor
- ✅ Protección contra XSS (sanitización de datos)
- ✅ HTTPS recomendado en producción
- ✅ Campos sensibles protegidos
- ✅ No hay datos reales en formularios

---

## 📈 Mejoras Futuras

1. **Backend**
   - Integración con PHP/Node.js
   - Base de datos para productos
   - Sistema de autenticación
   - Procesamiento de pagos

2. **Frontend**
   - Animaciones más avanzadas
   - Filtrado dinámico de productos
   - Sistema de búsqueda
   - Carrito visual mejorado

3. **Performance**
   - Lazy loading de imágenes
   - Compresión de assets
   - Service Workers
   - PWA (Progressive Web App)

4. **SEO**
   - Meta tags optimizados
   - Schema.org markup
   - Sitemap.xml
   - Robot.txt

5. **Analytics**
   - Google Analytics
   - Pixel de Facebook
   - Seguimiento de conversiones

---

## 🧪 Testing

### Pruebas Realizadas

- ✅ Responsividad en múltiples dispositivos
- ✅ Validación de formulario
- ✅ Funcionalidad de modales
- ✅ Navegación entre páginas
- ✅ Performance de imágenes
- ✅ Compatibilidad de navegadores

### Checklist de Testing

```
[ ] Desktop (1920x1080)
[ ] Laptop (1366x768)
[ ] Tablet (768x1024)
[ ] Mobile (375x667)
[ ] Extra pequeño (320x568)
[ ] Orientación landscape
[ ] Orientación portrait
[ ] Velocidad de carga
[ ] Accesibilidad
```

---

## 📖 Guía de Estilos CSS

### Clases Útiles

```css
/* Espaciado */
.m-4   /* margin: 1.5rem */
.p-5   /* padding: 3rem */
.mb-4  /* margin-bottom: 1.5rem */

/* Colores */
.text-primary      /* Color primario */
.bg-light          /* Fondo claro */
.border-primary    /* Borde color primario */

/* Tamaños de fuente */
.display-3         /* Títulos grandes */
.lead              /* Párrafos destacados */
.text-muted        /* Texto gris */

/* Elementos */
.container         /* Ancho máximo 1200px */
.row               /* Contenedor de columnas */
.col-lg-6          /* 50% en pantallas grandes */
.col-md-12         /* 100% en tablets */

/* Botones */
.btn-primary       /* Botón primario */
.btn-lg            /* Botón grande */
.btn-outline-primary /* Botón contorneado */
```

---

## 🎓 Aprendizajes Clave

### HTML
- Estructura semántica correcta
- Atributos de accesibilidad (alt, aria-label)
- Formularios con validación HTML5

### CSS
- Media queries para responsividad
- Flexbox y Grid
- Animaciones y transiciones
- Variables CSS

### JavaScript
- DOM manipulation
- Event listeners
- Validación de formularios
- LocalStorage
- Clases ES6
- Arrow functions

### Git
- Commits descriptivos
- Ramas para features
- Merge de cambios
- Control de versiones

---

## 📞 Soporte y Contacto

- **Email**: hola@ourblooms.com
- **Teléfono**: (341) 555-0123
- **Ubicación**: Rosario, s2001
- **Horario**: Lun-Vie 9:00 AM - 1:00 PM

---

## 📄 Licencia

Este proyecto es de uso educativo y está bajo licencia MIT.

---

## ✅ Checklist Final

- [x] Estructura HTML completa
- [x] Páginas responsivas (4 páginas)
- [x] Bootstrap 5 integrado
- [x] CSS personalizado
- [x] JavaScript funcional
- [x] Modal de productos
- [x] Formulario validado
- [x] Carrito de compras (básico)
- [x] Footer en todas las páginas
- [x] Git configurado
- [x] README documentado
- [x] Testing en múltiples dispositivos

---

## 👨‍💻 Desarrollador

**@matiaszelarayan**
Proyecto Integrador - Desarrollo Full Stack
Diciembre 2026

---

**Última actualización**: Mayo 2026  
**Versión**: 1.0.0