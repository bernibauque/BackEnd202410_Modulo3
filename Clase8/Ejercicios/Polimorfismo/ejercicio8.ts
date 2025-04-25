// Clase abstracta
export abstract class Empleado {
    // Método abstracto
    abstract calcularSalario(): number;
}

// Clase derivada: EmpleadoPorHora
class EmpleadoPorHora extends Empleado {
    constructor(private horas: number, private tarifa: number) {
        super();
    }

    calcularSalario(): number {
        return this.horas * this.tarifa;
    }
}

// Clase derivada: EmpleadoFijo
class EmpleadoFijo extends Empleado {
    constructor(private salarioFijo: number) {
        super();
    }

    calcularSalario(): number {
        return this.salarioFijo;
    }
}

// Pruebas
const empleadoHora = new EmpleadoPorHora(40, 20);
console.log(empleadoHora.calcularSalario()); // Salida: 800

const empleadoFijo = new EmpleadoFijo(3000);
console.log(empleadoFijo.calcularSalario()); // Salida: 3000
