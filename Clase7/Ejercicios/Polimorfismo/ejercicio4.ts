abstract class DispositivoElectronico {
    // Métodos abstractos
    abstract encender(): void;
    abstract apagar(): void;
}

// Clase concreta: Televisor
class Televisor extends DispositivoElectronico {
    encender(): void {
        console.log("El televisor se ha encendido.");
    }

    apagar(): void {
        console.log("El televisor se ha apagado.");
    }
}

// Clase concreta: Radio
class Radio extends DispositivoElectronico {
    encender(): void {
        console.log("La radio se ha encendido.");
    }

    apagar(): void {
        console.log("La radio se ha apagado.");
    }
}

// Pruebas
const televisor = new Televisor();
televisor.encender(); // Salida: El televisor se ha encendido.
televisor.apagar();   // Salida: El televisor se ha apagado.

const radio = new Radio();
radio.encender(); // Salida: La radio se ha encendido.
radio.apagar();   // Salida: La radio se ha apagado.
