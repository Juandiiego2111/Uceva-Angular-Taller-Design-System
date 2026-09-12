# 🧪 Taller 3: Sistema de Diseño Atómico en Angular
 
Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) 20.3.14.
 
El objetivo del taller es practicar la creación de un sistema de diseño atómico y librerías en Angular, mediante el uso de componentes standalone, aplicando la jerarquía de Atomic Design (átomos, moléculas y organismos) como decisión arquitectónica en la capa de presentación.
 
## 👥 Integrantes
 
| Nombre | Componentes desarrollados |
|---|---|
| David Mora | Átomo `Avatar` + Molécula `UserCard` |
| Juan Pablo Devia | Átomo `Tag` + Molécula `SearchInput` |
| Juan Diego Rodríguez | Organismo `ProfileHeader` (combina `UserCard` y `SearchInput`) |
 
## 🧩 Sistema de diseño
 
El proyecto está compuesto por dos partes:
 
- **`projects/design-system-bootstrap`**: la librería del sistema de diseño (átomos, moléculas, organismos, interfaces y mocks).
- **`src/app`**: la aplicación de prueba (Showcase) que consume la librería y muestra ejemplos funcionales en las rutas `/atoms`, `/molecules` y `/organisms`.
### Componentes de referencia (ejemplo del docente)
 
`Badge`, `Button`, `Icon`, `Container` (átomos), `ButtonGroup`, `NavLink` (moléculas) y `Navbar` (organismo). Sirven como guía de estilo y patrón de implementación, no fueron modificados por el equipo.
 
### Componentes entregados por el equipo
 
- **Átomos**: `Avatar` (foto o inicial de usuario), `Tag` (etiqueta de categoría).
- **Moléculas**: `UserCard` (combina `Avatar` con nombre y rol), `SearchInput` (combina `Icon` con un campo de texto).
- **Organismo**: `ProfileHeader` (combina `UserCard` y `SearchInput` en una sección funcional de perfil con búsqueda).
## 📋 Requisitos Previos
 
Antes de iniciar, asegúrate de tener instaladas las siguientes herramientas:
 
- Node.js
- npm
- Angular CLI
- Git
- Visual Studio Code
Puedes verificar Angular CLI en consola con: `ng version`
 
## ▶️ Iniciar el Proyecto en Modo Desarrollo
 
Sigue estos pasos para ejecutar el proyecto localmente:
 
### 1️⃣ Abrir la consola
 
Ubícate en la raíz del proyecto (donde se encuentra el archivo `package.json`).
 
### 2️⃣ Instalar dependencias
 
```
npm i
```
 
### 3️⃣ Compilar la librería y ejecutar el proyecto
 
El proyecto de prueba (`src/app`) consume la librería `design-system-bootstrap` ya compilada, así que primero hay que generar ese compilado:
 
```
npm run build:dev
```
 
Este comando queda observando cambios (`--watch`), así que déjalo corriendo en una terminal. En otra terminal, ejecuta la app:
 
```
npm run start
```
 
o
 
```
ng serve
```
 
### 4️⃣ Abrir en el navegador
 
Cuando el servidor esté en ejecución, abre un navegador y accede a: `http://localhost:4200/`
 
Desde ahí puedes navegar a `/atoms`, `/molecules` y `/organisms` para ver todos los componentes en funcionamiento.
 
## 🧪 Pruebas Unitarias
 
El proyecto utiliza Jest para la ejecución de pruebas unitarias.
 
### ▶️ Ejecutar pruebas una sola vez
 
```
npm run test
```
 
### 🔁 Ejecutar pruebas en modo watch
 
```
npm run test:watch
```
 
### 📊 Ejecutar coverage de pruebas
 
```
npm run test:coverage
```
 
## 📘 Generar documentación con Compodoc
 
Genera un sitio estático con la documentación del proyecto, a partir de los comentarios JSDoc en el código fuente (componentes, interfaces, tipos y diagramas de dependencias).
 
```
npm run compodoc
```
 
Para verlo servido como sitio web navegable:
 
```
npx compodoc -p tsconfig.doc.json -s
```
 
## ⚙️ Generación de Archivos con Angular CLI
 
Este workspace tiene **dos proyectos Angular**: la app de Showcase y la librería del sistema de diseño. Al generar un componente para la librería, **siempre hay que indicar `--project`**, o Angular CLI lo crea en el lugar equivocado.
 
### 🧩 Generar un componente en la librería (con carpeta propia)
 
```
ng g c presentation/[atoms|molecules|organisms]/[nombre]/[nombre] --project=design-system-bootstrap
```
 
### 📄 Generar un componente sin carpeta (--flat), con sufijo de nivel
 
```
ng g c presentation/[atoms|molecules|organisms]/[nombre]/[nombre].[atom|molecule|organism] --project=design-system-bootstrap --flat
```
 
#### Ejemplo real (átomo Avatar):
 
```
ng g c presentation/atoms/avatar/avatar.atom --project=design-system-bootstrap --flat
```
 
#### Archivos Generados
 
```
projects/design-system-bootstrap/src/lib/presentation/atoms/avatar/
├── avatar.atom.html
├── avatar.atom.css
├── avatar.atom.spec.ts
└── avatar.atom.ts
```
 
## 🎓 Observaciones Importantes
 
- En este taller se utilizan componentes **standalone**.
- Todo componente nuevo debe exportarse desde `projects/design-system-bootstrap/src/public-api.ts`.
- El selector de cada componente sigue el prefijo `dsb-`, por ejemplo `dsb-avatar-atom`, `dsb-user-card-molecule`, `dsb-profile-header-organism`.
- Cada componente debe tener su propio archivo de mocks en `projects/design-system-bootstrap/src/lib/mocks/`.
- Mantener una estructura clara favorece la escalabilidad y mantenibilidad.
- Revisar siempre la cobertura de pruebas unitarias (>80%) y de documentación (100%) antes de dar por terminado un componente.
 
