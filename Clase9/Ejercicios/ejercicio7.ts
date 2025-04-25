// Función genérica que invierte una tupla
function invertirTupla<T, U>(tupla: [T, U]): [U, T] {
    return [tupla[1], tupla[0]];
}

// Ejemplo de uso
console.log(invertirTupla([1, "hola"])); // Resultado: ["hola", 1]
