export const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
  };
  
  for (const propiedad in persona) {
    if (Object.prototype.hasOwnProperty.call(persona, propiedad)) {
      console.log(propiedad); // Ej: 'nombre', 'edad', 'ciudad'
      
      // Usamos una aserción de tipo para acceder a los valores
      console.log(persona[propiedad as keyof typeof persona]); // Ej: 'Ana', 25, 'Madrid'
    }
  }
  
  