// Clase abstracta Producto
export abstract class Producto {
    constructor(protected nombre: string, protected precio: number) {}
  
    // Método abstracto que las subclases deben implementar
    abstract calcularDescuento(): number;
  
    // Método concreto para mostrar información del producto
    mostrarInformacion(): void {
      console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
    }
  }
  
  // Subclase Ropa que extiende Producto
  class Ropa extends Producto {
    calcularDescuento(): number {
      return this.precio * 0.90; // 10% de descuento
    }
  }
  
  // Subclase Electronica que extiende Producto
  class Electronica extends Producto {
    calcularDescuento(): number {
      return this.precio * 0.95; // 5% de descuento
    }
  }
  
  // Prueba de las clases
  const camisa = new Ropa("Camisa", 50);
  const laptop = new Electronica("Laptop", 1000);
  
  camisa.mostrarInformacion();  // Output: Producto: Camisa, Precio: $50
  console.log(`Precio con descuento: $${camisa.calcularDescuento()}`); // $45
  
  laptop.mostrarInformacion();  // Output: Producto: Laptop, Precio: $1000
  console.log(`Precio con descuento: $${laptop.calcularDescuento()}`); // $950
  