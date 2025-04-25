// Tupla para representar las coordenadas en el mapa (x, y)
type CoordenadasMapa = [number, number];

// Interfaz que define entidades movibles
interface EntidadMovible {
    moverse(): void;
}

// Clase base Personaje
export abstract class Personaje implements EntidadMovible {
    protected posicion: CoordenadasMapa;
    protected velocidad: number;

    constructor(posicionInicial: CoordenadasMapa, velocidad: number) {
        this.posicion = posicionInicial;
        this.velocidad = velocidad;
    }

    // Método abstracto para moverse, a implementar por las subclases
    abstract moverse(): void;

    // Método común para imprimir la posición actual
    imprimirPosicion(): void {
        console.log(`Posición actual: (${this.posicion[0]}, ${this.posicion[1]})`);
    }

    // Método para cambiar la posición
    protected actualizarPosicion(x: number, y: number): void {
        this.posicion = [this.posicion[0] + x, this.posicion[1] + y];
    }
}

// Clase PacMan que extiende Personaje
class PacMan extends Personaje {
    constructor(posicionInicial: CoordenadasMapa) {
        super(posicionInicial, 2); // PacMan se mueve a velocidad 2
    }

    // Implementación del método moverse
    moverse(): void {
        // PacMan se mueve hacia la derecha
        this.actualizarPosicion(this.velocidad, 0);
        console.log("Pac-Man se movió a la derecha.");
        this.imprimirPosicion();
    }

    // Método para comer una pastilla
    comerPastilla(): void {
        console.log("Pac-Man comió una pastilla.");
    }
}

// Clase Fantasma que extiende Personaje
class Fantasma extends Personaje {
    private nombre: string;

    constructor(nombre: string, posicionInicial: CoordenadasMapa) {
        super(posicionInicial, 1); // Los fantasmas se mueven a velocidad 1
        this.nombre = nombre;
    }

    // Implementación del método moverse
    moverse(): void {
        // Los fantasmas se mueven de forma aleatoria
        const direccion = Math.random() > 0.5 ? 1 : -1;
        this.actualizarPosicion(direccion * this.velocidad, 0);
        console.log(`${this.nombre} se movió en dirección ${direccion > 0 ? 'derecha' : 'izquierda'}.`);
        this.imprimirPosicion();
    }

    // Método específico de los fantasmas
    asustarPacMan(): void {
        console.log(`${this.nombre} está persiguiendo a Pac-Man.`);
    }
}

// Ejemplo de uso
const pacman = new PacMan([0, 0]);
pacman.moverse();  // Pac-Man se mueve
pacman.comerPastilla();  // Pac-Man come una pastilla

const fantasma1 = new Fantasma("Blinky", [5, 0]);
fantasma1.moverse();  // Blinky se mueve aleatoriamente
fantasma1.asustarPacMan();  // Blinky persigue a Pac-Man
