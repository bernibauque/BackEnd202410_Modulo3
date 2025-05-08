// Función que simula la descarga de un archivo
const descargarArchivo = async (archivo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Verificamos si el nombre del archivo es válido
            if (archivo) {
                resolve(`Archivo ${archivo} descargado`); // Si es válido, retornamos mensaje de éxito
            } else {
                reject("Error en la descarga"); // Si no es válido, lanzamos un error
            }
        }, 2000); // Simulamos un tiempo de descarga de 2 segundos
    });
};

// Función principal que maneja la descarga y captura posibles errores
async function iniciarDescarga(archivo) {
    try {
        const mensaje = await descargarArchivo(archivo); // Intentamos descargar el archivo
        console.log(mensaje); // Mostramos el mensaje si la descarga fue exitosa
    } catch (error) {
        console.error("Error en la descarga:", error); // Capturamos y mostramos el error
    }
}

iniciarDescarga("documento.pdf"); // Cambia el nombre del archivo para probar el error
