import { useContext } from "react"; // Importa la función "useContext" de la biblioteca React para acceder a un contexto.
import { UserContext } from "../context/UserProvider"; // Importa el contexto "UserContext" desde el archivo "UserProvider.js".
import { useNavigate } from "react-router-dom"; // Importa la función "useNavigate" de React Router para la navegación.

const Login = () => {
    const { user, setUser } = useContext(UserContext); // Utiliza "useContext" para acceder a "UserContext" y obtener el estado del usuario y la función para establecerlo.
    const navigate = useNavigate(); // Utiliza "useNavigate" para acceder a la función de navegación.

    const handleClickLogin = () => {
        setUser(true); // Establece el estado del usuario como "true" (en línea).
        navigate("/"); // Navega a la ruta "/" después de hacer clic en el botón de acceso.
    };

    return (
        <>
            {/* Renderiza un título que dice "Login" */}
            <h1>Login</h1> 
            {/* Renderiza un mensaje que depende del estado del usuario, mostrando "En línea" o "Offline" */}
            <h2>{user ? "En línea" : "Offline"}</h2> 
            {/* Renderiza un botón que, al hacer clic, llama a la función "handleClickLogin" para iniciar sesión. */}
            <button onClick={handleClickLogin}>Acceder</button> 
        </>
    );
};

export default Login; 
