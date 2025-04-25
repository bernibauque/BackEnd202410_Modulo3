// Clase abstracta
export abstract class Persona {
    constructor(public nombre: string, public edad: number) {}

    abstract mostrarDetalles(): string;
}

// Clase concreta Estudiante
class Estudiante extends Persona {
    constructor(nombre: string, edad: number, public matricula: string) {
        super(nombre, edad);
    }

    mostrarDetalles(): string {
        return `Estudiante: ${this.nombre}, Edad: ${this.edad}, Matrícula: ${this.matricula}`;
    }
}

// Clase concreta Profesor
class Profesor extends Persona {
    constructor(nombre: string, edad: number, public especialidad: string) {
        super(nombre, edad);
    }

    mostrarDetalles(): string {
        return `Profesor: ${this.nombre}, Edad: ${this.edad}, Especialidad: ${this.especialidad}`;
    }
}

// Clase Curso
class Curso {
    private estudiantes: Estudiante[] = [];

    constructor(public nombre: string, public profesor: Profesor) {}

    agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante);
    }

    mostrarDetalles(): string {
        const listaEstudiantes = this.estudiantes.map(e => e.mostrarDetalles()).join('\n');
        return `Curso: ${this.nombre}\nProfesor: ${this.profesor.mostrarDetalles()}\nEstudiantes:\n${listaEstudiantes}`;
    }
}

// Uso de las clases
const profesor = new Profesor("Dr. Smith", 45, "Matemáticas");
const curso = new Curso("Álgebra", profesor);

const estudiante1 = new Estudiante("Alice", 20, "2023001");
const estudiante2 = new Estudiante("Bob", 22, "2023002");

curso.agregarEstudiante(estudiante1);
curso.agregarEstudiante(estudiante2);

console.log(curso.mostrarDetalles());
