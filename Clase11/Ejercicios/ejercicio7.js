// Función que simula el envío de un correo de recuperación de contraseña
async function recuperarContrasena(email) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Retorna el mensaje después de un retardo de 3 segundos
            resolve(`Correo de recuperación enviado a ${email}`);
        }, 3000); // Simulamos el tiempo de envío del correo
    });
}

// Función principal que inicia el proceso de recuperación de contraseña
async function iniciarRecuperacion(email) {
    const mensaje = await recuperarContrasena(email); // Esperamos que el correo sea enviado
    console.log(mensaje); // Imprimimos el mensaje de confirmación
}

iniciarRecuperacion("correo@ejemplo.com");
