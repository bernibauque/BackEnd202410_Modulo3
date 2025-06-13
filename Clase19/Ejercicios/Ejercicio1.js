/*Actividad 1: Crear una API REST con un Endpoint de Prueba
Consigna:

Crea un proyecto de Node.js en una carpeta nueva.
Configura Express y express.json().
Define un endpoint GET en la ruta /api/message que devuelva un mensaje JSON como respuesta.
*/

// Importar Express
const express = require('express');

// Crear la aplicación
const app = express();

// Configurar el middleware express.json()
app.use(express.json());

// Definir un endpoint GET
app.get('/api/message', (req, res) => {
  // Enviar una respuesta JSON
  res.status(200).json({ message: '¡Hola, este es tu mensaje de prueba!' });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


