interface IPersona {
    nombre: string;
    edad: number;
    presentarse(): void;
  }
  
  export  class Persona implements IPersona {
    nombre: string
    edad: number
    constructor(nombre: string, edad:number){
      this.nombre = nombre;
      this.edad = edad
  }
  
    public presentarse(): void {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  const juan = new Persona("Juan", 25);
  juan.presentarse();
  