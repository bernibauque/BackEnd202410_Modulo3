const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Lista inicial de usuarios
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// Endpoint PUT para actualizar un usuario
app.put('/users/:id', (req, res) => {
  const { id } = req.params; // Capturamos el parámetro dinámico ID
  const { name, email } = req.body; // Desestructuramos el cuerpo de la solicitud

  const userIndex = users.findIndex(user => user.id === parseInt(id)); // Buscamos el usuario por ID

  if (userIndex === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" }); // Usuario no existe
  }

  if (!name || !email) {
    return res.status(400).json({ error: "Datos incompletos. Se requiere name y email." }); // Validación de datos
  }

  // Actualizamos los datos del usuario
  users[userIndex] = { id: parseInt(id), name, email };

  res.json(users[userIndex]); // Respondemos con el usuario actualizado
});

// Servidor en ejecución
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

