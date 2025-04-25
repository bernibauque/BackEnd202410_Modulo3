abstract class InstrumentoMusical {
    // Método abstracto para tocar
    abstract tocar(): void; // Método abstracto sin parámetros
    abstract tocar(conAcompanamiento: boolean): void; // Método abstracto con parámetro

}

class Guitarra extends InstrumentoMusical {
    // Sobrescritura del método tocar
    tocar(): void;
    tocar(conAcompanamiento: boolean): void;
    tocar(conAcompanamiento?: boolean): void {
        if (conAcompanamiento) {
            console.log("Tocando la guitarra con acompañamiento.");
        } else {
            console.log("Tocando la guitarra sin acompañamiento.");
        }
    }
}

class Piano extends InstrumentoMusical {
    // Sobrescritura del método tocar
    tocar(): void;
    tocar(conAcompanamiento: boolean): void;
    tocar(conAcompanamiento?: boolean): void {
        if (conAcompanamiento) {
            console.log("Tocando el piano con acompañamiento.");
        } else {
            console.log("Tocando el piano sin acompañamiento.");
        }
    }
}

// Ejemplos de uso
const guitarra = new Guitarra();
guitarra.tocar(); // Tocando la guitarra sin acompañamiento.
guitarra.tocar(true); // Tocando la guitarra con acompañamiento.

const piano = new Piano();
piano.tocar(); // Tocando el piano sin acompañamiento.
piano.tocar(true); // Tocando el piano con acompañamiento.


