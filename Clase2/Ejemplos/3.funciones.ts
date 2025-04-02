// 1. Funcion basica
function sumar(a:number, b:number):number {
    return a + b
}

let resultadoSuma = sumar(3,4)
console.log(resultadoSuma);

// 2. Funcion que uestra un mensaje sin retorno)
function mostrarMensaje(mensaje:string): void {
    console.log(mensaje);
}
console.log(mostrarMensaje('Hola'));


// 3. Funcion con parametro opcional
function saludar(nombre:string, saludo?:string): string {
    if (saludo) {
        return `${saludo}, ${nombre}`
    }
    return `Hola, ${nombre}`
}

console.log(saludar("Berni"));
