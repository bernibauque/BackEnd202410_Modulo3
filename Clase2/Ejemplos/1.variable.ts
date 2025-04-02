// VAR:
function ejemploVar() {
    //console.log(variableVar); //undefined por hoisting
    var variableVar = 'Soy una variable var'
    console.log(variableVar);
}
ejemploVar()

// LET:
function ejemploLet() {
    //console.log(variableLet); // error igual que arriba
    let variableLet = 'Soy una variable let'
    console.log(variableLet);
}
ejemploLet()

// CONST:
function ejemploConst() {
    const variableConst = 'Soy una variable Const'
    console.log(variableConst);

    //variableConst = "Otro valor" // no le puedo asignar otro valor
}
ejemploConst()