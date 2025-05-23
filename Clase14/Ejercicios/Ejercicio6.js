// Endpoint GET para obtener usuarios ordenados alfabéticamente
app.get('/users/sorted', (req, res) => {
  const { order } = req.query; // Capturamos el parámetro de consulta

  const sortedUsers = [...users].sort((a, b) => {
    if (order === 'desc') {
      return b.name.localeCompare(a.name); // Orden descendente
    }
    return a.name.localeCompare(b.name); // Orden ascendente
  });

  res.json(sortedUsers); // Respondemos con la lista ordenada
});
