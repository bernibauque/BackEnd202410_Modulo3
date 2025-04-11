interface IPersona {
    nombre: string;
    edad: number;
    presentarse(): void;
  }
  
  class Persona implements IPersona {
    constructor(public nombre: string, public edad: number) {}
  
    public presentarse(): void {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  const juan = new Persona("Juan", 25);
  juan.presentarse();
  