// Endpoint GET para filtrar usuarios por nombre
app.get('/users', (req, res) => {
  const { name } = req.query; // Capturamos el parámetro de consulta

  if (!name) {
    return res.status(400).json({ error: "Se requiere el parámetro 'name'." });
  }

  // Filtramos usuarios cuyo nombre coincida parcialmente
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filteredUsers); // Respondemos con los usuarios filtrados
});

