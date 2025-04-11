// Clase base
class Vehiculo {
    public marca: string;
    public modelo: string;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    public mostrarInformacion(): void {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
  }
  
  // Clase Coche que extiende Vehiculo
 export class Coche extends Vehiculo {
    public tipoCombustible: string;
  
    constructor(marca: string, modelo: string, tipoCombustible: string) {
      super(marca, modelo);
      this.tipoCombustible = tipoCombustible;
    }
  
    public mostrarInformacion(): void {
      super.mostrarInformacion();
      console.log(`Tipo de Combustible: ${this.tipoCombustible}`);
    }
  }
  
  // Clase Motocicleta que extiende Vehiculo
  class Motocicleta extends Vehiculo {
    public cilindrada: number;
  
    constructor(marca: string, modelo: string, cilindrada: number) {
      super(marca, modelo);
      this.cilindrada = cilindrada;
    }
  
    public mostrarInformacion(): void {
      super.mostrarInformacion();
      console.log(`Cilindrada: ${this.cilindrada} cc`);
    }
  }
  
  // Ejemplo de uso
  const miCoche = new Coche("Toyota", "Corolla", "Gasolina");
  miCoche.mostrarInformacion();
  
  const miMotocicleta = new Motocicleta("Yamaha", "YZF-R3", 321);
  miMotocicleta.mostrarInformacion();
  