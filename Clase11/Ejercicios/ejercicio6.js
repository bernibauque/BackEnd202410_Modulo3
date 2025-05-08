// Función que simula el proceso de autenticación de un usuario
const autenticar = async (usuario) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Validamos que el usuario no sea null o undefined
            if (usuario) {
                resolve("Autenticación exitosa"); // Si es válido, devolvemos un mensaje de éxito
            } else {
                reject("Error: usuario no encontrado"); // Si no es válido, lanzamos un error
            }
        }, 2000); // Simulamos un retardo de 2 segundos en la autenticación
    });
};

// Función principal para iniciar sesión y manejar errores
async function iniciarSesion(usuario) {
    try {
        const mensaje = await autenticar(usuario); // Intentamos autenticar al usuario
        console.log(mensaje); // Si la autenticación es exitosa, mostramos el mensaje
    } catch (error) {
        console.error("Error en autenticación:", error); // Capturamos y mostramos el error
    }
}

iniciarSesion("Juan"); // Cambia el usuario a null o undefined para probar el manejo de errores
