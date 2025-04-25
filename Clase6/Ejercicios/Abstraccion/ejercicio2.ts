// Clase abstracta Vehiculo
export abstract class Vehiculo {
    constructor(protected velocidad: number) {}
  
    // Método abstracto que deben implementar las subclases
    abstract mover(): void;
  
    // Método concreto común a todos los vehículos
    acelerar(): void {
      this.velocidad += 10;
      console.log(`Acelerando a ${this.velocidad} km/h`);
    }
  }
  
  // Clase concreta Auto que extiende Vehiculo
  class Auto extends Vehiculo {
    mover(): void {
      console.log("El auto se mueve por carretera.");
    }
  }
  
  // Clase concreta Bicicleta que extiende Vehiculo
  class Bicicleta extends Vehiculo {
    mover(): void {
      console.log("La bicicleta se mueve por ciclovía.");
    }
  }
  
  // Prueba de las clases
  const auto = new Auto(50);
  auto.acelerar();   // Output: Acelerando a 60 km/h
  auto.mover();      // Output: El auto se mueve por carretera.
  
  const bicicleta = new Bicicleta(10);
  bicicleta.acelerar();  // Output: Acelerando a 20 km/h
  bicicleta.mover();     // Output: La bicicleta se mueve por ciclovía.
  