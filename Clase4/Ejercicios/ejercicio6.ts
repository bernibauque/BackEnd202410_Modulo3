function filtrarElementos<T>(arreglo: T[]): string[] {
    const resultados: string[] = [];
    
    for (const elemento of arreglo) {
      if (typeof elemento === 'string') {
        resultados.push((elemento as string).toUpperCase());
      }
    }
    
    return resultados;
  }
  
  // Ejemplo de uso:
  const valoresMixtos: (number | string | boolean)[] = [123, "hola", true, "typescript", false];
  const filtrados = filtrarElementos(valoresMixtos);
  console.log(filtrados); // ["HOLA", "TYPESCRIPT"]
  