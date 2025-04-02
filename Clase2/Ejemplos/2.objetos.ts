// 1. Definimos un objeto basico
let auto = {
    marca: 'Toyota',
    modelo: "corolla",
    anio: 2022
}
// mostramos las propiedades del obj en consola
console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Anio: ${auto.anio}`);

// 2. Declaracion explicita del tipo de un objeto
let libro : {titulo : string; autor : string; anio : number} = {
    titulo: '100 anios de soledad',
    autor: "Garcia Marquez",
    anio: 1984
}
// mostramos las propiedades del obj en consola
console.log(`Titulo: ${libro.titulo}, autor: ${libro.autor}, Anio: ${libro.anio}`);

// 3. Propiedades opcionales
let estudiante: {nombre: string; edad?: number} = {
    nombre: "Berni"
}
console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad ?? "Desconocida"}`);


// 4. Metodos en un objeto
let perro = {
    nombre: "Blaki",
    raza: "Caniche",
    ladrar: function() {
        return `${this.nombre} esta ladrando!`
    }
}
console.log(perro.ladrar());

