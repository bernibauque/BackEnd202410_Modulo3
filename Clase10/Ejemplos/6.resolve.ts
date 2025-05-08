export const valor = 42

const miPromesa = Promise.resolve(valor)

miPromesa
    .then((resultado) => {
        console.log("Valor de la promesa: ", resultado); 
    })