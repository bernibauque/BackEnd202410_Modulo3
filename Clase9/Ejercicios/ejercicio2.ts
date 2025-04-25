// Definimos la tupla para el pedido
type PedidoFlor = [string, number, string]; // [nombreCliente, cantidad, tipoFlor]

// Creamos una lista de pedidos
let pedidos: PedidoFlor[] = [];

// Función para añadir un nuevo pedido
function agregarPedido(nombreCliente: string, cantidad: number, tipoFlor: string) {
    const nuevoPedido: PedidoFlor = [nombreCliente, cantidad, tipoFlor];
    pedidos.push(nuevoPedido);
    console.log(`Pedido añadido para ${nombreCliente}.`);
}

// Función para programar el envío de un pedido
function enviarPedido(indice: number) {
    setTimeout(() => {
        if (pedidos[indice]) {
            console.log(`El pedido para ${pedidos[indice][0]} ha sido enviado.`);
            pedidos.splice(indice, 1); // Eliminar el pedido de la lista
        } else {
            console.log("Pedido no encontrado.");
        }
    }, 5000); // Después de 5 segundos
}

// Función para mostrar los pedidos
function mostrarPedidos() {
    console.log("Pedidos pendientes de envío:");
    pedidos.forEach((pedido, indice) => {
        console.log(`${indice}: Cliente: ${pedido[0]}, Cantidad: ${pedido[1]}, Tipo de Flor: ${pedido[2]}`);
    });
}

// Añadimos algunos pedidos
agregarPedido("Juan", 12, "Rosas");
agregarPedido("Ana", 5, "Tulipanes");

// Mostramos los pedidos
mostrarPedidos();

// Simulamos el envío del primer pedido
enviarPedido(0);
