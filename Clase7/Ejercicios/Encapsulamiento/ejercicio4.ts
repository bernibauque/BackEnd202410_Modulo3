export class Avion {
    private _modelo: string;     // Propiedad privada para el modelo del avión
    private _capacidad!: number; // Propiedad privada para la capacidad (inicializada más tarde)
    private _velocidad!: number;  // Propiedad privada para la velocidad (inicializada más tarde)

    //Se agregó el operador ! en las propiedades _capacidad y _velocidad para indicar que serán inicializadas en el constructor, lo que resuelve el error.

    constructor(modelo: string, capacidad: number, velocidad: number) {
        this._modelo = modelo;
        this.capacidad = capacidad; // Usando el setter
        this.velocidad = velocidad; // Usando el setter
    }

    // Getter para el modelo
    public get modelo(): string {
        return this._modelo; // Devuelve el modelo
    }

    // Getter para la capacidad
    public get capacidad(): number {
        return this._capacidad; // Devuelve la capacidad
    }

    // Setter para la capacidad con validación
    public set capacidad(value: number) {
        if (value < 0) throw new Error("La capacidad no puede ser negativa."); // Verifica que no sea negativo
        this._capacidad = value; // Asigna la capacidad
    }

    // Getter para la velocidad
    public get velocidad(): number {
        return this._velocidad; // Devuelve la velocidad
    }

    // Setter para la velocidad con validación
    public set velocidad(value: number) {
        if (value < 0) throw new Error("La velocidad no puede ser negativa."); // Verifica que no sea negativo
        this._velocidad = value; // Asigna la velocidad
    }
}

// Uso de la clase Avion
const avion = new Avion('Boeing 747', 400, 900);
console.log(avion.modelo);      // Muestra: Boeing 747
console.log(avion.capacidad);    // Muestra: 400
console.log(avion.velocidad);    // Muestra: 900

