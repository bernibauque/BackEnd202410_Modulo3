// Interfaz para pagos online
interface PagoOnline {
    procesarPago(): void;
  }
  
  // Clase abstracta Pago
  abstract class Pago {
    constructor(protected monto: number) {}
  
    // Método concreto para validar el monto
    validarMonto(): boolean {
      return this.monto > 0;
    }
  
    // Método abstracto que deben implementar las subclases
    abstract completarPago(): void;
  }
  
  // Clase concreta que extiende Pago y también implementa PagoOnline
  class PagoConTarjeta extends Pago implements PagoOnline {
    procesarPago(): void {
      console.log("Procesando pago en línea...");
    }
  
    completarPago(): void {
      console.log(`Pago de $${this.monto} completado con tarjeta.`);
    }
  }
  
  // Prueba de la clase PagoConTarjeta
  const pago = new PagoConTarjeta(100);
  if (pago.validarMonto()) {
    pago.procesarPago();   // Output: Procesando pago en línea...
    pago.completarPago();  // Output: Pago de $100 completado con tarjeta.
  }
  