class Taller {
    private _nombre: string;
    private _direccion: string;
    private _servicios: { nombreServicio: string; precio: number; descripcion: string }[];
    private _calificaciones: number[];

    constructor(nombre: string, direccion: string) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._servicios = [];
        this._calificaciones = [];
    }

    public agregarServicio(nombreServicio: string, precio: number, descripcion: string): void {
        if (precio < 0) {
            console.log("El precio del servicio no puede ser negativo.");
        } else {
            this._servicios.push({ nombreServicio, precio, descripcion });
            console.log(`Servicio '${nombreServicio}' agregado con precio $${precio}.`);
        }
    }

    public eliminarServicio(nombreServicio: string): void {
        const index = this._servicios.findIndex(servicio => servicio.nombreServicio === nombreServicio);
        if (index === -1) {
            console.log(`El servicio '${nombreServicio}' no está en la lista.`);
        } else {
            this._servicios.splice(index, 1);
            console.log(`Servicio '${nombreServicio}' eliminado.`);
        }
    }

    public listarServicios(): void {
        if (this._servicios.length === 0) {
            console.log("No hay servicios disponibles.");
            return;
        }
        console.log(`Servicios disponibles en ${this._nombre}:`);
        this._servicios.forEach(servicio => {
            console.log(`- ${servicio.nombreServicio}: $${servicio.precio} - ${servicio.descripcion}`);
        });
    }

    public agregarCalificacion(calificacion: number): void {
        if (calificacion < 1 || calificacion > 5) {
            console.log("La calificación debe estar entre 1 y 5.");
        } else {
            this._calificaciones.push(calificacion);
            console.log(`Calificación de ${calificacion} agregada.`);
        }
    }

    public calcularPromedioCalificaciones(): number {
        if (this._calificaciones.length === 0) {
            console.log("No hay calificaciones disponibles.");
            return 0;
        }
        const suma = this._calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
        return suma / this._calificaciones.length;
    }
}

// Uso
const taller = new Taller('Taller Rápido', 'Calle Secundaria 789');
taller.agregarServicio('Cambio de aceite', 30, 'Cambio de aceite del motor.');
taller.agregarServicio('Alineación de ruedas', -15, 'Alineación de las ruedas delanteras.');
taller.listarServicios();
taller.agregarCalificacion(5);
taller.agregarCalificacion(3);
taller.agregarCalificacion(6);  // Calificación fuera de rango
console.log(`Promedio de calificaciones: ${taller.calcularPromedioCalificaciones()}`);
taller.eliminarServicio('Reparación de frenos');
taller.eliminarServicio('Cambio de aceite');
taller.listarServicios();

