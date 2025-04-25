// Definimos la interfaz Bebida
interface Bebida {
    preparar(): void;
  }
  
  // Clase Cafe que implementa Bebida
  class Cafe implements Bebida {
    preparar(): void {
      console.log("Preparando un café: moliendo granos, agregando agua caliente.");
    }
  }
  
  // Clase Te que implementa Bebida
  class Te implements Bebida {
    preparar(): void {
      console.log("Preparando té: calentando agua, agregando una bolsita de té.");
    }
  }
  
  // Usando las clases sin preocuparnos por su lógica interna
  const cafe = new Cafe();
  const te = new Te();
  
  cafe.preparar();  // Output: Preparando un café...
  te.preparar();    // Output: Preparando té...
  