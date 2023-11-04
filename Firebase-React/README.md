# 1 Parte

## Links

Vite
https://vitejs.dev

React-Router-Dom
https://reactrouter.com/en/6.17.0

Firebase
https://firebase.google.com

Firebase Documentacion
https://firebase.google.com/docs/web/setup?authuser=0&hl=es


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

### 1 commit (rama main)

feat: initial project setup

This commit sets up the initial project structure and environment.

BREAKING CHANGE: None


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

### 2 Commit: (rama Parte-1)
feat(parte-1): add project structure and routes

In this commit, the following changes were made:
- Added three new folders: 'components', 'context', and 'routes'.
- Created necessary files and added content within these folders.
- Removed 'app.css'.

BREAKING CHANGE: None

# 2 Parte

1. Cómo utilizar Firebase
npm install firebase (instalamos los modulos)

2. Configurar Firebase en React
creamos archivo src/"firebase.js" y agregamos las credenciales

3. Registrar nuevo usuario


4. Login de usuario


5. Cerrar sesión usuario


6. Obtener usuario activo


7. Rutas Protegidas

### 3 Commit (rama Parte-2)
feat(Parte-2): Firebase setup, user authentication, and protected routes

In this commit, the following changes were made:
- Installed Firebase modules using 'npm install firebase'.
- Created a 'firebase.js' file in the 'src' directory and added Firebase credentials.
- Implemented user registration functionality.
- Implemented user login functionality.
- Implemented user logout functionality.
- Added functionality to get the currently logged-in user.
- Created protected routes.

BREAKING CHANGE: None


# Parte 3