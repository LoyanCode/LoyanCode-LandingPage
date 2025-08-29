<div align="center">
  
  # 🚀 LoyanCode - Landing Page
  
  **Landing Page Profesional y Dinámica para LoyanCode**
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  
</div>

---

## 📋 Descripción del Proyecto

Esta es la landing page oficial de **LoyanCode**, una empresa de desarrollo tecnológico especializada en soluciones digitales innovadoras. La página web está diseñada para ser moderna, interactiva y completamente responsive, ofreciendo una experiencia de usuario excepcional tanto en dispositivos móviles como de escritorio.

### ✨ Características Principales

- 🌐 **Completamente Responsive** - Optimizada para todos los dispositivos
- 🌍 **Multiidioma** - Soporte para Español e Inglés con cambio dinámico
- 🎨 **Modo Oscuro/Claro** - Alternancia de temas con persistencia local
- ⚡ **Animaciones Fluidas** - Efectos visuales profesionales y modernos
- 🎯 **Navegación Intuitiva** - Menús adaptativos para desktop y móvil
- 📱 **Mobile-First** - Diseño optimizado para dispositivos móviles
- 🔧 **Modular** - Arquitectura de componentes reutilizables
- 🚀 **Alto Rendimiento** - Optimizada para velocidad de carga

---

## 🛠️ Stack Tecnológico

### Core
- **Next.js 14** - Framework de React con App Router
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario

### Características Adicionales
- **React Context** - Gestión de estado global (tema e idioma)
- **CSS Modules** - Estilos modulares y encapsulados
- **Responsive Design** - Diseño adaptativo con Tailwind
- **Custom Hooks** - Lógica reutilizable personalizada
- **Component Architecture** - Arquitectura modular escalable

---

## 📁 Estructura del Proyecto

```
loyancode-landing/
├── 📁 app/                          # App Router de Next.js
│   ├── 📄 layout.tsx               # Layout principal
│   ├── 📄 page.tsx                 # Página principal
│   └── 📄 globals.css              # Estilos globales
├── 📁 components/                   # Componentes reutilizables
│   ├── 📁 navigation/              # Componentes de navegación
│   │   ├── 📄 Navbar.tsx           # Barra de navegación desktop
│   │   ├── 📄 MobileNavbar.tsx     # Navegación móvil
│   │   └── 📄 SocialSidebar.tsx    # Sidebar de redes sociales
│   ├── 📁 sections/                # Secciones de la landing
│   │   ├── 📄 Hero.tsx             # Sección principal
│   │   ├── 📄 Services.tsx         # Servicios
│   │   ├── 📄 Projects.tsx         # Proyectos
│   │   ├── 📄 Approach.tsx         # Metodología
│   │   ├── 📄 WhyChooseUs.tsx      # Por qué elegirnos
│   │   └── 📄 Contact.tsx          # Contacto
│   └── 📁 ui/                      # Componentes UI base
│       ├── 📄 Button.tsx           # Botón personalizado
│       ├── 📄 Card.tsx             # Tarjeta base
│       ├── 📄 Modal.tsx            # Modal reutilizable
│       └── 📄 ParticlesBackground.tsx # Fondo animado
├── 📁 context/                     # Contextos de React
│   ├── 📄 LanguageContext.tsx      # Gestión de idiomas
│   └── 📄 ThemeContext.tsx         # Gestión de temas
├── 📁 translations/                # Archivos de traducción
│   └── 📄 index.ts                 # Traducciones ES/EN
├── 📁 lib/                         # Utilidades
│   └── 📄 utils.ts                 # Funciones auxiliares
├── 📄 tailwind.config.ts           # Configuración de Tailwind
├── 📄 next.config.mjs              # Configuración de Next.js
├── 📄 package.json                 # Dependencias del proyecto
└── 📄 README.md                    # Documentación
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado en tu sistema:

- **Node.js** (versión 18.0 o superior)
- **npm**, **yarn** o **pnpm** (gestor de paquetes)
- **Git** (para clonar el repositorio)

### Pasos de Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/LoyanCode/LoyanCode-LandingPage.git
   cd landing-page
   ```

2. **Instala las dependencias:**
   ```bash
   # Con npm
   npm install
   
   # Con yarn
   yarn install
   
   # Con pnpm
   pnpm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   # Con npm
   npm run dev
   
   # Con yarn
   yarn dev
   
   # Con pnpm
   pnpm dev
   ```

4. **Abre tu navegador:**
   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

---

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **Desarrollo** | `npm run dev` | Inicia el servidor de desarrollo |
| **Construcción** | `npm run build` | Construye la aplicación para producción |
| **Inicio** | `npm start` | Inicia el servidor de producción |
| **Linting** | `npm run lint` | Ejecuta ESLint para revisar el código |
| **Tipo Check** | `npm run type-check` | Verifica los tipos de TypeScript |

---

## 🎨 Personalización

### Cambiar Colores del Tema

Los colores principales se definen en `tailwind.config.ts`:

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      }
    }
  }
}
```

### Modificar Traducciones

Las traducciones se encuentran en `translations/index.ts`:

```typescript
// translations/index.ts
export const translations = {
  es: {
    hero: {
      title: "Transformamos Ideas en Soluciones Digitales",
      subtitle: "Ingenieros especializados en desarrollo web y móvil"
    }
  },
  en: {
    hero: {
      title: "We Transform Ideas into Digital Solutions",
      subtitle: "Engineers specialized in web and mobile development"
    }
  }
}
```

### Añadir Nuevas Secciones

1. Crea un nuevo componente en `components/sections/`
2. Importa y úsalo en `app/page.tsx`
3. Añade las traducciones correspondientes
4. Actualiza la navegación si es necesario

---

## 📱 Características Responsive

### Breakpoints de Tailwind CSS

- **sm:** 640px y superior (tablets pequeñas)
- **md:** 768px y superior (tablets)
- **lg:** 1024px y superior (laptops)
- **xl:** 1280px y superior (desktops)
- **2xl:** 1536px y superior (pantallas grandes)

### Navegación Adaptativa

- **Desktop:** Menú horizontal fijo + sidebar de redes sociales
- **Mobile:** Navbar con menús deslizantes (drawers)
- **Tablet:** Híbrido que se adapta según el espacio disponible

---

## 🌍 Internacionalización (i18n)

### Idiomas Soportados

- 🇪🇸 **Español** (idioma por defecto)
- 🇺🇸 **Inglés**

### Cómo Añadir un Nuevo Idioma

1. Extiende el tipo `Language` en `context/LanguageContext.tsx`
2. Añade las traducciones en `translations/index.ts`
3. Actualiza el componente de selector de idioma
4. Añade la bandera correspondiente

---

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente con cada push

### Otros Proveedores

El proyecto es compatible con cualquier proveedor que soporte Next.js:

- **Netlify**
- **AWS Amplify**
- **Railway**
- **Render**

---

## 🤝 Contribución

### Flujo de Trabajo

1. Fork el repositorio
2. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -m 'Añadir nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

### Estándares de Código

- Usa **TypeScript** para todo el código
- Sigue las convenciones de **ESLint**
- Mantén los componentes **modulares** y **reutilizables**
- Documenta funciones complejas
- Escribe nombres descriptivos para variables y funciones

---

## 📄 Licencia

Este proyecto es propiedad de **LoyanCode** y está destinado exclusivamente para uso interno de la empresa.

---

<div align="center">
  <sub>Desarrollado con ❤️ por el equipo de LoyanCode</sub>
  <br>
  <sub>© 2024 LoyanCode. Todos los derechos reservados.</sub>
</div>


