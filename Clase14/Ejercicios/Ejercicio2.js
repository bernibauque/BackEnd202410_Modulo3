// Endpoint DELETE para eliminar un usuario
app.delete('/users/:id', (req, res) => {
  const { id } = req.params; // Capturamos el parámetro dinámico ID
  const userIndex = users.findIndex(user => user.id === parseInt(id)); // Buscamos el usuario por ID

  if (userIndex === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" }); // Usuario no existe
  }

  // Eliminamos el usuario de la lista
  const deletedUser = users.splice(userIndex, 1);

  res.json({ message: "Usuario eliminado", usuario: deletedUser[0] }); // Confirmamos la eliminación
});
