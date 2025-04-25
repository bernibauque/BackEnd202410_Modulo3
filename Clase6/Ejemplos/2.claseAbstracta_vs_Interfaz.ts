// Ejemplo Practico:
// Imaginemos un sistema de gestion de transporte donde queremos definir vehiculos que se mueven
// de diferentes maneras
// usaremos una clase abstracta "vehiculo" para definir el comportamiento general de todos los
// vehiculos y crearemos una interfaz "electrico" para los vehiculos que pueden cargarse electronicamente.

// Interfaz para vehiculos electricos
interface Electrico {
    cargarBateria(): void
}

// Clase abstracta para todos los vehiculos
export abstract class Vehiculo {
    constructor(protected tipo: string) {}
    // metodo abstracto
    abstract moverse(): void;
    // metodo concreto
    describir(): void {
        console.log(`Este es un vehiculo tipo ${this.tipo}`);
    }
}

// Clase concreta que extiende de la clase abstracta e implementa una intefaz
class AutoElectrico extends Vehiculo implements Electrico {
    constructor() {
        super("Auto electrico")
    }

    moverse(): void {
        console.log("El auto se mueve silenciosamente...");
    }

    cargarBateria(): void {
        console.log("Cargando la bateria del auto...");
    }
}

const tesla = new AutoElectrico()
tesla.describir()
tesla.moverse()
tesla.cargarBateria()