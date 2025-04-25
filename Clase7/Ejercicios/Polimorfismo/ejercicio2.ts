// Clase base
export class Vehiculo {
    arrancar(): void {
        console.log("El vehículo está arrancando...");
    }
}

// Clase derivada: Coche
class Coche extends Vehiculo {
    arrancar(): void {
        console.log("El coche está arrancando con una llave.");
    }
}

// Clase derivada: Moto
class Moto extends Vehiculo {
    arrancar(): void {
        console.log("La moto está arrancando con el botón de encendido.");
    }
}

// Pruebas
const vehiculo: Vehiculo = new Coche();
vehiculo.arrancar(); // Salida: El coche está arrancando con una llave.

const moto: Vehiculo = new Moto();
moto.arrancar(); // Salida: La moto está arrancando con el botón de encendido.
