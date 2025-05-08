// funcion que solicitaa datos, con una opcion de exito o error
function obtenerDatos(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Datos recibidos correctamente")
            } else {
                reject("Error al obtener los datos")
            }
        }, 2000)
    })
}

// funcion asincrona que intenta obtener los datos y manejar los posibles errores
async function consultarDatos() {
    try {
        console.log("Iniciando consulta de datos... ");

        // pausa haste que obtenerDatos se completo o atrapa un error si ocurre
        const resultado = await obtenerDatos(false) //cambia a true si da exito
        console.log(resultado);
    } catch (error) {
        console.error("Ocurrio un error: ", error);
    } finally {
        console.log("Finalizando consulta de datos");
    }
}

consultarDatos()