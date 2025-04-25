// Interfaz de Envio
interface Envio {
    calcularEnvio(): number;
  }
  
  // Clase base
  class Producto {
    protected nombre: string;
    protected precio: number;
  
    constructor(nombre: string, precio: number) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    detallesProducto(): void {
      console.log(`${this.nombre} tiene un precio de $${this.precio}.`);
    }
  }
  
  // Clase derivada Electronico
  class Electronico extends Producto implements Envio {
    constructor(nombre: string, precio: number) {
      super(nombre, precio);
    }
  
    detallesProducto(): void {
      console.log(`Producto: ${this.nombre} (Electrónico) - Precio: $${this.precio}`);
    }
  
    calcularEnvio(): number {
      return this.precio * 0.10; // El envío es el 10% del precio
    }
  }
  
  // Clase derivada Ropa
  class Ropa extends Producto {
    private talla: string;
  
    constructor(nombre: string, precio: number, talla: string) {
      super(nombre, precio);
      this.talla = talla;
    }
  
    detallesProducto(): void {
      console.log(`Producto: ${this.nombre} (Ropa) - Precio: $${this.precio} - Talla: ${this.talla}`);
    }
  }
  
  // Ejemplo de uso
  const celular = new Electronico("Celular", 800);
  celular.detallesProducto(); 
  console.log(`Costo de envío: $${celular.calcularEnvio()}`);
  // Salida:
  // Producto: Celular (Electrónico) - Precio: $800
  // Costo de envío: $80
  
  const camisa = new Ropa("Camisa", 30, "M");
  camisa.detallesProducto();
  // Salida:
  // Producto: Camisa (Ropa) - Precio: $30 - Talla: M
  