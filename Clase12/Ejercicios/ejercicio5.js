const express = require('express');
const app = express();

// Ruta raíz que devuelve un mensaje de bienvenida
app.get('/', (req, res) => {
    res.send('¡Bienvenida al servidor de Express!');
});

// Middleware para manejar rutas no definidas
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});












