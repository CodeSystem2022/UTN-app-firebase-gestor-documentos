import { useContext } from "react"; // Importa React y los hooks useContext y useState desde la biblioteca "react".
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate desde "react-router-dom".
import { UserContext } from "../context/UserProvider"; // Importa el contexto UserContext desde un archivo llamado "UserProvider.js" en un directorio "context".
import { useForm } from "react-hook-form";

const Register = () => {
    const navegate = useNavigate(); // Obtiene la función de navegación desde react-router-dom.
    // Obtiene la función "registerUser" desde el contexto UserContext utilizando el hook useContext.
    const { registerUser } = useContext(UserContext);

    const {
        register, // registra los campos del formulario (registra un input) 
        handleSubmit, // envia el formulario (se procesa)
        formState: { errors }, // obtiene los errores del formulario
        getValues, // obtiene los valores del formulario
        setError, // establece los errores del formulario
    } = useForm(); // hook de react-hook-form



    const onSubmit = async ({ email, password }) => {
        try {
            // Llama a la función "registerUser" para registrar al usuario con el email y contraseña proporcionados.
            await registerUser(email, password);

            console.log("Usuario creado");
            navegate("/"); // Redirige al usuario a la página de inicio (ruta "/") después de registrar exitosamente.

        } catch (error) {
            console.log(error.code); // En caso de error, muestra el código del error en la consola.
            switch (error.code) {
                case "auth/email-already-in-use":
                    setError("email", {
                        message: "El email ya está en uso"
                    })
                    break;
                default:
                    console.log("Error del servidor");
            }

        }
    };



    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Ingrese email"
                    {...register("email", { //objeto que recibe el elemento 
                        required: // elemento requerido
                        {
                            value: true, // valor true
                            menssage: "Este campo es obligatorio" // mensaje de error
                        },
                        pattern: {// elemento patron
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // valor de la expresion regular
                            menssage: "El email ingresado no es valido" // mensaje de error
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <input
                    type="password"
                    placeholder="Ingrese su Contraseña"
                    {...register("password", {
                        minLength:
                        {
                            value: 6,
                            menssage: "Debe tener al menos 6 caracteres"
                        },
                        validate: {
                            trim: (v) => {
                                if (!v.trim()) { // trim() elimina los espacios en blanco al inicio y al final de un string
                                    return "No debe contener espacios en blanco";
                                }
                                return true;
                            },

                        },
                    })}

                />
                {errors.password && <p>{errors.password.message}</p>}

                <input
                    type="password"
                    placeholder="Ingrese su Contraseña nuevamente"
                    {...register("repassword", {
                        validate: {
                            equals: v => v === getValues("password") || "Las contraseñas no coinciden",
                            // message: "Las contraseñas no coinciden"
                        }
                    })}

                />
                {errors.repassword && <p>{errors.repassword.message}</p>}

                <button type="submit">Register</button>
            </form>
        </>

    );
};

export default Register;




