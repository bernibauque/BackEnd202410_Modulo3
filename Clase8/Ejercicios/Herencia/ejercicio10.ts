// Interfaz de BeneficiosLaborales
interface BeneficiosLaborales {
    calcularBeneficios(): number;  // Método para calcular beneficios laborales
}

// Clase base Empleado
export class Empleado {
    protected nombre: string;  // Nombre del empleado
    protected salario: number;  // Salario del empleado

    constructor(nombre: string, salario: number) {
        this.nombre = nombre;  // Inicializa el nombre
        this.salario = salario;  // Inicializa el salario
    }

    calcularSalario(): number {
        return this.salario;  // Retorna el salario del empleado
    }

    // Método público para obtener el nombre del empleado
    public obtenerNombre(): string {
        return this.nombre;  // Retorna el nombre
    }
}

// Clase derivada EmpleadoTiempoCompleto
class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales {
    constructor(nombre: string, salario: number) {
        super(nombre, salario);  // Llama al constructor de Empleado
    }

    calcularSalario(): number {
        return this.salario;  // Salario fijo
    }

    calcularBeneficios(): number {
        return this.salario * 0.20;  // 20% del salario en beneficios
    }
}

// Clase derivada EmpleadoMedioTiempo
class EmpleadoMedioTiempo extends Empleado {
    private horasTrabajadas: number;  // Horas trabajadas por el empleado

    constructor(nombre: string, salarioPorHora: number, horasTrabajadas: number) {
        super(nombre, salarioPorHora);  // Llama al constructor de Empleado
        this.horasTrabajadas = horasTrabajadas;  // Inicializa horas trabajadas
    }

    calcularSalario(): number {
        return this.salario * this.horasTrabajadas;  // Salario por hora
    }
}

// Ejemplo de uso
const empCompleto = new EmpleadoTiempoCompleto("Carlos", 3000);
console.log(`${empCompleto.obtenerNombre()} gana $${empCompleto.calcularSalario()} y tiene beneficios de $${empCompleto.calcularBeneficios()}.`);
// Salida: Carlos gana $3000 y tiene beneficios de $600.

const empMedioTiempo = new EmpleadoMedioTiempo("Lucía", 15, 80);
console.log(`${empMedioTiempo.obtenerNombre()} gana $${empMedioTiempo.calcularSalario()} por sus horas trabajadas.`);
// Salida: Lucía gana $1200 por sus horas trabajadas.

  