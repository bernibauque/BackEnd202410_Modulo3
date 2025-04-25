export const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    añoPublicacion: 1943,
    descripcion: function() {
      return `${this.titulo} es un libro escrito por ${this.autor} en ${this.añoPublicacion}.`;
    }
  };
  
  console.log(libro.descripcion());
  