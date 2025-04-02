// declaramos primero las funciones y constantes
// y luego las exportamos al final del archivo utilizando la exportacion separada
const calculateRectangleArea = (width: number, height: number): number => {
    return width * height
}

const RECTANGLE_NAME ="Rectangle"

// exportacion separada
export {calculateRectangleArea, RECTANGLE_NAME}