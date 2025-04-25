// Clase Servicio
abstract class Servicio {
    constructor(public nombre: string, public duracion: number, public precio: number) {}

    // Método abstracto para mostrar detalles del servicio
    abstract mostrarDetalles(): void;
}

// Clase CorteDeCabello que extiende Servicio
class CorteDeCabello extends Servicio {
    constructor() {
        super("Corte de Cabello", 60, 30); // Duración 60 minutos, precio 30 dólares
    }

    mostrarDetalles(): void {
        console.log(`${this.nombre} - Duración: ${this.duracion} min, Precio: $${this.precio}`);
    }
}

// Clase Manicura que extiende Servicio
class Manicura extends Servicio {
    constructor() {
        super("Manicura", 45, 25); // Duración 45 minutos, precio 25 dólares
    }

    mostrarDetalles(): void {
        console.log(`${this.nombre} - Duración: ${this.duracion} min, Precio: $${this.precio}`);
    }
}

// Clase Cliente
export class Cliente {
    constructor(public nombre: string, public telefono: string) {}

    mostrarInfo(): void {
        console.log(`Cliente: ${this.nombre}, Teléfono: ${this.telefono}`);
    }
}

// Clase Reserva
class Reserva {
    private serviciosReservados: Servicio[] = [];
    private horario: string;

    constructor(public cliente: Cliente, horario: string) {
        this.horario = horario;
    }

    // Método para agregar un servicio a la reserva
    agregarServicio(servicio: Servicio): void {
        this.serviciosReservados.push(servicio);
        console.log(`Servicio ${servicio.nombre} agregado a la reserva de ${this.cliente.nombre}.`);
    }

    // Método para mostrar detalles de la reserva
    mostrarDetallesReserva(): void {
        console.log(`Reserva para ${this.cliente.nombre} a las ${this.horario}:`);
        this.serviciosReservados.forEach(servicio => servicio.mostrarDetalles());
    }
}

// Ejemplo de uso
const cliente = new Cliente("María López", "123-4567");
const reserva = new Reserva(cliente, "10:00 AM");

const corte = new CorteDeCabello();
const manicura = new Manicura();

reserva.agregarServicio(corte);  // Agregar corte de cabello a la reserva
reserva.agregarServicio(manicura);  // Agregar manicura a la reserva

reserva.mostrarDetallesReserva();  // Mostrar detalles de la reserva
