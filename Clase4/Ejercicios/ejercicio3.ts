function identidad<T>(valor: T): T {
    return valor;
  }
  
  // Llamadas de ejemplo:
  console.log(identidad<number>(5));    // 5
  console.log(identidad<string>("Hola")); // "Hola"
  