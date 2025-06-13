// Importar dependencias
const express = require('express');
const app = express();
const PORT = 3000;

// Configurar el body-parser para leer JSON
app.use(express.json());

// Ruta GET
app.get('/hello', (req, res) => {
    res.json({ message: 'Hola, mundo!' });
});

// Ruta POST
app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hola, ${name}!` });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//Pasos para probar con Postman:

//Abrir Postman y hacer una solicitud GET a http://localhost:3000/hello.
//Hacer una solicitud POST a http://localhost:3000/hello enviando un body como:
/*
{
    "name": "Ana"
}
    */