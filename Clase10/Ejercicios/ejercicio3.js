function consultaAPI(api, tiempo) {
    return new Promise((resolve, reject) => {
        console.log(`⏳ Consultando ${api}...`);

        setTimeout(() => {
            const exito = Math.random() > 0.5;

            if (exito) {
                resolve(`${api} respondió con éxito.`);
            } else {
                reject(`Error: ${api} no respondió.`);
            }
        }, tiempo);
    });
}

const api1 = consultaAPI("API Usuarios", 2000);
const api2 = consultaAPI("API Productos", 3000);
const api3 = consultaAPI("API Ventas", 4000);

Promise.all([api1, api2, api3])
    .then((resultados) => {
        console.log("✅ Todas las consultas fueron exitosas:", resultados);
    })
    .catch((error) => {
        console.error("❌ No se pudo completar la operación:", error);
    });
