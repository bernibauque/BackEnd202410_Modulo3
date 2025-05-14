// Importamos el módulo Express
const express = require('express');
const app = express();

// Creamos un array con la lista de usuarios
const users = [
    { name: 'Ada Lovelace', email: 'ada@example.com' },
    { name: 'Grace Hopper', email: 'grace@example.com' }
];

// Definimos el endpoint GET que devuelve la lista de usuarios
app.get('/users', (req, res) => {
    // Enviamos la lista de usuarios en formato JSON con un código de estado 200
    res.status(200).json(users);
});

// Iniciamos el servidor y escuchamos en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/users');
});
