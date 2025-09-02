# 🚀 Eyes on Mars

<div align="center">

![Mars Exploration](https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/640px-OSIRIS_Mars_true_color.jpg)

[![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![NASA API](https://img.shields.io/badge/NASA-API-FF6B35?style=for-the-badge&logo=nasa&logoColor=white)](https://api.nasa.gov/)
[![SCSS](https://img.shields.io/badge/SCSS-Styling-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

**🌌 Una ventana interactiva al planeta rojo a través de los ojos de los rovers de la NASA**

[🚀 Demo en Vivo](#) • [📖 Documentación](#documentación) • [🛠️ Instalación](#instalación) • [🤝 Contribuir](#contribución)

</div>

---

## 🌟 Descripción del Proyecto

**Eyes on Mars** es una aplicación web React innovadora que te permite explorar la superficie marciana en tiempo real a través de las fotografías capturadas por los rovers de la NASA. Esta herramienta conecta directamente con la API oficial de NASA Mars Rover Photos, ofreciendo una experiencia inmersiva para científicos, estudiantes y entusiastas del espacio.

### 🎯 Propósito

- **Democratizar el acceso** a datos científicos de la exploración marciana
- **Facilitar la investigación** y el análisis de imágenes de Marte
- **Inspirar** a las nuevas generaciones en STEM y exploración espacial
- **Proporcionar** una interfaz intuitiva para navegar miles de imágenes marcianas

---

## ✨ Características Principales

### 🛰️ **Multi-Rover Support**
- **Perseverance** (2021-presente) - El rover más avanzado
- **Curiosity** (2012-presente) - Laboratorio científico sobre ruedas  
- **Opportunity** (2004-2018) - Récord de longevidad marciana
- **Spirit** (2004-2010) - Pionero de la exploración moderna

### 📷 **Sistema de Cámaras Avanzado**
Acceso a más de 15 tipos de cámaras especializadas:

| Rover | Cámaras Disponibles | Funcionalidad |
|-------|-------------------|---------------|
| **Perseverance** | NAVCAM, HAZCAM, MCZ, SHERLOC, SKYCAM | Navegación, evitación de obstáculos, zoom |
| **Curiosity** | FHAZ, RHAZ, MAST, MAHLI, MARDI | Análisis geológico, autorretratos |
| **Opportunity/Spirit** | PANCAM, NAVCAM, HAZCAM | Fotografía panorámica, navegación |

### 🎨 **Experiencia de Usuario**
- **🌓 Modo Claro/Oscuro**: Temas adaptativos para exploración espacial
- **📱 Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **⚡ Tiempo Real**: Datos actualizados directamente desde NASA
- **🔍 Filtros Inteligentes**: Búsqueda por fecha, cámara y rover
- **🚫 Manejo de Errores**: Estados de carga y mensajes informativos

---

## 🏗️ Arquitectura Técnica

### 📁 Estructura del Proyecto

```
src/
├── 📱 App.jsx                 # Componente principal con routing
├── 🎨 App.scss               # Estilos globales y variables
├── 📄 pages/
│   ├── 🏠 Home/              # Página de inicio
│   ├── 🤖 Perseverance/      # Rover Perseverance
│   ├── 🔬 Curiosity/         # Rover Curiosity  
│   ├── 🌅 Opportunity/       # Rover Opportunity
│   ├── 🌄 Spirit/            # Rover Spirit
│   └── 📸 OtherPics/         # Otras imágenes especiales
├── 🧩 components/
│   ├── 🧭 Navigation/        # Sistema de navegación
│   ├── 📱 Navbar/           # Barra de navegación
│   └── 🎛️ ThemeButton/       # Control de temas
├── 🎭 context/
│   └── 🌈 ThemeContext.js    # Context API para temas
└── 🖼️ Images/               # Assets e imágenes
```

### 🔧 Stack Tecnológico

**Frontend Core:**
- ⚛️ **React 18** - Biblioteca de UI con hooks modernos
- 🛣️ **React Router 6** - Navegación SPA declarativa
- 🎨 **SCSS** - Preprocesador CSS con variables y mixins
- 🎭 **Context API** - Gestión de estado para temas

**Patrones de Desarrollo:**
- 🪝 **React Hooks** - useState, useEffect, useReducer, useRef
- 🏗️ **Reducer Pattern** - Gestión compleja de estado de cámaras
- 🎯 **Component Composition** - Arquitectura modular
- 📱 **Responsive Design** - Mobile-first approach

**APIs y Servicios:**
- 🚀 **NASA Mars Rover Photos API** - Fuente de datos oficial
- 🌐 **RESTful API** - Comunicación HTTP estándar
- 📡 **Real-time Data** - Sincronización con servidores NASA

---

## 🚀 Instalación y Configuración

### 📋 Prerrequisitos

- 📦 **Node.js** (v14 o superior)
- 📚 **npm** o **yarn**
- 🔑 **NASA API Key** (opcional, incluye key de desarrollo)

### ⚡ Instalación Rápida

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/AlfonsoCifuentes/eyes-on-mars.git

# 2️⃣ Navegar al directorio
cd eyes-on-mars

# 3️⃣ Instalar dependencias
npm install

# 4️⃣ Iniciar servidor de desarrollo
npm start

# 🎉 ¡Listo! Abre http://localhost:3000
```

### 🔧 Configuración Avanzada

1. **Obtener NASA API Key** (opcional):
   ```bash
   # Visita: https://api.nasa.gov/
   # Registra tu aplicación
   # Copia tu API key
   ```

2. **Configurar variables de entorno**:
   ```bash
   # Crear archivo .env en la raíz
   REACT_APP_NASA_API_KEY=tu_api_key_aqui
   ```

3. **Comandos de desarrollo**:
   ```bash
   npm start          # Servidor de desarrollo
   npm run build      # Build de producción
   npm test           # Ejecutar tests
   npm run eject      # Exponer configuración (¡irreversible!)
   ```

---

## 🎮 Guía de Uso

### 🏠 **Navegación Principal**
1. **Inicio**: Página de bienvenida con información general
2. **Rovers**: Navega entre los diferentes rovers usando el menú
3. **Temas**: Alterna entre modo claro y oscuro con el botón superior

### 📷 **Exploración de Imágenes**
1. **Seleccionar Rover**: Elige entre Perseverance, Curiosity, Opportunity o Spirit
2. **Filtrar por Cámara**: Usa los botones para filtrar por tipo de cámara
3. **Ver Imágenes**: Explora la galería de fotos en tiempo real
4. **Detalles**: Cada imagen muestra fecha terrestre y tipo de cámara

### 🎨 **Personalización**
- **Temas**: Cambio dinámico entre paletas de colores espaciales
- **Responsive**: Adaptación automática a diferentes tamaños de pantalla
- **Loading States**: Indicadores visuales durante la carga de datos

---

## 🧠 Análisis de Código Destacado

### 🔄 Gestión de Estado con Reducer

```jsx
// Reducer para manejo de cámaras del Perseverance
const cameraReducer = (state, action) => {
  switch (action.type) {
    case "NAVCAM_LEFT": 
      return "&camera=navcam_left";
    case "MCZ_RIGHT": 
      return "&camera=mcz_right";
    case "SHERLOC_WATSON": 
      return "&camera=sherloc_watson";
    case "ALLCAMERAS": 
      return initialState;
    default: 
      return state;
  }
}
```

### 🌐 Integración con NASA API

```jsx
// Fetch dinámico de imágenes
useEffect(() => {
  fetch(`https://mars-photos.herokuapp.com/api/v1/rovers/${rover}/latest_photos?api_key=${apiKey}${state}`)
    .then(res => res.json())
    .then(response => {
      setIsLoaded(true);
      setCuriosity(response.latest_photos);
    })
    .catch(error => {
      setIsLoaded(true);
      setError(error);
    });
}, [state]);
```

### 🎭 Context API para Temas

```jsx
// ThemeContext implementation
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
```

---

## 📊 APIs y Endpoints

### 🚀 NASA Mars Rover Photos API

**Base URL**: `https://mars-photos.herokuapp.com/api/v1/`

| Endpoint | Descripción | Parámetros |
|----------|-------------|------------|
| `/rovers/{rover}/latest_photos` | Últimas fotos disponibles | `rover`, `api_key`, `camera` |
| `/rovers/{rover}/photos` | Fotos por sol o fecha | `rover`, `sol`/`earth_date`, `camera` |

**Rovers Disponibles:**
- `perseverance` - Rover Perseverance (2021-presente)
- `curiosity` - Rover Curiosity (2012-presente)  
- `opportunity` - Rover Opportunity (2004-2018)
- `spirit` - Rover Spirit (2004-2010)

**Cámaras por Rover:**

#### 🤖 Perseverance
- `navcam_left/right` - Cámaras de navegación
- `front_hazcam_left_a/right_a` - Cámaras de evitación frontal
- `rear_hazcam_left/right` - Cámaras de evitación trasera
- `mcz_left/right` - Cámaras Mast con zoom
- `sherloc_watson` - Cámara científica SHERLOC

#### 🔬 Curiosity
- `fhaz/rhaz` - Cámaras de evitación frontal/trasera
- `mast` - Cámara Mast principal
- `mahli` - Lente de mano para imágenes marcianas
- `mardi` - Instrumento de descenso

---

## 🎨 Diseño y UX

### 🌌 Paleta de Colores

**Tema Espacial (Modo Oscuro):**
```scss
$primary-blue: #47a3ff;
$deep-space: #004080;
$cosmic-glow: #006ddb;
$star-light: #49eaff;
```

**Tema Marciano (Modo Claro):**
```scss
$mars-orange: rgb(255, 73, 17);
$mars-yellow: #ffb62e;
$mars-rust: rgb(251, 255, 17);
$mars-sand: #ffbf49;
```

### 📱 Responsive Breakpoints

```scss
// Mobile First Design
@media (max-width: 768px) {
  .card { width: 90vw; }
}

@media (min-width: 769px) {
  .card { width: 45vh; }
}

@media (min-width: 1200px) {
  .listContainer { justify-content: space-around; }
}
```

---

## 🔮 Roadmap y Funcionalidades Futuras

### 🎯 Versión 2.0 - "Mission Control"
- [ ] **🗺️ Mapas Interactivos**: Ubicación de rovers en Marte
- [ ] **📈 Análisis de Datos**: Gráficos de actividad por sol
- [ ] **🔍 Búsqueda Avanzada**: Filtros por coordenadas y tipo de terreno
- [ ] **💾 Favoritos**: Sistema de guardado de imágenes

### 🎯 Versión 2.5 - "Scientific Suite"
- [ ] **🧪 Análisis Espectral**: Información científica de las imágenes
- [ ] **🤖 IA Integration**: Detección automática de características geológicas
- [ ] **📊 Dashboard**: Métricas de misión y estadísticas
- [ ] **🔗 API Propia**: Endpoint personalizado con cache

### 🎯 Versión 3.0 - "Community Mars"
- [ ] **👥 Comunidad**: Sistema de usuarios y comentarios
- [ ] **🏆 Gamificación**: Logros por exploración
- [ ] **📚 Educación**: Módulos educativos integrados
- [ ] **🌐 PWA**: Aplicación web progresiva

---

## 🤝 Contribución

### 🚀 Cómo Contribuir

1. **🍴 Fork el proyecto**
   ```bash
   # Hacer fork desde GitHub UI
   git clone https://github.com/tu-usuario/eyes-on-mars.git
   ```

2. **🌿 Crear rama de feature**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. **💻 Desarrollar y testear**
   ```bash
   npm test
   npm run build
   ```

4. **📝 Commit con mensaje descriptivo**
   ```bash
   git commit -m "feat: añadir filtro por coordenadas marcianas"
   ```

5. **🚀 Push y crear Pull Request**
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

### 📋 Guidelines de Contribución

**Código:**
- ✅ Seguir convenciones de React Hooks
- ✅ Usar SCSS con BEM methodology
- ✅ Implementar responsive design
- ✅ Añadir PropTypes o TypeScript
- ✅ Mantener consistencia en naming

**Commits:**
- 🎯 `feat:` - Nueva funcionalidad
- 🐛 `fix:` - Corrección de bugs
- 📚 `docs:` - Actualización de documentación
- 🎨 `style:` - Cambios de estilo/formato
- ♻️ `refactor:` - Refactorización de código

### 🐛 Reportar Issues

Utiliza nuestras plantillas de issues:
- **🐛 Bug Report**: Para reportar errores
- **✨ Feature Request**: Para solicitar nuevas funciones
- **❓ Question**: Para preguntas generales

---

## 📜 Licencia

Este proyecto está bajo la **Licencia MIT** - ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 Alfonso Cifuentes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🔗 Enlaces y Recursos

### 🌐 Links del Proyecto
- **🚀 Repositorio**: [GitHub - eyes-on-mars](https://github.com/AlfonsoCifuentes/eyes-on-mars)
- **📖 Wiki**: [Documentación completa](https://github.com/AlfonsoCifuentes/eyes-on-mars/wiki)
- **🐛 Issues**: [Issue Tracker](https://github.com/AlfonsoCifuentes/eyes-on-mars/issues)
- **💬 Discusiones**: [GitHub Discussions](https://github.com/AlfonsoCifuentes/eyes-on-mars/discussions)

### 🚀 Recursos NASA
- **🌌 NASA Open Data**: [NASA Open Data Portal](https://data.nasa.gov/)
- **📡 Mars Rover API**: [NASA API Portal](https://api.nasa.gov/)
- **🔬 JPL Mars Exploration**: [JPL Mars Program](https://mars.nasa.gov/)
- **📊 Mars Weather**: [Mars Weather Service](https://mars.nasa.gov/insight/weather/)

### 🛠️ Tecnologías Relacionadas
- **⚛️ React**: [React Documentation](https://reactjs.org/docs)
- **🛣️ React Router**: [React Router Docs](https://reactrouter.com/)
- **🎨 SCSS**: [Sass Documentation](https://sass-lang.com/documentation)
- **🌐 NASA APIs**: [NASA APIs Overview](https://api.nasa.gov/)

---

## 🏆 Reconocimientos

### 🙏 Agradecimientos Especiales

- **🚀 NASA/JPL**: Por proporcionar datos abiertos de exploración marciana
- **👨‍🚀 Equipos de Misión**: Perseverance, Curiosity, Opportunity y Spirit teams
- **🌌 Comunidad Open Source**: Por las herramientas y bibliotecas utilizadas
- **🔬 Científicos Planetarios**: Que hacen posible la exploración de Marte

### 🎖️ Inspiración

> *"La exploración es nuestro destino, no nuestra historia"*
> 
> **— Carl Sagan**

> *"Marte está ahí, esperando a ser alcanzado"*
> 
> **— Buzz Aldrin**

---

## 📊 Estadísticas del Proyecto

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/AlfonsoCifuentes/eyes-on-mars?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlfonsoCifuentes/eyes-on-mars?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlfonsoCifuentes/eyes-on-mars?style=social)

![GitHub last commit](https://img.shields.io/github/last-commit/AlfonsoCifuentes/eyes-on-mars)
![GitHub issues](https://img.shields.io/github/issues/AlfonsoCifuentes/eyes-on-mars)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AlfonsoCifuentes/eyes-on-mars)

</div>

---

<div align="center">

**🌌 Desarrollado con ❤️ para la exploración espacial**

[⬆️ Volver al inicio](#-eyes-on-mars)

</div>
