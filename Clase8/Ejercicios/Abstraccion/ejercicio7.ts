// Interfaz Electrico
interface Electrico {
    cargarBateria(): void;
  }
  
  // Interfaz Combustible
  interface Combustible {
    llenarTanque(): void;
  }
  
  // Clase abstracta Transporte
  export abstract class Transporte {
    constructor(protected pasajeros: number) {}
  
    // Método abstracto que deben implementar las subclases
    abstract mover(): void;
  
    // Método concreto para describir el transporte
    describir(): void {
      console.log(`Este transporte lleva ${this.pasajeros} pasajeros.`);
    }
  }
  
  // Clase AutobusElectrico que extiende Transporte e implementa Electrico
  class AutobusElectrico extends Transporte implements Electrico {
    mover(): void {
      console.log("El autobús eléctrico se mueve por la ciudad.");
    }
  
    cargarBateria(): void {
      console.log("Cargando la batería del autobús...");
    }
  }
  
  // Clase Taxi que extiende Transporte e implementa Combustible
  class Taxi extends Transporte implements Combustible {
    mover(): void {
      console.log("El taxi se mueve por carretera.");
    }
  
    llenarTanque(): void {
      console.log("Llenando el tanque del taxi...");
    }
  }
  
  // Prueba del sistema
  const autobus = new AutobusElectrico(30);
  autobus.describir();         // Output: Este transporte lleva 30 pasajeros.
  autobus.cargarBateria();      // Output: Cargando la batería del autobús...
  autobus.mover();              // Output: El autobús eléctrico se mueve por la ciudad.
  
  const taxi = new Taxi(4);
  taxi.describir();             // Output: Este transporte lleva 4 pasajeros.
  taxi.llenarTanque();          // Output: Llenando el tanque del taxi...
  taxi.mover();                 // Output: El taxi se mueve por carretera.
  