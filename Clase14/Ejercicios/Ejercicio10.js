// Endpoint GET para buscar un usuario por nombre en una API externa
app.get('/external/users/search', async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Se requiere el parámetro 'name'." });
  }

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const user = response.data.find(u => u.name.toLowerCase() === name.toLowerCase());

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    res.json(user); // Devolvemos el usuario encontrado
  } catch (error) {
    res.status(500).json({ error: "Error al comunicarse con la API externa." });
  }
});

