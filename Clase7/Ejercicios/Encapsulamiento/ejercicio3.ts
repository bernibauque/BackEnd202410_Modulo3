class Estudiante {
    private _nombre: string;
    private _edad: number;
    private _calificaciones: number[];

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad >= 0 ? edad : 0; // Si la edad es negativa, se establece a 0
        this._calificaciones = [];
    }

    public agregarCalificacion(calificacion: number): void {
        if (calificacion < 0 || calificacion > 100) {
            console.log("La calificación debe estar entre 0 y 100.");
        } else {
            this._calificaciones.push(calificacion);
        }
    }

    public calcularPromedio(): number {
        if (this._calificaciones.length === 0) {
            console.log("No hay calificaciones para calcular el promedio.");
            return 0; // Retorna 0 si no hay calificaciones
        }
        const suma = this._calificaciones.reduce((a, b) => a + b, 0);
        return suma / this._calificaciones.length;
    }

    public get nombre(): string {
        return this._nombre;
    }
}

// Uso
export const estudiante = new Estudiante('Ana', 20);
estudiante.agregarCalificacion(80);
estudiante.agregarCalificacion(90);
console.log(`Promedio de ${estudiante.nombre}: ${estudiante.calcularPromedio()}`);