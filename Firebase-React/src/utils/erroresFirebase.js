export const erroresFirebase = (code) => {
    switch (code) {
        case 'auth/invalid-email':
            return 'El correo electrónico no es válido.'; // Mensaje de error para correo electrónico inválido.
        case 'auth/user-disabled':
            return 'El usuario está deshabilitado.'; // Mensaje de error para usuario deshabilitado.
        case 'auth/user-not-found':
            return 'El usuario no existe.'; // Mensaje de error para usuario no encontrado.
        case 'auth/wrong-password':
            return 'La contraseña no es válida.'; // Mensaje de error para contraseña incorrecta.
        default:
            return 'Error del servidor, intente más tarde.'; // Mensaje de error por defecto en caso de otros errores.
    }
}
