// Endpoint GET para obtener estadísticas de usuarios
app.get('/users/stats', (req, res) => {
  if (users.length === 0) {
    return res.status(404).json({ error: "No hay usuarios disponibles para calcular estadísticas." });
  }

  const totalUsers = users.length;
  const averageAge = users.reduce((sum, user) => sum + user.age, 0) / totalUsers;
  const youngestUser = users.reduce((youngest, user) =>
    user.age < youngest.age ? user : youngest, users[0]);
  const oldestUser = users.reduce((oldest, user) =>
    user.age > oldest.age ? user : oldest, users[0]);

  res.json({
    totalUsers,
    averageAge,
    youngestUser,
    oldestUser
  });
});

