export let valor: any = "123";
let valorNumerico: number = (valor as unknown as number);

console.log(valorNumerico); // Esto puede producir un error en tiempo de ejecución
