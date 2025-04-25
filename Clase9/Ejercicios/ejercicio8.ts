// Tupla para representar las coordenadas en el espacio (x, y, z)
type CoordenadasEspaciales = [number, number, number];

// Interfaz para los recursos recolectables
interface Recurso {
    nombre: string;
    cantidad: number;
}

// Clase Planeta
class Planeta {
    constructor(public nombre: string, public coordenadas: CoordenadasEspaciales, public recursos: Recurso[]) {}
}

// Clase NaveEspacial
class NaveEspacial {
    private combustible: number;
    private carga: Recurso[];
    private capacidadDeCarga: number;
    private posicionActual: CoordenadasEspaciales;

    constructor(combustibleInicial: number, capacidadDeCarga: number) {
        this.combustible = combustibleInicial;
        this.capacidadDeCarga = capacidadDeCarga;
        this.carga = [];
        this.posicionActual = [0, 0, 0]; // Posición inicial
    }

    // Método para viajar a un planeta
    viajar(planeta: Planeta): void {
        const distancia = this.calcularDistancia(this.posicionActual, planeta.coordenadas);
        const combustibleNecesario = distancia * 0.5; // El consumo es 0.5 unidades por cada unidad de distancia

        if (this.combustible >= combustibleNecesario) {
            this.combustible -= combustibleNecesario;
            this.posicionActual = planeta.coordenadas;
            console.log(`Viajaste al planeta ${planeta.nombre}. Combustible restante: ${this.combustible}`);
        } else {
            console.log("No tienes suficiente combustible para viajar.");
        }
    }

    // Método para recolectar recursos
    recolectarRecursos(planeta: Planeta): void {
        planeta.recursos.forEach((recurso) => {
            if (this.calcularCargaTotal() + recurso.cantidad <= this.capacidadDeCarga) {
                this.carga.push(recurso);
                console.log(`Recolectaste ${recurso.cantidad} unidades de ${recurso.nombre}`);
            } else {
                console.log(`No tienes suficiente espacio para recolectar más ${recurso.nombre}.`);
            }
        });
    }

    // Método para calcular la distancia entre dos puntos en el espacio
    private calcularDistancia(coord1: CoordenadasEspaciales, coord2: CoordenadasEspaciales): number {
        const [x1, y1, z1] = coord1;
        const [x2, y2, z2] = coord2;
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
    }

    // Método para calcular el peso total de la carga
    private calcularCargaTotal(): number {
        return this.carga.reduce((total, recurso) => total + recurso.cantidad, 0);
    }
}

// Ejemplo de uso
const planetaMarte = new Planeta("Marte", [100, 200, 300], [
    { nombre: "Oxígeno", cantidad: 50 },
    { nombre: "Minerales", cantidad: 30 },
]);

const miNave = new NaveEspacial(500, 100); // Combustible inicial: 500, Capacidad de carga: 100

miNave.viajar(planetaMarte);  // Viajamos a Marte
miNave.recolectarRecursos(planetaMarte);  // Recolectamos recursos de Marte

