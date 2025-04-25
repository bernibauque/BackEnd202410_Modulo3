class Libro {
    private _titulo: string;
    private _autor: string;
    private _anioPublicacion: number;
    private _disponible: boolean;

    constructor(titulo: string, autor: string, anioPublicacion: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._anioPublicacion = anioPublicacion;
        this._disponible = true; // El libro está disponible al inicio
    }

    public prestar(): void {
        if (!this._disponible) {
            console.log("El libro ya está prestado.");
        } else {
            this._disponible = false;
            console.log(`Has prestado el libro: ${this._titulo}`);
        }
    }

    public devolver(): void {
        if (this._disponible) {
            console.log("El libro no ha sido prestado.");
        } else {
            this._disponible = true;
            console.log(`Has devuelto el libro: ${this._titulo}`);
        }
    }

    public get disponible(): boolean {
        return this._disponible;
    }
}

// Uso
export const libro = new Libro('1984', 'George Orwell', 1949);
libro.prestar();
console.log(`¿Está disponible? ${libro.disponible}`);
libro.devolver();
console.log(`¿Está disponible? ${libro.disponible}`);
