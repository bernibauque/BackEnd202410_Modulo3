export class Animal {
    public nombre: string;
    public tipo: string;
  
    constructor(nombre: string, tipo: string) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  
    public hacerSonido(): void {
      console.log(`${this.nombre} hace un sonido.`);
    }
  }
  
  const perro = new Animal("Rex", "Perro");
  perro.hacerSonido();
  