// Definimos la interfaz Usuario
interface Usuario {
    nombre: string;
    edad?: number;  // Propiedad opcional
    readonly id: number;  // Propiedad de solo lectura
  }
  
  // Clase que implementa la interfaz Usuario
  class UsuarioConcreto implements Usuario {
    constructor(public nombre: string, public id: number, public edad?: number) {}
  }
  
  // Crear un nuevo usuario
  const usuario = new UsuarioConcreto("Ana", 1, 25);
  console.log(usuario.nombre);  // Output: Ana
  
  // Intentar cambiar la propiedad de solo lectura (esto dará un error)
  usuario.id = 2;  // Error: No se puede asignar a 'id' porque es de solo lectura
  