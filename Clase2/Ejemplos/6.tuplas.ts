// Declaracion e inicializacion de la tupla
let persona : [string, number];

// Inicializacion de la tupla 
persona = ['Ana', 25]

// Accedemos a los elmentos de la tupla
console.log("Nombre:", persona[0]);
console.log("Edad:", persona[1]);

// Modificamos la tupla
persona[1] = 28
console.log("Edad actualizada:", persona[1]);

// Desestructuracion de la tupla
export let [nombre, edad] = persona
console.log(`La persona se llama ${nombre} y tiene ${edad} anios`);

