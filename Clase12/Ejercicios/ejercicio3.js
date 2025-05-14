const express = require('express');
const app = express();

// Lista de usuarios con identificadores únicos (id)
const users = [
    { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
    { id: 2, name: 'Grace Hopper', email: 'grace@example.com' }
];

// Endpoint GET para buscar un usuario por ID
app.get('/users/:id', (req, res) => {
    // Capturamos el parámetro dinámico :id de la URL
    const { id } = req.params;

    // Buscamos al usuario cuyo ID coincida
    const user = users.find(u => u.id === parseInt(id));

    // Si el usuario no existe, respondemos con un error 404
    if (!user) {
        return res.status(404).send('Usuario no encontrado');
    }

    // Si el usuario existe, lo enviamos como respuesta en formato JSON
    res.json(user);
});

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
