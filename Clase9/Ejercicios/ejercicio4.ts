// Definimos la tupla para los amigos
type Amigo = [string, boolean]; // [nombre, enLinea]

// Creamos una lista de amigos
let amigos: Amigo[] = [];

// Función para añadir un nuevo amigo
function agregarAmigo(nombre: string, enLinea: boolean) {
    const nuevoAmigo: Amigo = [nombre, enLinea];
    amigos.push(nuevoAmigo);
    console.log(`Amigo ${nombre} añadido con éxito.`);
}

// Función para mostrar los amigos
function mostrarAmigos() {
    console.log("Lista de amigos:");
    amigos.forEach(amigo => {
        console.log(`${amigo[0]} - Estado: ${amigo[1] ? "En línea" : "Fuera de línea"}`);
    });
}

// Función para verificar el estado de los amigos
function verificarEstado() {
    setInterval(() => {
        amigos.forEach(amigo => {
            if (!amigo[1]) {
                amigo[1] = Math.random() < 0.5; // Cambiar aleatoriamente el estado
                if (amigo[1]) {
                    console.log(`Notificación: ${amigo[0]} se ha puesto en línea.`);
                }
            }
        });
    }, 5000); // Cada 5 segundos
}

// Añadimos algunos amigos
agregarAmigo("Mario", false);
agregarAmigo("Ana", true);

// Mostramos los amigos
mostrarAmigos();

// Iniciamos la verificación del estado de los amigos
verificarEstado();
