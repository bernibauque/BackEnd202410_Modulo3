// Clase base
class Compania {
    private nombreCompania: string;
    protected ingresosAnuales: number;
  
    constructor(nombreCompania: string, ingresosAnuales: number) {
      this.nombreCompania = nombreCompania;
      this.ingresosAnuales = ingresosAnuales;
    }
  
    obtenerNombreCompania(): string {
      return this.nombreCompania;
    }
  }
  
  // Clase derivada
  class EmpresaTecnologia extends Compania {
    constructor(nombreCompania: string, ingresosAnuales: number) {
      super(nombreCompania, ingresosAnuales);
    }
  
    calcularIngresosDobles(): number {
      return this.ingresosAnuales * 2;
    }
  }
  
  // Ejemplo
  const empresa = new EmpresaTecnologia("TechSoft", 1000000);
  console.log(empresa.obtenerNombreCompania()); // TechSoft
  console.log(empresa.calcularIngresosDobles()); // 2000000
  