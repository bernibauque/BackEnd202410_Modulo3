// Importar dependencias
const express = require('express');
const app = express();
const PORT = 3000;

// Configurar el body-parser para leer JSON
app.use(express.json());

// Ruta POST con validación de datos
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }
    res.json({ message: 'Usuario registrado con éxito!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/*
Pasos para probar con Postman:

Enviar un body válido:

{
    "username": "usuario1",
    "password": "123456"
}
Verificar que el servidor responda correctamente.
Enviar un body con un campo vacío y verificar el error.
*/