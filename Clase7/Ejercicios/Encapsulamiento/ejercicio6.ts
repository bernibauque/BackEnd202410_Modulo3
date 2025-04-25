export class Producto {
    private _nombre: string;           // Propiedad privada para el nombre
    private _precio!: number;          // Propiedad privada para el precio (inicializada más tarde)
    private _cantidad!: number;        // Propiedad privada para la cantidad (inicializada más tarde)

    constructor(nombre: string, precio: number, cantidad: number) {
        this._nombre = nombre;
        this.precio = precio;           // Usando el setter
        this.cantidad = cantidad;       // Usando el setter
    }

    // Getter para el nombre
    public get nombre(): string {
        return this._nombre;            // Devuelve el nombre
    }

    // Getter para el precio
    public get precio(): number {
        return this._precio;            // Devuelve el precio
    }

    // Setter para el precio con validación
    public set precio(value: number) {
        if (value < 0) throw new Error("El precio no puede ser negativo."); // Verifica el precio
        this._precio = value;           // Asigna el precio
    }

    // Getter para la cantidad
    public get cantidad(): number {
        return this._cantidad;          // Devuelve la cantidad
    }

    // Setter para la cantidad con validación
    public set cantidad(value: number) {
        if (value < 0) throw new Error("La cantidad no puede ser negativa."); // Verifica la cantidad
        this._cantidad = value;         // Asigna la cantidad
    }
}

// Uso de la clase Producto
const producto = new Producto('Manzana', 1.5, 10);
console.log(producto.nombre);        // Muestra: Manzana
console.log(producto.precio);        // Muestra: 1.5
