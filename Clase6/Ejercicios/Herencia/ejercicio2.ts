// Clase base
class Maestro {
    protected nombre: string;
    protected materia: string;
  
    constructor(nombre: string, materia: string) {
      this.nombre = nombre;
      this.materia = materia;
    }
  
    enseñar(): void {
      console.log(`${this.nombre} está enseñando ${this.materia}.`);
    }
  }
  
  // Clase derivada
  class MaestroMatematicas extends Maestro {
    constructor(nombre: string) {
      super(nombre, "Matemáticas");
    }
  
    enseñar(): void {
      console.log(`${this.nombre} está resolviendo ecuaciones.`);
    }
  }
  
  // Ejemplo
  const profe = new MaestroMatematicas("Laura");
  profe.enseñar(); // Laura está resolviendo ecuaciones.
  
