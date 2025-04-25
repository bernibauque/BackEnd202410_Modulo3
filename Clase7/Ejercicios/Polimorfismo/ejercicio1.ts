class Calculadora {
    // Sobrecarga del método 'sumar'

    // Caso 1: Suma de dos números
    sumar(a: number, b: number): number;

    // Caso 2: Suma de tres números
    sumar(a: number, b: number, c: number): number;

    // Caso 3: Concatenación de dos cadenas
    sumar(a: string, b: string): string;

    // Implementación del método
    sumar(a: number | string, b: number | string, c?: number): number | string | null {
        // Suma de números
        if (typeof a === "number" && typeof b === "number") {
            if (c !== undefined) {
                return a + b + c; // Suma de tres números
            }
            return a + b; // Suma de dos números
        }

        // Concatenación de cadenas
        if (typeof a === "string" && typeof b === "string") {
            return a + b; // Concatenación de cadenas
        }

        // Si los tipos no coinciden (número y cadena), devolvemos null
        return null;
    }
}

// Pruebas
const calculadora = new Calculadora();
console.log(calculadora.sumar(2, 3));          // Salida: 5
console.log(calculadora.sumar(1, 2, 3));       // Salida: 6
console.log(calculadora.sumar("Hola, ", "Mundo")); // Salida: "Hola, Mundo"




