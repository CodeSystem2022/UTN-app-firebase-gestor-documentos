//Dependencias
import { useContext } from "react"; // Importa React y los hooks useContext y useState desde la biblioteca "react".
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate desde "react-router-dom".
import { UserContext } from "../context/UserProvider"; // Importa el contexto UserContext desde un archivo llamado "UserProvider.js" en un directorio "context".
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import { formValidates } from "../utils/formValidates";


// componentes
import FormError from "../components/FormError";


const Register = () => {
    const navegate = useNavigate(); // Obtiene la función de navegación desde react-router-dom.
    // Obtiene la función "registerUser" desde el contexto UserContext utilizando el hook useContext.
    const { registerUser } = useContext(UserContext);
    const { required, patternEmail, minLength, validatetrim, validateEquals } = formValidates();


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
            navegate("/"); // Redirige al usuario a la página de inicio (ruta "/") después de registrar exitosamente.
        } catch (error) {
            console.log(error.code); // En caso de error, muestra el código del error en la consola.
            setError("firebase", {
                message: erroresFirebase(error.code),
            })
        }
    };



    return (
        <>
            <h1>Register</h1>
            <FormError error={errors.firebase} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Ingrese email"
                    {...register("email", { //objeto que recibe el elemento 
                        required, // elemento requerido

                        pattern: patternEmail, // validación de email
                    })}
                />
                <FormError error={errors.email} />
                <input
                    type="password"
                    placeholder="Ingrese su Contraseña"
                    {...register("password", {
                        minLength,
                        validate: validatetrim, // validación de espacios en blanco                        
                    })}

                />
                <FormError error={errors.password} />

                <input
                    type="password"
                    placeholder="Ingrese su Contraseña nuevamente"
                    {...register("repassword", {
                        validate: validateEquals(getValues), // validación de contraseña igual
                    })}

                />
                <FormError error={errors.repassword} />

                <button type="submit">Register</button>
            </form>
        </>

    );
};

export default Register;




