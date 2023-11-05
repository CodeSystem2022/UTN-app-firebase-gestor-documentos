export const erroresFirebase = (code) => {
    switch (code) {
        case 'auth/invalid-email':
            return 'El correo electrónico no es válido.';
        case 'auth/user-disabled':
            return 'El usuario está deshabilitado.';
        case 'auth/user-not-found':
            return 'El usuario no existe.';
        case 'auth/wrong-password':
            return 'La contraseña no es válida.';
        default:
            return 'Error del servidor, intente más tarde.';
    }

}