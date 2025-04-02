// Tipos diferenciados en typescript

//1. Any: Permite almacenar cualquier tipo de valor sin restriccion
let anyValue: any = "Hola soy Any" //string
console.log(anyValue);
anyValue = 42; //numero
console.log(anyValue);
anyValue = {name: "Typescript"} //objeto
console.log(anyValue);

//2. Unknow: Similar a any pero requiere verificacion antes de su uso
let unknowValue: unknown = "Hola soy unknow"
console.log(unknowValue);

//3. Void: Se usa en funciones que no retornan valor
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Esto es una funcion void")

//4. never 
function infiniteBucle() : never {
    while (true) {
        console.log("Este bucle nunca termina!!!");
    }
}
//infiniteBucle()

//5. Null y Undefined
let valorNull: string | null = null; //
console.log(valorNull);

valorNull = "Ahora tine un valor"
console.log(valorNull);





