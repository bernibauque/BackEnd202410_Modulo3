// Clase CuentaBancaria con encapsulamiento
export class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    // Método para consultar el saldo
    public consultarSaldo(): number {
        return this.saldo;
    }

    // Método para depositar dinero
    public depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
        }
    }
}

// Ejemplo de uso
const miCuenta = new CuentaBancaria(1000);
console.log(miCuenta.consultarSaldo()); // Resultado: 1000
miCuenta.depositar(500);
console.log(miCuenta.consultarSaldo()); // Resultado: 1500
