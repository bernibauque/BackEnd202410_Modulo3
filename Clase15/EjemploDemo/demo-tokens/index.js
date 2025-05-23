//importaciones
const express = require('express')
const jwt = require('jsonwebtoken')

//instancia de express
const app = express()
// Puerto
const PORT = 3000

// Clave secreta
SECRET_KEY = 'TODO_NODE'

// middleware para validar el token
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'] // los tokens suelen enviarse con el header de autorizacion
    const token = authHeader && authHeader.split(' ')[1] // si existe el header, que extraiga el token

    if (!token) {
        return res.status(401).json({ message: 'Token no ingresado' })
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        req.user = decoded // se agrega la info del usuario objeto de la soli
        next()
    } catch (err) {
        res.status(401).json({ message: 'Token invalido o expirado' })
    }
}

// Rutas para generar un token
// Ruta simple para obtener usuario
app.get('/login', (req, res) => {
    // en un caso real se verificca don bd
    const user = {
        id: 1,
        name: 'Sofi',
        email: 'sofi@gmail.com',
        role: 'admin'
    }

    // creamos el token
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' })
    // inicio de sesion
    res.json({
        message: 'Inicio de sesion exitoso',
        token: token,
    })
})

// ruta protegida 
app.get('/protected', verifyToken, (req, res) => {
    // un mensaje de informacion y info del usuario
    res.json({
        message: 'Acceso concedido a ruta protegida ',
        user: req.user,
    })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost${PORT}`);
})

