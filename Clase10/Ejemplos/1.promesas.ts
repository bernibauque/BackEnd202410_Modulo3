// creamos una promesa
const miPromesa = new Promise((resolve, reject) => {
    console.log("Estado: Pending. La operacion ha comenzado... ");
    
    //simulamos una operacion asincrona 
    setTimeout(() => {
        // genera un valor booleano aleatorio: true = exito / false: fallo
        const exito = Math.random() > 0.5

        if (exito) {
            resolve("Operacion completada con exito")
        } else {
            reject("La operacion fallo.")
        }
    }, 2000)
})

// Manejo de la promesa
miPromesa
    .then((resultado) => {
        console.log("Exito: ", resultado);
    })
    .catch((error) => {
        console.error("Error: ", error);
    })
    .finally(() => {
        console.log("Promesa finalizada");
    })

console.log("promesa creada, esperando resultado...");
