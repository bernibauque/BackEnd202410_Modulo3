// Interfaz VehiculoElectrico
interface VehiculoElectrico {
    cargarBateria(): void;
  }
  
  // Clase abstracta Transporte
  abstract class Transporte {
    constructor(protected pasajeros: number) {}
  
    abstract mover(): void;
  
    describir(): void {
      console.log(`Este transporte lleva ${this.pasajeros} pasajeros.`);
    }
  }
  
  // Clase concreta AutobusElectrico
  class AutobusElectrico extends Transporte implements VehiculoElectrico {
    mover(): void {
      console.log("El autobús eléctrico se mueve por la ciudad.");
    }
  
    cargarBateria(): void {
      console.log("Cargando la batería del autobús...");
    }
  }
  
  // Prueba de la clase AutobusElectrico
  const autobus = new AutobusElectrico(30);
  autobus.describir();      // Output: Este transporte lleva 30 pasajeros.
  autobus.cargarBateria();  // Output: Cargando la batería del autobús...
  autobus.mover();          // Output: El autobús eléctrico se mueve por la ciudad.
  