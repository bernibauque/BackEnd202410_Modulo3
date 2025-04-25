export class Empleado {
    private _nombre: string;
    private _salario!: number;
    private _departamento: string;

    constructor(nombre: string, salario: number, departamento: string) {
        this._nombre = nombre;
        this.setSalario(salario);
        this._departamento = departamento;
    }

    public setSalario(salario: number): void {
        if (salario < 0) {
            console.log("El salario no puede ser negativo.");
        } else {
            this._salario = salario;
        }
    }

    public obtenerInformacion(): string {
        return `Empleado: ${this._nombre}, Salario: $${this._salario}, Departamento: ${this._departamento}`;
    }
}

// Uso
const empleado = new Empleado('Luis', 3000, 'Ventas');
console.log(empleado.obtenerInformacion());
empleado.setSalario(-500);
console.log(empleado.obtenerInformacion());
empleado.setSalario(4000);
console.log(empleado.obtenerInformacion());
