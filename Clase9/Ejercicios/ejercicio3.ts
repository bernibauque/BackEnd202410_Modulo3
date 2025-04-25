// Definimos la tupla para la póliza
type Poliza = [number, string, number, Date]; // [id, nombreCliente, montoAsegurado, fechaRenovacion]

// Creamos una lista de pólizas
let polizas: Poliza[] = [];

// Función para añadir una nueva póliza
function agregarPoliza(id: number, nombreCliente: string, montoAsegurado: number, fechaRenovacion: Date) {
    const nuevaPoliza: Poliza = [id, nombreCliente, montoAsegurado, fechaRenovacion];
    polizas.push(nuevaPoliza);
    console.log(`Póliza añadida para ${nombreCliente}.`);
}

// Función para programar la renovación de una póliza
function renovarPoliza(indice: number) {
    setTimeout(() => {
        if (polizas[indice]) {
            const fechaActualizada = new Date(polizas[indice][3]);
            fechaActualizada.setFullYear(fechaActualizada.getFullYear() + 1); // Renovar por un año
            polizas[indice][3] = fechaActualizada; // Actualizar la fecha de renovación
            console.log(`La póliza de ${polizas[indice][1]} ha sido renovada. Nueva fecha de renovación: ${fechaActualizada}`);
        } else {
            console.log("Póliza no encontrada.");
        }
    }, 10000); // Después de 10 segundos
}

// Función para mostrar todas las pólizas activas
function mostrarPolizas() {
    console.log("Pólizas activas:");
    polizas.forEach(poliza => {
        console.log(`ID: ${poliza[0]}, Cliente: ${poliza[1]}, Monto Asegurado: $${poliza[2]}, Fecha de Renovación: ${poliza[3]}`);
    });
}

// Añadimos algunas pólizas
agregarPoliza(1, "Carlos", 50000, new Date(2024, 0, 1));
agregarPoliza(2, "Laura", 75000, new Date(2024, 0, 15));

// Mostramos las pólizas
mostrarPolizas();

// Programamos la renovación de la primera póliza
renovarPoliza(0);
