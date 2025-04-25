class CuentaBancaria {
    protected saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Depositaste ${cantidad}. Saldo actual: ${this.saldo}`);
        }
    }

    retirar(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Retiraste ${cantidad}. Saldo actual: ${this.saldo}`);
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

// Subclase: CuentaAhorros
class CuentaAhorros extends CuentaBancaria {
    agregarInteres(tasa: number): void {
        this.saldo += this.saldo * tasa;
        console.log(`Interés agregado. Saldo actual: ${this.saldo}`);
    }
}

// Pruebas
const cuentaAhorros = new CuentaAhorros(1000);
cuentaAhorros.depositar(200); // Salida: Depositaste 200. Saldo actual: 1200
cuentaAhorros.agregarInteres(0.05); // Salida: Interés agregado. Saldo actual: 1260
