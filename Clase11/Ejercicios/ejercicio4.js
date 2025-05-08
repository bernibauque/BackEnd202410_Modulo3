// Función que simula el proceso de pago y valida el monto
const procesarPago = async (monto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto > 1000) { // Si el monto es mayor a $1000, lanzamos un error
                reject("Error: monto excede el límite");
            } else {
                resolve("Pago realizado"); // Si el monto es válido, completamos el pago
            }
        }, 3000); // Simulamos un retardo de 3 segundos
    });
};

// Función principal para ejecutar el pago y manejar errores
async function ejecutarPago(monto) {
    try {
        const resultado = await procesarPago(monto); // Intentamos procesar el pago
        console.log(resultado); // Mostramos el mensaje si el pago fue exitoso
    } catch (error) {
        console.error("Error en el pago:", error); // Capturamos y mostramos el error si falla
    }
}

ejecutarPago(500); // Cambia el monto para probar el manejo de errores
