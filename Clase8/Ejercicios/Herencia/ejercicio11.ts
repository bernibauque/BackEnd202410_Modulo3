// Interfaz de Mantenimiento
interface Mantenimiento {
    calcularCostoMantenimiento(): number;
  }
  
  // Clase base Vehiculo
  class Vehiculo {
    protected marca: string;
    protected modelo: string;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    detallesVehiculo(): void {
      console.log(`Vehículo: ${this.marca} ${this.modelo}`);
    }
  }
  
  // Clase derivada Automovil
  class Automovil extends Vehiculo implements Mantenimiento {
    private puertas: number;
  
    constructor(marca: string, modelo: string, puertas: number) {
      super(marca, modelo);
      this.puertas = puertas;
    }
  
    detallesVehiculo(): void {
      console.log(`Automóvil: ${this.marca} ${this.modelo}, Puertas: ${this.puertas}`);
    }
  
    calcularCostoMantenimiento(): number {
      return 300; // Costo fijo de mantenimiento
    }
  }
  
  // Clase derivada Moto
  class Moto extends Vehiculo implements Mantenimiento {
    private cilindrada: number;
  
    constructor(marca: string, modelo: string, cilindrada: number) {
      super(marca, modelo);
      this.cilindrada = cilindrada;
    }
  
    detallesVehiculo(): void {
      console.log(`Moto: ${this.marca} ${this.modelo}, Cilindrada: ${this.cilindrada}cc`);
    }
  
    calcularCostoMantenimiento(): number {
      return 100; // Costo fijo de mantenimiento
    }
  }
  
  // Ejemplo de uso
  const miAuto = new Automovil("Toyota", "Corolla", 4);
  miAuto.detallesVehiculo(); 
  console.log(`Costo de mantenimiento: $${miAuto.calcularCostoMantenimiento()}`);
  // Salida:
  // Automóvil: Toyota Corolla, Puertas: 4
  // Costo de mantenimiento: $300
  
  const miMoto = new Moto("Yamaha", "R1", 1000);
  miMoto.detallesVehiculo(); 
  console.log(`Costo de mantenimiento: $${miMoto.calcularCostoMantenimiento()}`);
  // Salida:
  // Moto: Yamaha R1, Cilindrada: 1000cc
  // Costo de mantenimiento: $100
  