// Definimos la tupla para la cuenta bancaria
export type CuentaBancaria = [string, number, boolean]; // [nombrePropietario, saldo, activa]

// Creamos una lista de cuentas
let cuentasBancarias: CuentaBancaria[] = [];

// Función para añadir una nueva cuenta
function agregarCuenta(nombrePropietario: string, saldo: number, activa: boolean) {
    const nuevaCuenta: CuentaBancaria = [nombrePropietario, saldo, activa];
    cuentasBancarias.push(nuevaCuenta);
    console.log(`Cuenta añadida para ${nombrePropietario}.`);
}

// Función para mostrar todas las cuentas
function mostrarCuentas() {
    console.log("Cuentas del Banco:");
    cuentasBancarias.forEach(cuenta => {
        console.log(`Propietario: ${cuenta[0]}, Saldo: $${cuenta[1]}, Activa: ${cuenta[2] ? "Sí" : "No"}`);
    });
}

// Función para realizar una transferencia
function realizarTransferencia(indiceOrigen: number, indiceDestino: number, cantidad: number) {
    setTimeout(() => {
        if (cuentasBancarias[indiceOrigen] && cuentasBancarias[indiceDestino]) {
            if (cuentasBancarias[indiceOrigen][1] >= cantidad) {
                cuentasBancarias[indiceOrigen][1] -= cantidad; // Debitar
                cuentasBancarias[indiceDestino][1] += cantidad; // Acreditar
                console.log(`Transferencia de $${cantidad} de ${cuentasBancarias[indiceOrigen][0]} a ${cuentasBancarias[indiceDestino][0]} completada.`);
            } else {
                console.log("Fondos insuficientes para la transferencia.");
            }
        } else {
            console.log("Una de las cuentas no existe.");
        }
    }, 8000); // Después de 8 segundos
}

// Añadimos algunas cuentas
agregarCuenta("Pedro", 1000, true);
agregarCuenta("Sofía", 1500, true);

// Mostramos las cuentas
mostrarCuentas();

// Realizamos una transferencia
realizarTransferencia(0, 1, 200);
