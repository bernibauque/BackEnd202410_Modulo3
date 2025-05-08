// Actualizacion de una interfaz grafica
// setInterval() tambien puede ser util para actualizar partes de una interfaz
// grafica de usuario de forma periodica. Por ejemplo,un reloj 
// que se actualiza cada segundo 

function actualizarReloj() {
    // creamos una nueva instancia de date para obtener las fecha y hora actuales
    const ahora = new Date()

    // obtenemos la hora actual (de 0 a 23) de la instancia de date
    const horas = ahora.getHours()

    // obtenemos los minutos actuales ( de 0 a 59) de la intancia date
    const minutos = ahora.getMinutes()

    // obtenemos los segundos actuales (de 0 a 59) de la instancia date
    const segundos = ahora.getSeconds()

    // mostramos la hora actual en formato "horas:minutos:segundos"
    console.log(`${horas}:${minutos}:${segundos}`);
}

// se crea un intervalo que llama a la funcion de actualizarReloj cada segundo (1000 ms)
let relojIntervalo = setInterval(actualizarReloj, 1000)

// Importante: este intervalo seguira ejecutandose indefinidamente hasta que sea detenido manualmente
// usando el clear si se necesita

