# 🏛️ Dolmen Piedra

**Sitio web estático para Dolmen Piedra - Especialistas en diseño y esculturas en piedra natural**

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)
![React](https://img.shields.io/badge/React-18-blue)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6)

## 📋 Descripción

Sitio web elegante y moderno para Dolmen Piedra, una empresa especializada en trabajos artesanales con piedra natural. El sitio presenta sus servicios, proyectos y testimonios de clientes en un diseño responsive y optimizado.

### ✨ Características principales

- 🎨 **Diseño moderno y elegante** con paleta de colores naturales
- 📱 **Completamente responsive** - se adapta a móviles, tablets y desktop
- ⚡ **Sitio estático** - carga ultra rápida y optimizado para SEO
- 🔄 **Scroll reveal animations** - elementos aparecen suavemente al hacer scroll
- 🍔 **Menú hamburguesa funcional** para dispositivos móviles
- ↗️ **Botón "Back to Top"** para navegación fácil
- 🎯 **One-page design** - toda la información en una sola página

## 🗂️ Secciones incluidas

1. **🏠 Inicio** - Hero section con imagen de fondo impactante
2. **👥 Nosotros** - Información sobre la empresa y experiencia
3. **🛠️ Proyectos** - Galería de trabajos realizados
4. **💬 Testimonios** - Comentarios de clientes satisfechos
5. **📞 Contacto** - Información de contacto e Instagram

## 🚀 Proyectos destacados

- **Paredes de Piedra** - Revestimientos únicos
- **Suelos Elegantes** - Pavimentos naturales
- **Baños de Lujo** - Espacios de relajación
- **Mesas Artesanales** - Mobiliario personalizado
- **Trabajos a Medida** - Proyectos personalizados

## 🛠️ Tecnologías utilizadas

- **[Next.js 15.3.3](https://nextjs.org/)** - Framework de React
- **[React 18](https://reactjs.org/)** - Biblioteca de JavaScript
- **CSS3 Vanilla** - Estilos puros sin frameworks
- **Google Fonts** - Tipografías (Inter + Playfair Display)

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd dolmenPiedra
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en [http://localhost:3000](http://localhost:3000)

## 🔧 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera la versión de producción
- `npm run start` - Inicia el servidor de producción
- `npm run export` - Genera archivos estáticos listos para deployment

## 📁 Estructura del proyecto

```
dolmenPiedra/
├── pages/
│   ├── _app.js          # Configuración global de la app
│   └── index.js         # Página principal
├── styles/
│   └── globals.css      # Estilos globales
├── public/
│   └── images/          # Imágenes del sitio
│       ├── home/        # Imagen principal
│       ├── logo/        # Logo de la empresa
│       ├── nosotros/    # Imagen sección nosotros
│       └── proyectos/   # Galería de proyectos
├── next.config.js       # Configuración de Next.js
├── package.json         # Dependencias y scripts
└── README.md           # Este archivo
```

## 🎨 Paleta de colores

- **Stone 50**: `#fafaf9` - Fondo principal
- **Stone 100**: `#f5f5f4` - Fondos secundarios
- **Stone 800**: `#292524` - Textos principales
- **Stone 900**: `#1c1917` - Elementos oscuros

## 📱 Características responsive

### Breakpoints principales:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptaciones:
- Menú hamburguesa en móviles
- Grid de proyectos adaptativo
- Tipografías escalables con `clamp()`
- Botón back-to-top ajustado por dispositivo

## 🌐 Deployment

El sitio está configurado para generar archivos estáticos:

```bash
npm run build
```

Esto genera una carpeta `out/` con todos los archivos listos para subir a cualquier servidor web o CDN.

### Plataformas recomendadas:
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 👨‍💻 Desarrollador

Creado por **[Raul GT](https://www.linkedin.com/in/raul-garcia-torrejon/)**

## 📄 Licencia

Este proyecto es de uso privado para Dolmen Piedra.

---

⭐ **¿Te gusta el proyecto? ¡No olvides darle una estrella!** 