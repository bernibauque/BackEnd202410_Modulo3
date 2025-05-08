// Funcion asincrona con un saludo

async function saludo() {
    return "Hola chicas!"
}

// llamamos a la funcion y manejamos la promesa resultante con .then
// si "saludo" se resuelve imprime el mensaje en la consola
saludo().then((mensaje) => console.log(mensaje))