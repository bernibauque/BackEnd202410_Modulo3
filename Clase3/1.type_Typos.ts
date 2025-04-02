// 1. Alias de tipo primitivo
// Alias par atipos basicos o primitivos como number, string y boolean 
type ID = number // alias para numeros (id representa un numero)
type nombre = string // alias para cadenas 
type activo = boolean // alias para booleano

// usando loas alias para declarar variables
let usuarioID: ID = 123; // variable de tipo id (number)
let nombreUsuario: nombre = "Lucia"
let cuentaActiva: activo = true

console.log(`Usuario: ${nombreUsuario}, Id: ${usuarioID}, activa: ${cuentaActiva}`);

// 2. Alias para objetos 
// alias para definir un objeto complejo
// en esa caso una direccion con tres propiedades 

type direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: number;
}

// usamos el alias direccion para crear un objeto con las propiedades especificadas
let miDireccion: direccion = {
    calle: "Avenida Jujuy",
    ciudad: "Buenos Aires",
    codigoPostal: 1234
}
console.log(`Vivo en ${miDireccion.calle}, ${miDireccion.ciudad}, ${miDireccion.codigoPostal}`);

// 3. Alias para uniones de tipos 
// Donde una variable puede tener uno o varios tipos posibles
type Resultado = 'exito' | 'error' // resultado solo puede ser exito o error
type IdUsuario = string | number 

// usamos el alias resultado y idUsuario para definir las variables
let estadoOperaciones : Resultado = "exito"
let idUsuario1: IdUsuario = 4356
let idUsuario2: IdUsuario = "berni"

console.log(`Estado de operacion: ${estadoOperaciones}, Id usuario 1: ${idUsuario1}`);

// 4. Alias para funciones
// toma como argumento 2 numeros y devuelve un numero
// esto se usa para definir la "firma" de funciones que deben cumplir con cierto formato
type operacionesMatematicas = (a: number, b:number) => number

// Implementacion de dos funciones que siguen el formato de operacionesMatematicas
export const sumar: operacionesMatematicas = (a, b) => a + b 
export const restar : operacionesMatematicas = (a, b ) => a - b

console.log( `Sumar ${sumar(3,5)} y Restar ${restar(5,5)}`);

//5. Alias para arrays 
// puede ser array de numeros o cadenas
type ListaNumeros = number[]
type ListaCadenas = string[]

// usamos los alias para crear arrays
let numeros : ListaNumeros = [1, 2, 3, 4, 5]
let cadenas : ListaCadenas = ["uno", "dos", "tres"]

console.log(`Numeros ${numeros.join(", ")}`);
console.log(`Cadenas ${cadenas.join(", ")}`);

