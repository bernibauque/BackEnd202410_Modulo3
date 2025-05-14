// Paso 1: Importamos el modulo http
const http = require('http')

// Paso 2: Creamos el servidor
// - req: representa la solicitud
// - res: representa la respuesta
const server = http.createServer((req, res) => {
    // establecemos el codigo de estado de respuesta en 200 (ok)
    // indicando que salio exitosa
    res.statusCode = 200

    // configurar el encabezador 
    // - content-type: para que el cliente sepa el contenido
    // - text/plain: texto plano
    res.setHeader('Content-type', 'text/plain')

    // envia la respuesta al cliente con el mensaje y 
    // finalizamos la respuest
    res.end('Hola Chicas!')
})

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})

