// Importar dependencias
const express = require('express');
const app = express();
const PORT = 3000;
const users = []; // Array para almacenar usuarios

// Configurar el body-parser para leer JSON
app.use(express.json());

// Ruta GET para obtener todos los usuarios
app.get('/users', (req, res) => {
    res.json(users);
});

// Ruta POST para crear un nuevo usuario
app.post('/users', (req, res) => {
    const { id, name, email } = req.body;
    users.push({ id, name, email });
    res.json({ message: 'Usuario creado', user: { id, name, email } });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/*
Pasos para probar con Postman:

Hacer una solicitud GET a /users para obtener la lista de usuarios.
Hacer una solicitud POST a /users enviando un JSON como:

{
    "id": 1,
    "name": "Ana",
    "email": "ana@example.com"
}
Verificar que la respuesta incluya el mensaje y los datos enviados.
*/