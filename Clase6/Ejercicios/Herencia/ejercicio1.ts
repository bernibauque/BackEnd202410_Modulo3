// Clase base: Torta
class Torta {
    nombre: string;  // Nombre de la torta
    tipo: string;    // Tipo de torta (por ejemplo, chocolate, vainilla, etc.)

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    // Método que devuelve una descripción general de la torta
    hacerDescripcion(): string {
        return `Soy una torta llamada ${this.nombre}, de tipo ${this.tipo}.`;
    }
}

// Clase derivada: TortaDeChocolate
class TortaDeChocolate extends Torta {
    constructor(nombre: string) {
        super(nombre, "chocolate");  // Llama al constructor de Torta con el nombre y tipo específico
    }

    // Sobrescribe el método para dar una descripción específica de la torta de chocolate
    hacerDescripcion(): string {
        return `Soy una torta de chocolate, deliciosa y suave.`;  
    }
}

// Crear una instancia de TortaDeChocolate
const miTorta = new TortaDeChocolate("Torta de Cumpleaños");
console.log(miTorta.hacerDescripcion());  // Imprime: "Soy una torta de chocolate, deliciosa y suave."

