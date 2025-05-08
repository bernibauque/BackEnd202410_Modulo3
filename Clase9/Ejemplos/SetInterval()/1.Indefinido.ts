// 1. Intervalo indefinido (cancelacion manual)
// El setinterval() seguira ejecutandose hasta que los detengamos manualmente

let contador = 0

const invervalo = setInterval(() => {
    contador ++
    console.log(`Contador (idefinido): ${contador}`);
    
    // aqui podriamos llamar a clearInterval(intervalo) en algun
    // momento
    // para detener el intervalo. Por ejemplo, podrias tener alguna 
    // logica
    // condicional externa o un evento que lo detenga, pero en este 
    // caso lo dejamos correr indefinidamente.

}, 1000)

console.log("Intervalo indefinido iniciado");
