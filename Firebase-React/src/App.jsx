import { Routes, Route } from "react-router-dom"; // Importa los componentes necesarios de React Router para definir rutas en la aplicación.

import Login from "./routes/Login"; // Importa el componente "Login" desde el archivo "Login.js".
import Home from "./routes/Home"; // Importa el componente "Home" desde el archivo "Home.js".
import Navbar from "./components/Navbar"; // Importa el componente "Navbar" desde el archivo "Navbar.js".
import RequireAuth from "./components/RequireAuth"; // Importa el componente "RequireAuth" desde el archivo "RequireAuth.js".
import Register from "./routes/Register";

const App = () => {
    return (
        <>
            <Navbar /> {/* Renderiza el componente "Navbar", que probablemente representa la barra de navegación de la aplicación. */}
            <h1>APP</h1>{/* Renderiza un título o encabezado en la página.*/} 
            <Routes> {/*Define un conjunto de rutas utilizando el componente "Routes" de React Router.*/}

                {/* Definición de una ruta */}
                <Route
                    path="/"
                    element={
                        <RequireAuth> {/*Envuelve el componente "Home" con "RequireAuth". Puede utilizarse para requerir autenticación antes de mostrar la página "Home".*/}
                            <Home /> {/*Renderiza el componente "Home" cuando la ruta coincide con "/"*/}
                        </RequireAuth>
                    }
                />

                {/* Definición de otra ruta */}
                <Route path="/login" element={<Login />} /> {/* Define la ruta "/login" y renderiza el componente "Login" cuando la ruta coincide.*/}
                <Route path="/register" element={<Register />} /> {/* Define la ruta "/register" y renderiza el componente "Register" cuando la ruta coincide.*/}

            </Routes>
        </>
    );
};

export default App; 