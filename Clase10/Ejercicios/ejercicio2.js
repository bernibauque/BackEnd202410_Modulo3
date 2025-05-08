function enviarCorreo(destinatario) {
    return new Promise((resolve, reject) => {
        console.log(`📧 Enviando correo a ${destinatario}...`);

        setTimeout(() => {
            const exito = Math.random() > 0.5;

            if (exito) {
                resolve(`Correo enviado a ${destinatario}`);
            } else {
                reject(`Error: No se pudo enviar el correo a ${destinatario}`);
            }
        }, 2000);
    });
}

// Uso de la función
enviarCorreo("alice@example.com")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error))
    .finally(() => console.log("Operación finalizada"));

enviarCorreo("bob@example.com")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error))
    .finally(() => console.log("Operación finalizada"));
