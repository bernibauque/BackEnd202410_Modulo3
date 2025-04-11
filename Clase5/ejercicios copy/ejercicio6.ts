export class Mariposa {
    public nombre: string;
    public color: string;
  
    constructor(nombre: string, color: string) {
      this.nombre = nombre;
      this.color = color;
    }
  
    public volar(): void {
      console.log(`La mariposa ${this.nombre} de color ${this.color} está volando.`);
    }
  }
  
  const miMariposa = new Mariposa("Monarca", "Naranja");
  miMariposa.volar();
  