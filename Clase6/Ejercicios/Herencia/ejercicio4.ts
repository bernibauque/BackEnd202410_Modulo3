// Clase base
class Flor {
    describir(): void {
      console.log("Es una flor.");
    }
  }
  
  // Clases derivadas
  class Rosa extends Flor {
    describir(): void {
      console.log("Es una rosa, una flor de pétalos rojos.");
    }
  }
  
  class Girasol extends Flor {
    describir(): void {
      console.log("Es un girasol, una flor que sigue al sol.");
    }
  }
  
  // Ejemplo
  const rosa = new Rosa();
  rosa.describir(); // Es una rosa, una flor de pétalos rojos.
  
  const girasol = new Girasol();
  girasol.describir(); // Es un girasol, una flor que sigue al sol.
  