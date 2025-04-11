class Estudiante {
    public nombre: string;
    public edad: number;
    public curso: string;
  
    constructor(nombre: string, edad: number, curso: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.curso = curso;
    }
  
    public mostrarInformacion(): void {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`);
    }
  }
  
  class RegistroEstudiantes {
    private estudiantes: Estudiante[] = [];
  
    public agregarEstudiante(estudiante: Estudiante): void {
      this.estudiantes.push(estudiante);
    }
  
    public mostrarEstudiantes(): void {
      console.log("Lista de Estudiantes:");
      this.estudiantes.forEach(estudiante => estudiante.mostrarInformacion());
    }
  }
  
  // Ejemplo de uso
  const registro = new RegistroEstudiantes();
  export const estudiante1 = new Estudiante("Ana", 20, "Matemáticas");
  const estudiante2 = new Estudiante("Luis", 22, "Física");
  
  registro.agregarEstudiante(estudiante1);
  registro.agregarEstudiante(estudiante2);
  registro.mostrarEstudiantes();
  