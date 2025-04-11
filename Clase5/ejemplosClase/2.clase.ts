// Definimos una clase
class Gato {
    // propiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    // constructor 
    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza
    }
    // metodo para obtener info del gatito
    public obtenerInformacion(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`
    }
    // metodo para cambiar la raza del gatito
    public cambiarRaza(nuevaRaza: string): void {
        this.raza = nuevaRaza;
    }
}

//Creamos una instancia de la clase gato
const gato1 = new Gato('Miau', 2, 'siames')

// llamamos al metodo obtenerinfo
console.log(gato1.obtenerInformacion());

// cambiamos la raza
gato1.cambiarRaza("persa")
console.log(gato1.obtenerInformacion());
