import { createContext, useState } from "react"; // Importa las funciones "createContext" y "useState" de la biblioteca React.

export const UserContext = createContext(); // Crea un contexto de usuario llamado "UserContext".

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false); // Utiliza "useState" para definir el estado del usuario con un valor inicial de "false".

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children} {/*Envuelve los componentes hijos con el contexto "UserContext.Provider" y proporciona el valor del estado del usuario y la función para establecerlo.*/}
        </UserContext.Provider>
    );
};

export default UserProvider; 
