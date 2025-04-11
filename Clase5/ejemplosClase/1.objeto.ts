// Definicion de una interfaz
interface Estudiante {
    nombre: string;
    edad: number;
    materiaFavorita: string;
    promedio: number;

    saludar: () => void //metodo saludar que no devuelve valor
    obtenerDetalles: () => string // metodo que devuelve string (con detalles del alumno)
}

// creacion de un objeto que cumple con la interfaz estudiante
const estudiante1: Estudiante = {
    nombre: "Ana",
    edad: 16,
    materiaFavorita: 'Lengua',
    promedio: 9.5,

    // implementacion de los metodos
    // Metodo 1: saludar
    saludar: function() {
        console.log(`Hola soy ${estudiante1.nombre}`);
    },

    obtenerDetalles: function() {
        return `tengo ${estudiante1.edad} anios y mi materia favorita es ${estudiante1.materiaFavorita}`;
    }
}

// uso del metodo saludar
estudiante1.saludar()

//uso del metodo obtenerDetalles
const detalles = estudiante1.obtenerDetalles()
console.log(detalles);
