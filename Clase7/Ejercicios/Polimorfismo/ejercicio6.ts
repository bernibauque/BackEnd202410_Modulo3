// Interfaz Volador
interface Volador {
    volar(): void;
}

// Interfaz Nadador
interface Nadador {
    nadar(): void;
}

// Clase que implementa ambas interfaces
class Pato implements Volador, Nadador {
    volar(): void {
        console.log("El pato está volando.");
    }

    nadar(): void {
        console.log("El pato está nadando.");
    }
}

// Pruebas
const pato = new Pato();
pato.volar(); // Salida: El pato está volando.
pato.nadar(); // Salida: El pato está nadando.
