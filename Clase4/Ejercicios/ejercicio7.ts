function procesarObjeto<T>(objeto: T): void {
    for (const propiedad in objeto) {
      if (Object.prototype.hasOwnProperty.call(objeto, propiedad)) {
        const valor = objeto[propiedad as keyof T];
        
        if (typeof valor === 'string') {
          console.log((valor as string).toLowerCase());
        } else if (typeof valor === 'number') {
          console.log((valor as number) ** 2);
        } else if (typeof valor === 'boolean') {
          console.log(!(valor as boolean));
        }
      }
    }
  }
  
  // Ejemplo de uso:
  const datosMixtos = {
    nombre: "Ana",
    edad: 30,
    activo: true
  };
  
  procesarObjeto(datosMixtos);
  // Salida: "ana", 900, false
  