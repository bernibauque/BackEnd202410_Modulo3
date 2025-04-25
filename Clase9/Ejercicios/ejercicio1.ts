// Definimos la tupla para el mueble
type Mueble = [number, string, number]; // [id, nombre, precio]

// Creamos un inventario
let inventario: Mueble[] = [];

// Función para añadir un nuevo mueble
function agregarMueble(id: number, nombre: string, precio: number) {
    const nuevoMueble: Mueble = [id, nombre, precio];
    inventario.push(nuevoMueble);
    console.log(`Mueble ${nombre} añadido con éxito.`);
}

// Función para mostrar el inventario
function mostrarInventario() {
    console.log("Inventario de la Mueblería:");
    inventario.forEach(mueble => {
        const [id, nombre, precio] = mueble;
        console.log(`ID: ${id}, Nombre: ${nombre}, Precio: $${precio}`);
    });
}

// Función para actualizar el precio de un mueble
function actualizarPrecio(id: number, nuevoPrecio: number) {
    setTimeout(() => {
        const mueble = inventario.find(m => m[0] === id);
        if (mueble) {
            mueble[2] = nuevoPrecio; // Actualizar el precio
            console.log(`El precio del mueble ${mueble[1]} se ha actualizado a $${nuevoPrecio}.`);
        } else {
            console.log("Mueble no encontrado.");
        }
    }, 3000); // Después de 3 segundos
}

// Añadimos algunos muebles
agregarMueble(1, "Sofá", 300);
agregarMueble(2, "Mesa", 150);

// Mostramos el inventario
mostrarInventario();

// Actualizamos el precio del sofá
actualizarPrecio(1, 350);
