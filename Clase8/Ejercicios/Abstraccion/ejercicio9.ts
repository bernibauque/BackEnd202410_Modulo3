// Clase abstracta
export abstract class Producto {
    constructor(public nombre: string, public precio: number) {}

    abstract calcularDescuento(): number;

    mostrarDetalles(): string {
        return `${this.nombre}: $${this.precio}, Descuento: $${this.calcularDescuento()}`;
    }
}

// Clase concreta Electrónico
class Electronico extends Producto {
    constructor(nombre: string, precio: number, private garantia: number) {
        super(nombre, precio);
    }

    calcularDescuento(): number {
        return this.precio * 0.10; // 10% de descuento
    }
}

// Clase concreta Alimento
class Alimento extends Producto {
    constructor(nombre: string, precio: number, private fechaExpiracion: Date) {
        super(nombre, precio);
    }

    calcularDescuento(): number {
        const diasRestantes = Math.ceil((this.fechaExpiracion.getTime() - Date.now()) / (1000 * 3600 * 24));
        return diasRestantes < 5 ? this.precio * 0.20 : 0; // 20% si queda menos de 5 días
    }
}

// Clase OrdenCompra
class OrdenCompra {
    private productos: Producto[] = [];

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }

    calcularTotal(): number {
        return this.productos.reduce((total, producto) => total + (producto.precio - producto.calcularDescuento()), 0);
    }

    mostrarDetalles(): string {
        const listaProductos = this.productos.map(p => p.mostrarDetalles()).join('\n');
        return `Orden de Compra:\n${listaProductos}\nTotal: $${this.calcularTotal()}`;
    }
}

// Uso de las clases
const orden = new OrdenCompra();

const televisor = new Electronico("Televisor", 800, 2);
const manzana = new Alimento("Manzana", 1, new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));

orden.agregarProducto(televisor);
orden.agregarProducto(manzana);

console.log(orden.mostrarDetalles());
