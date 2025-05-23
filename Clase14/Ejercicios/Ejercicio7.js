// Usuarios iniciales con el campo de edad agregado
let users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 35 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 40 }
];

// Endpoint GET para filtrar usuarios por edad
app.get('/users/age-range', (req, res) => {
  const { minAge, maxAge } = req.query;

  if (!minAge || !maxAge) {
    return res.status(400).json({ error: "Se requieren los parámetros 'minAge' y 'maxAge'." });
  }

  const filteredUsers = users.filter(user =>
    user.age >= parseInt(minAge) && user.age <= parseInt(maxAge)
  );

  res.json(filteredUsers);
});

