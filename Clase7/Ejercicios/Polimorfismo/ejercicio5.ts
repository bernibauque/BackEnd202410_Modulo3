// Interfaz
interface Empleado {
    trabajar(): void;
}

// Clase: Programador
export class Programador implements Empleado {
    trabajar(): void {
        console.log("El programador está escribiendo código.");
    }
}

// Clase: Diseñador
class Disenador implements Empleado {
    trabajar(): void {
        console.log("El diseñador está creando un diseño.");
    }
}

// Función polimórfica que usa la interfaz
function procesarTrabajo(empleado: Empleado): void {
    empleado.trabajar(); // Llama al método implementado en la clase correspondiente
}

// Pruebas
const programador: Empleado = new Programador();
const disenador: Empleado = new Disenador();

procesarTrabajo(programador); // Salida: El programador está escribiendo código.
procesarTrabajo(disenador);   // Salida: El diseñador está creando un diseño.
