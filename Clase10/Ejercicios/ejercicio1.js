function prepararPedido(plato, tiempo, callback) {
    console.log(`⏳ Preparando ${plato}...`);

    setTimeout(() => {
        console.log(`✅ ${plato} está listo.`);
        callback();
    }, tiempo);
}

function completarTodosLosPedidos() {
    console.log("🍽️ ¡Todos los pedidos han sido completados!");
}

// Simulación de pedidos
prepararPedido("Pizza", 3000, () => {
    prepararPedido("Hamburguesa", 2000, () => {
        prepararPedido("Ensalada", 1000, completarTodosLosPedidos);
    });
});
