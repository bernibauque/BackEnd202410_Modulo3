// Función que simula la actualización de inventario
const actualizarInventario = async (cantidad) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Validamos si hay suficiente cantidad en el inventario
            if (cantidad > 0) {
                resolve("Inventario actualizado"); // Mensaje si la cantidad es suficiente
            } else {
                reject("Error: inventario insuficiente"); // Lanzamos un error si la cantidad es insuficiente
            }
        }, 1500); // Tiempo de espera de 1.5 segundos
    });
};

// Función principal que gestiona la actualización del inventario y los errores
async function gestionarInventario(cantidad) {
    try {
        const mensaje = await actualizarInventario(cantidad); // Intentamos actualizar el inventario
        console.log(mensaje); // Mostramos el mensaje si la actualización fue exitosa
    } catch (error) {
        console.error("Error en inventario:", error); // Capturamos y mostramos el error si falla
    }
}

gestionarInventario(5); // Cambia la cantidad para probar el manejo de errores
