// Creamos una función retardo que retorna una promesa que se resuelve después de un tiempo aleatorio
const retardo = () => new Promise(resolve => {
    // Generamos un tiempo aleatorio entre 1 y 3 segundos
    const tiempoAleatorio = Math.random() * 2000 + 1000;
    setTimeout(resolve, tiempoAleatorio); // Esperamos ese tiempo antes de resolver la promesa
});

// Definimos la función asincrónica simulacionServidor
async function simulacionServidor() {
    await retardo(); // Pausamos la ejecución hasta que el retardo aleatorio se complete
    return "Servidor listo"; // Una vez terminado el retardo, retornamos un mensaje
}

// Llamamos a la función y esperamos a que se resuelva
simulacionServidor().then(console.log); // Imprime "Servidor listo" en la consola tras el retardo
