export const formValidates = (getValues) => {
    return {
        required: // elemento requerido
        {
            value: true, // valor true
            menssage: "Este campo es obligatorio" // mensaje de error
        },
        patternEmail: {// elemento patron
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // valor de la expresion regular
            menssage: "El email ingresado no es valido" // mensaje de error
        },
        minLength: {
            value: 6,
            menssage: "Debe tener al menos 6 caracteres"
        },
        validatetrim: {
            trim: (v) => {
                if (!v.trim()) { // trim() elimina los espacios en blanco al inicio y al final de un string
                    return "No debe contener espacios en blanco";
                }
                return true;
            },

        },
        validateEquals(value) {
            return {
                equals: (v) => v === value || "No coinciden las contraseñas",
            };
        },
    };
};

