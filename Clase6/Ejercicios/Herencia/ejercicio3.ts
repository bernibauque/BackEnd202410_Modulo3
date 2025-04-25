// Interfaces
interface Volador {
    volar(): void;
  }
  
  interface Transportable {
    transportar(): void;
  }
  
  // Clase que implementa múltiples interfaces
  class Avion implements Volador, Transportable {
    volar(): void {
      console.log("El avión está volando.");
    }
  
    transportar(): void {
      console.log("El avión está transportando pasajeros.");
    }
  }
  
  // Ejemplo
  const miAvion = new Avion();
  miAvion.volar(); // El avión está volando.
  miAvion.transportar(); // El avión está transportando pasajeros.
  