//la funcion no se exporta y es privada al modulo
// ambos, funcion y name se exportan directamente

//funcion privada no exportada
const logCalculate = (area: number) => {
    console.log(`Calculate area: ${area}`);
}

// exportacion directa de la funcion
export const calculateTriangleArea = (base: number, height: number): number => {
    const area = (base * height) / 2
    logCalculate(area) // uso de la funcion privada 
    return area
}

export const TRIANGLE_NAME = 'Triangle'