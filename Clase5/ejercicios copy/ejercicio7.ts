class Coche {
    public marca: string;
    public modelo: string;
    private precio: number;
  
    constructor(marca: string, modelo: string, precio: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
    }
  
    public mostrarInformacion(): void {
      console.log(`Coche: ${this.marca} ${this.modelo}`);
    }
  }
  
  const miCoche = new Coche("Toyota", "Corolla", 20000);
  miCoche.mostrarInformacion();
  