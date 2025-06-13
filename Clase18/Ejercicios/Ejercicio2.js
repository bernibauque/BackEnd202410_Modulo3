// Importar dependencias
const express = require('express');
const app = express();
const PORT = 3000;

// Ruta GET con parámetro dinámico
app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.json({ message: `Hola, ${name}!` });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/*
Pasos para probar con Postman:

Abrir Postman y hacer una solicitud GET a http://localhost:3000/greet/Ana.
Cambiar el parámetro en la URL (por ejemplo, /greet/Juan) y probar.
*/