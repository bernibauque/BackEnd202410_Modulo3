// Endpoint POST para agregar múltiples usuarios
app.post('/users/bulk', (req, res) => {
  const newUsers = req.body; // Capturamos el arreglo de usuarios del cuerpo de la solicitud

  if (!Array.isArray(newUsers)) {
    return res.status(400).json({ error: "El cuerpo debe ser un arreglo de usuarios." });
  }

  // Validamos cada usuario
  for (let i = 0; i < newUsers.length; i++) {
    const { name, email } = newUsers[i];
    if (!name || !email) {
      return res.status(400).json({
        error: `El usuario en la posición ${i} tiene datos incompletos.`
      });
    }
  }

  // Agregamos los usuarios a la lista
  newUsers.forEach(user => {
    const id = users.length ? users[users.length - 1].id + 1 : 1; // Generamos un ID único
    users.push({ id, ...user });
  });

  res.json(users); // Respondemos con la lista actualizada
});

