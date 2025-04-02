// definimos una funcion que realiza operaciones matematicas
export default function calculate(op: "sumar" | "restar", a: number, b:number): number {
    return op === "sumar" ? a + b : a - b
} 