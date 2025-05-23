// Objetivo - Creamos un payload personalizado:

// 1. importacion
const jwt = require('jsonwebtoken')

// clave secreta
const secretKey = 'mi_clave_secreta'

// 2. Definimos el payload
const payload = {
    userId: 123,
    role: "admin",
    name: "Gise Rastenis",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000 + (60 * 60))
}

// 3. Crear el token JWT
const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' })
console.log("Token jwt generado:", token);


// 4. Decodificar y verificar el token
try {
    const decoded = jwt.verify(token, secretKey)
    console.log('Payload decodificado:', decoded);
} catch (error) {
    console.error('Token invalido o expirado:', error.message);
}
