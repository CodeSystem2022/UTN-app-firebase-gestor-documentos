import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState(""); // Inicializa con una cadena vacía
    const [password, setPassword] = useState(""); // Inicializa con una cadena vacía

    const { loginUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(email, password);
            console.log("Usuario logueado");
            navigate("/");
        } catch (error) {
            console.log(error.code);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Ingrese su email"
                    value={email} // Vincula el valor al estado 'email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password} // Vincula el valor al estado 'password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar sesión</button>
            </form>
        </>
    );
};

export default Login;
