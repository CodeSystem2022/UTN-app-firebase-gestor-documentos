import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState(""); // con esto creamos el estado del email
    const [password, setPassword] = useState(""); // con esto creamos el estado del password

    const navegate = useNavigate(); // con esto creamos la navegacion

    const {registerUser} = useContext(UserContext); // con esto creamos el contexto del usuario

    const handleSudmit = async(e) => {
        e.preventDefault();
        console.log(email, password);
        try {
            await registerUser(email, password); // con esto registramos al usuario
            console.log("Usuario registrado");
            navegate("/");
        } catch (error) {
            console.log(error.code);
        }
    } // con esto manejamos el submit del formulario que sirve para registrar al usuario

  return (
    <>
     <h1>Register</h1>
     <form onSubmit={handleSudmit}>
        <input type="email"
         placeholder="Ingrese su email" 
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />
         <input type="password"
         placeholder="Ingrese su contraseña" 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
            <button type="submit">Registrarse</button>
     </form>
    </>
    
  ) // con esto creamos el formulario para registrar al usuario
}

export default Register

// este componente sirve para registrar al usuario