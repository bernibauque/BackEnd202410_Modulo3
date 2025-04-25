class Vacacion {
    private _destino: string;          // Propiedad privada para el destino
    private _duracion!: number;        // Propiedad privada para la duración (inicializada más tarde)
    private _presupuesto!: number;     // Propiedad privada para el presupuesto (inicializada más tarde)

    constructor(destino: string, duracion: number, presupuesto: number) {
        this._destino = destino;
        this.duracion = duracion;      // Usando el setter
        this.presupuesto = presupuesto; // Usando el setter
    }

    // Getter para el destino
    public get destino(): string {
        return this._destino;          // Devuelve el destino
    }

    // Getter para la duración
    public get duracion(): number {
        return this._duracion;         // Devuelve la duración
    }

    // Setter para la duración con validación
    public set duracion(value: number) {
        if (value < 1) throw new Error("La duración debe ser al menos 1 día."); // Verifica la duración
        this._duracion = value;        // Asigna la duración
    }

    // Getter para el presupuesto
    public get presupuesto(): number {
        return this._presupuesto;      // Devuelve el presupuesto
    }

    // Setter para el presupuesto con validación
    public set presupuesto(value: number) {
        if (value <= 0) throw new Error("El presupuesto debe ser mayor que 0."); // Verifica el presupuesto
        this._presupuesto = value;     // Asigna el presupuesto
    }
}

// Uso de la clase Vacacion
const vacacion = new Vacacion('Cancún', 7, 1500);
console.log(vacacion.destino);      // Muestra: Cancún
console.log(vacacion.duracion);      // Muestra: 7
