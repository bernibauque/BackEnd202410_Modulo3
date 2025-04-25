// Clase base - Clase padre
export class Animal {
    name: string;

    // Constructor: inicializa la propiedad name
    constructor(name: string) {
        this.name = name;
    }

    // metodo que imprime un sonido generico de animal
    makeSound(): void {
        console.log(`${this.name} hace un sonido`);
    }
}

// Clase derivada - Clase Hija
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name) // llama al constructor de la clase base animal para inicializar 'name'
        this.breed = breed // inicializamos la prop breed
    }

    //sobreescritura del metodo makesound
    makeSound(): void {
        console.log(`${this.name} ladra`); // cambia el sonido especifico para los perros
    }

    //nuevo metodo especifico de la subclase Dog
    fetch(): void {
        console.log(`${this.name} esta buscando la pelota.`); // el perro realiza la accion de buscar la pelota
    }
}

// Instaciar objetos de la clase base y derivada
const animalGenerico = new Animal('Animal') // creacion de un objeto de la clase base
animalGenerico.makeSound()

const myDog = new Dog('Blaki', 'Caniche') // creacion de un objeto de la clase hija
myDog.makeSound()
myDog.fetch()
