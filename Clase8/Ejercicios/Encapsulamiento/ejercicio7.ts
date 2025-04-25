export class Bodega {
    private _nombre: string;                                 // Propiedad privada para el nombre de la bodega
    private _direccion: string;                              // Propiedad privada para la dirección
    private _inventario: { producto: string; cantidad: number }[]; // Inventario de productos

    constructor(nombre: string, direccion: string) {
        this._nombre = nombre;                               // Inicializa el nombre
        this._direccion = direccion;                         // Inicializa la dirección
        this._inventario = [];                               // Inicializa el inventario como un arreglo vacío
    }

    // Getter para el nombre
    public get nombre(): string {
        return this._nombre;                                 // Devuelve el nombre de la bodega
    }

    public agregarProducto(producto: string, cantidad: number): void {
        if (cantidad < 0) {
            console.log("La cantidad no puede ser negativa."); // Mensaje de error si la cantidad es negativa
        } else {
            this._inventario.push({ producto, cantidad });   // Agrega el producto al inventario
            console.log(`Producto '${producto}' agregado con cantidad ${cantidad}.`);
        }
    }

    public eliminarProducto(producto: string): void {
        const index = this._inventario.findIndex(item => item.producto === producto);
        if (index === -1) {
            console.log(`El producto '${producto}' no está en el inventario.`); // Mensaje si el producto no se encuentra
        } else {
            this._inventario.splice(index, 1);                  // Elimina el producto del inventario
            console.log(`Producto '${producto}' eliminado del inventario.`);
        }
    }

    public listarInventario(): { producto: string; cantidad: number }[] {
        return this._inventario;                              // Devuelve el inventario
    }
}

// Uso de la clase Bodega
const bodega = new Bodega('Bodega Central', 'Calle Principal 456');
bodega.agregarProducto('Manzanas', 50);
bodega.agregarProducto('Peras', -10);
console.log(`Inventario de ${bodega.nombre}:`, bodega.listarInventario()); // Accediendo al nombre con el getter
bodega.eliminarProducto('Naranjas');
bodega.eliminarProducto('Manzanas');
console.log(`Inventario de ${bodega.nombre}:`, bodega.listarInventario()); // Accediendo al nombre con el getter

