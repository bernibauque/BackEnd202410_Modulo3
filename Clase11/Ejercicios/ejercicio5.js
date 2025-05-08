// Función que simula la actualización de datos de usuario
const actualizarUsuario = () => new Promise(resolve => setTimeout(() => resolve("Usuario actualizado"), 1500));

// Función que simula la actualización de pedidos
const actualizarPedidos = () => new Promise(resolve => setTimeout(() => resolve("Pedidos actualizados"), 1500));

// Función que ejecuta ambas actualizaciones en paralelo
async function actualizarTodo() {
    // Ejecutamos ambas promesas en paralelo para optimizar el tiempo de espera
    const [resultadoUsuario, resultadoPedidos] = await Promise.all([actualizarUsuario(), actualizarPedidos()]);
    console.log(resultadoUsuario, resultadoPedidos); // Mostramos los resultados de ambas actualizaciones
}

actualizarTodo(); // Inicia la actualización en paralelo
