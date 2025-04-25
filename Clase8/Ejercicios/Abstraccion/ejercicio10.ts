// Clase abstracta
export abstract class Publicacion {
    constructor(public titulo: string, public autor: string, public año: number) {}

    abstract mostrarDetalles(): string;
}

// Clase concreta Libro
class Libro extends Publicacion {
    constructor(titulo: string, autor: string, año: number, public isbn: string) {
        super(titulo, autor, año);
    }

    mostrarDetalles(): string {
        return `Libro: ${this.titulo}, Autor: ${this.autor}, Año: ${this.año}, ISBN: ${this.isbn}`;
    }
}

// Clase concreta Revista
class Revista extends Publicacion {
    constructor(titulo: string, autor: string, año: number, public numero: number) {
        super(titulo, autor, año);
    }

    mostrarDetalles(): string {
        return `Revista: ${this.titulo}, Autor: ${this.autor}, Año: ${this.año}, Número: ${this.numero}`;
    }
}

// Clase Miembro
class Miembro {
    constructor(public nombre: string, public id: number) {}

    mostrarDetalles(): string {
        return `Miembro: ${this.nombre}, ID: ${this.id}`;
    }
}

// Clase Biblioteca
class Biblioteca {
    private publicaciones: Publicacion[] = [];
    private prestamos: Map<Miembro, Publicacion[]> = new Map();

    agregarPublicacion(publicacion: Publicacion): void {
        this.publicaciones.push(publicacion);
    }

    prestar(publicacion: Publicacion, miembro: Miembro): void {
        if (!this.prestamos.has(miembro)) {
            this.prestamos.set(miembro, []);
        }
        this.prestamos.get(miembro)!.push(publicacion);
    }

    mostrarPrestamos(): string {
        let resultado = 'Préstamos:\n';
        this.prestamos.forEach((publicaciones, miembro) => {
            resultado += `${miembro.mostrarDetalles()}\nPublicaciones:\n`;
            publicaciones.forEach(p => {
                resultado += `  - ${p.mostrarDetalles()}\n`;
            });
        });
        return resultado;
    }
}

// Uso de las clases
const biblioteca = new Biblioteca();

const libro1 = new Libro("1984", "George Orwell", 1949, "123456789");
const revista1 = new Revista("National Geographic", "Varios", 2023, 5);

biblioteca.agregarPublicacion(libro1);
biblioteca.agregarPublicacion(revista1);

const miembro1 = new Miembro("Carlos", 1);
biblioteca.prestar(libro1, miembro1);

console.log(biblioteca.mostrarPrestamos());
