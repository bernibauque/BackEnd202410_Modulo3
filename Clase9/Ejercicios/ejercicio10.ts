// Clase base Producto
export class Producto {
    constructor(public nombre: string, public precio: number, public categoria: string) {}
}

// Clase Cosmetico que extiende Producto
class Cosmetico extends Producto {
    constructor(nombre: string, precio: number, public marca: string) {
        super(nombre, precio, "Cosmético");
    }

    // Método para mostrar información del cosmético
    mostrarInfo(): void {
        console.log(`Cosmético - Nombre: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio}`);
    }
}

// Clase TratamientoCapilar que extiende Producto
class TratamientoCapilar extends Producto {
    constructor(nombre: string, precio: number, public tipoDeCabello: string) {
        super(nombre, precio, "Tratamiento Capilar");
    }

    // Método para mostrar información del tratamiento capilar
    mostrarInfo(): void {
        console.log(`Tratamiento Capilar - Nombre: ${this.nombre}, Tipo de Cabello: ${this.tipoDeCabello}, Precio: $${this.precio}`);
    }
}

// Clase Inventario
class Inventario {
    private productos: Producto[];

    constructor() {
        this.productos = [];
    }

    // Método para agregar un producto
    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
        console.log(`${producto.nombre} ha sido agregado al inventario.`);
    }

    // Método para eliminar un producto por nombre
    eliminarProducto(nombre: string): void {
        this.productos = this.productos.filter(producto => producto.nombre !== nombre);
        console.log(`${nombre} ha sido eliminado del inventario.`);
    }

    // Método para buscar productos por categoría
    buscarPorCategoria(categoria: string): Producto[] {
        return this.productos.filter(producto => producto.categoria === categoria);
    }

    // Método para mostrar todos los productos
    mostrarInventario(): void {
        this.productos.forEach(producto => {
            if (producto instanceof Cosmetico) {
                producto.mostrarInfo();
            } else if (producto instanceof TratamientoCapilar) {
                producto.mostrarInfo();
            }
        });
    }
}

// Ejemplo de uso
const inventario = new Inventario();

const labial = new Cosmetico("Labial Rojo", 15, "MAC");
const shampoo = new TratamientoCapilar("Shampoo Hidratante", 20, "Cabello Seco");

inventario.agregarProducto(labial);
inventario.agregarProducto(shampoo);

inventario.mostrarInventario();  // Mostrar todos los productos
console.log(inventario.buscarPorCategoria("Cosmético"));  // Buscar productos por categoría
inventario.eliminarProducto("Labial Rojo");  // Eliminar un producto
