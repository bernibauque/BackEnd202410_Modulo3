class Animal {
    // propiedades
    public nombre: string;
    private tipoAlimento: string;
    protected especie: string;

    //constructor
    constructor (nombre: string, tipoAlimento:string, especie: string) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }

    // metodo publico: accesible desde cualquier parte
    public describirAnimal(): void {
        console.log(`Este es ${this.nombre}, un animal de la especie ${this.especie}`);
    }

    private mostrarTipoAlimento(): void {
        console.log(`${this.nombre} se alimenta con ${this.tipoAlimento}`);
    } 

    protected sonidoAnimal(): void {
        console.log(`${this.nombre} hace un sonido`);
    }
}
// porque void?
// La función hace algo (en este caso, muestra un mensaje en la consola),
// pero no retorna ningun valor que puedas guardar en una variable o 
// usar después.

// crear la instancia 
const miAnimal = new Animal ('Gato', 'coquito', 'felino')
miAnimal.describirAnimal()
//miAnimal.mostrarTipoAlimento()
//miAnimal.sonidoAnimal()