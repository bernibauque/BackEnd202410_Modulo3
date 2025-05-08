// Funcion que simula un proceso asincrono que tarda 2 sg
function procesoLargo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Proceso completado"), 2000)
    })
}

// Funcion principal que usara await para esperar el resultado de procesoLargo
async function ejecutarProceso() {
    console.log("Iniciando proceso...");

    //pausa la ejecucion de procesoLargo que se resuelve despues de 2 seg
    const resultado = await procesoLargo()
    console.log(resultado); // muestra el proceso completado

    console.log("Proceso terminado");
}

ejecutarProceso()