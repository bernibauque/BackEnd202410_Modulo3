class Banco {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    // Método para depositar dinero
    depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Se han depositado ${cantidad}. Saldo actual: ${this.saldo}`);
        } else {
            console.log("Cantidad de depósito no válida.");
        }
    }

    // Método para retirar dinero
    retirar(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se han retirado ${cantidad}. Saldo actual: ${this.saldo}`);
        } else {
            console.log("Cantidad de retiro no válida o insuficiente.");
        }
    }

    // Método para consultar el saldo
    consultarSaldo(): number {
        return this.saldo;
    }
}

// Pruebas
const miBanco = new Banco(1000);
miBanco.depositar(500);  // Salida: Se han depositado 500. Saldo actual: 1500
miBanco.retirar(200);    // Salida: Se han retirado 200. Saldo actual: 1300
console.log(miBanco.consultarSaldo()); // Salida: 1300
