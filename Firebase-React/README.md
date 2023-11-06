# Links

Vite
https://vitejs.dev

React-Router-Dom
https://reactrouter.com/en/6.17.0

Firebase
https://firebase.google.com

Firebase Documentacion
https://firebase.google.com/docs/web/setup?authuser=0&hl=es

Reac Hook Form
https://react-hook-form.com/get-started

Tailwindcss
https://tailwindcss.com

Extensión Tailwindcss para visual
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

Flowbite
https://flowbite.com

Cheatsheet
https://tailwindcomponents.com/cheatsheet/

Html a jsx
https://transform.tools/html-to-jsx

# 1 Parte

## Crear proyecto

1. Crear una carpeta 
2. Abrirla desde cmd o Terminal vsc
3. Comandos
npm create vite@latest 
nombre Firebase-react
- Nombre de tu proyecto -- --plantilla react
- Elegir las indicaciones
react
cd <directorio de tu nuevo proyecto>
·intalar la dependencia
npm install 

Ejecuto vite entorno de desarrollo 
npm run dev 

4. Observar
- packege.json scrip

- mostrar carpetas 
.gitignore
- no sube node_modules

- src donde vamos a trabajar

5. Instalamos 
ReactRouter

npm i react-router-dom@6

npm run dev

### commit (rama main)

feat: initial project setup


6. limpieza
elimino
logo
app.css

limpiar App.jsx

7. crear contenido

App.jsx
main.jsx

8. creamos carpeta routes o views dentro colocamos

Home.jsx
Login.jsx

9. carpeta componentes
Navbar.jsx
RequiereAuth.jsx

10. carpeta context
UserProvider.jsx

### Commit: (rama Parte-1)
feat(parte-1): add project structure and routes


# 2 Parte

## Firebase

1. Cómo utilizar Firebase
npm install firebase (instalamos los modulos)

2. Configurar Firebase en React
creamos archivo src/"firebase.js" y agregamos las credenciales

3. Registrar nuevo usuario


4. Login de usuario


5. Cerrar sesión usuario


6. Obtener usuario activo


7. Rutas Protegidas

### Commit (rama Parte-2)
feat(Parte-2): Firebase setup, user authentication, and protected routes



# Parte 3

## Reac Hook Form

1. npm install react-hook-form

2. agregar contenido en Register

(validaciones, errores firebase (backend))

### commit  (rama parte-3)

feat(Parte-3): Implement React Hook Form in Register with validations and Firebase errors



# Parte 4

## Renfactorización Register y Login

1. creamos utils\erroresFirebase.js
2. refactorizamos errores del register

3. creamos utils/formValidates.js
4. refactorizamos las validaciones del register

5. creamos el arhcivo components\FormError.jsx
6. refactorizamos los errores de firebase de Register

7. refactorizamos el login

# Parte 5

## Tailwindcss y Flowbite


1. Instalamos
npm install -D tailwindcss
npx tailwindcss init -p

Agregar la configuracion a tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

remplazar el contenido en Index.css 
src/input.css

@tailwind base;
@tailwind components;
@tailwind utilities;

2. Instalamos Flowbite
npm install flowbite flowbite-react

agregamos contenido a tailwind.config.js

    /** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
}

Si tienen error intalar:
npm install autoprefixer

Modificamos y creamos

. App.jsx
. components/AccessContainer.jsx
. components/Title.jsx
. components/FormAlert.jsx
. components/FormInput.jsxc
. components/FormInput.jsx
. Register.jsx
. Login.jsx
. Navbar.jsx
. button loading
. Layouts


# Parte 6

##Firestore

. Add Doc
. Delete Doc
. Update Doc

. Components
. Error interpolación colores
. Hook Form
. Separar botones
. Card
. handleClickCopy
. Redirect

# Parte 7

## Seguridad y deploy

. Reglas de seguridad
. Deploy

