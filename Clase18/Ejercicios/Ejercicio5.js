// Importar dependencias
const express = require('express');
const app = express();
const PORT = 3000;

// Ruta GET con parámetro dinámico
app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.json({ message: `Hola, ${name}!` });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada.' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/*
Pasos para probar con Postman:

Intenta acceder a una ruta inexistente, como http://localhost:3000/invalid.
Verifica que el servidor responda con el error 404.
*/











