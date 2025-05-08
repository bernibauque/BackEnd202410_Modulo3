// Función que simula la obtención de datos con retardo
const obtenerDatos = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos la obtención de datos exitosa
            resolve("Datos obtenidos con éxito");
        }, 2000); // Retraso de 2 segundos
    });
};

// Función principal que usa try/catch para manejar errores
async function leerDatos() {
    try {
        const datos = await obtenerDatos(); // Esperamos la respuesta de obtenerDatos
        console.log(datos); // Mostramos el mensaje si fue exitoso
    } catch (error) {
        console.error("Error al leer datos:", error); // Si falla, manejamos el error aquí
    }
}

leerDatos(); // Llamamos a la función para iniciar el proceso
