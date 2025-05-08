// Función que simula una consulta que tarda 1 segundo en completarse
const consultaA = () => new Promise(resolve => setTimeout(() => resolve("Consulta A completa"), 1000));

// Función que simula una consulta que tarda 2 segundos en completarse
const consultaB = () => new Promise(resolve => setTimeout(() => resolve("Consulta B completa"), 2000));

// Función que simula una consulta que tarda 3 segundos en completarse
const consultaC = () => new Promise(resolve => setTimeout(() => resolve("Consulta C completa"), 3000));

// Función principal que ejecuta todas las consultas en paralelo
async function realizarConsultasParalelas() {
    try {
        // Promise.all permite ejecutar las consultas en paralelo y espera a que todas terminen
        const resultados = await Promise.all([consultaA(), consultaB(), consultaC()]);
        console.log("Todas las consultas completadas:", resultados);
    } catch (error) {
        console.error("Error en alguna consulta:", error); // Manejamos cualquier error aquí
    }
}

realizarConsultasParalelas(); // Inicia la ejecución de las consultas
