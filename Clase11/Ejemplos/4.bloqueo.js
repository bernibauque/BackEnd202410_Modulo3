// funciones que simulan tareas
function tareaAsincrona1() {
    return new Promise(resolve =>
        setTimeout(() =>
            resolve("tarea 1 completada"), 2000))
}

function tareaAsincrona2() {
    return new Promise(resolve =>
        setTimeout(() =>
            resolve("tarea 2 completada"), 2000))
}

function tareaAsincrona3() {
    return new Promise(resolve =>
        setTimeout(() =>
            resolve("tarea 3 completada"), 1000))
}

// funcion principal para ejecutar las tareas
async function ejecutarTareas() {
    try {
        // llamamos a las tareas sin await, asi se ejecutan en paralelo
        const promesa1 = tareaAsincrona1()
        const promesa2 = tareaAsincrona2()
        const promesa3 = tareaAsincrona3()

        const resultados = await Promise.all([promesa1, promesa2, promesa3])
        console.log("Resultados: ", resultados);
    } catch (error) {
        console.error("Error en alguna de las tareas: ", error);
    }
}

ejecutarTareas()