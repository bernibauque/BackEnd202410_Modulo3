// Endpoint GET para contar usuarios con un dominio específico
app.get('/users/count', (req, res) => {
  const { domain } = req.query; // Capturamos el parámetro de consulta

  if (!domain) {
    return res.status(400).json({ error: "Se requiere el parámetro 'domain'." });
  }

  // Contamos los usuarios con el dominio especificado
  const count = users.filter(user => user.email.endsWith(domain)).length;

  res.json({ domain, count }); // Respondemos con el conteo
});

