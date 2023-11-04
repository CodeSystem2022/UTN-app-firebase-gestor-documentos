import { useContext } from "react"; // Importa la función "useContext" de la biblioteca React para acceder a un contexto.
import { NavLink } from "react-router-dom"; // Importa el componente "NavLink" de React Router para la navegación.
import { UserContext } from "../context/UserProvider"; // Importa el contexto "UserContext" desde el archivo "UserProvider.js".

const Navbar = () => {
    const { user, setUser } = useContext(UserContext); // Utiliza "useContext" para acceder a "UserContext" y obtener el estado del usuario y la función para establecerlo.

    return (
        <div>
            {user ? ( 
                //  Renderiza contenido condicional en función del estado del usuario.
                <>
                    {/* Muestra un enlace "Inicio" que redirige a la página principal.             */}
                    <NavLink to="/">Inicio</NavLink> 
                    {/* Muestra un botón "Logout" que, al hacer clic, llama a la función "setUser" para cerrar la sesión. */}
                    <button onClick={() => setUser(false)}>Logout</button> 
                </>
            ) : (
                /* Si el usuario no está autenticado, muestra un enlace "Login" que redirige a la página de inicio de sesión. */
                <NavLink to="/login">Login</NavLink> 
            )}
        </div>
    );
};

export default Navbar; 
