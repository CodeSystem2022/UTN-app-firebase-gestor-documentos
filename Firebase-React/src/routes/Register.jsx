import { useContext, useState } from "react"; // Importa React y los hooks useContext y useState desde la biblioteca "react".
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate desde "react-router-dom".
import { UserContext } from "../context/UserProvider"; // Importa el contexto UserContext desde un archivo llamado "UserProvider.js" en un directorio "context".
import { useForm } from "react-hook-form";

const Register = () => {
    const navegate = useNavigate(); // Obtiene la función de navegación desde react-router-dom.
        // Obtiene la función "registerUser" desde el contexto UserContext utilizando el hook useContext.
    const { registerUser } = useContext(UserContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

   
    // // Maneja el envío del formulario cuando el usuario presiona el botón "Register".
    // const handleSubmit = async (e) => {
    //     e.preventDefault(); // Previene el comportamiento predeterminado del formulario.

    //     console.log(email, password);

    //     try {
    //         // Llama a la función "registerUser" para registrar al usuario con el email y contraseña proporcionados.
    //         await registerUser(email, password);

    //         console.log("Usuario creado");
    //         navegate("/"); // Redirige al usuario a la página de inicio (ruta "/") después de registrar exitosamente.

    //     } catch (error) {
    //         console.log(error.code); // En caso de error, muestra el código del error en la consola.
    //     }
    // };

    return (
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="email"
                placeholder="Ingrese email"
                {...register("email")}
            />

            <input
                type="password"
                placeholder="Ingrese su Contraseña"
                {...register("password")}
            
            />
            <input
                type="password"
                placeholder="Ingrese nuevamente su Contraseña"
                {...register("repassword")}
            
            />
           
            <button type="submit">Register</button>
        </form>
    </>

    );
}

export default Register;




