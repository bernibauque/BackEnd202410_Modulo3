// Importamos el módulo Express
const express = require('express');
const app = express();

// Usamos express.json() para que el servidor pueda leer datos JSON del cuerpo de la solicitud
app.use(express.json());

// Creamos una lista vacía para almacenar usuarios
let users = [];

// Definimos el endpoint POST para agregar un nuevo usuario
app.post('/users', (req, res) => {
    // Usamos desestructuración para obtener name y email del cuerpo de la solicitud
    const { name, email } = req.body;

    // Validamos que los datos necesarios estén presentes
    if (!name || !email) {
        return res.status(400).send('Faltan datos obligatorios: name y email');
    }

    // Agregamos el nuevo usuario a la lista
    users.push({ name, email });

    // Respondemos con un mensaje de éxito y la lista actualizada de usuarios
    res.status(201).json({ message: 'Usuario agregado con éxito', users });
});

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
