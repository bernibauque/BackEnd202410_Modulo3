const axios = require('axios'); // Asegúrate de instalar axios con `npm install axios`

// Endpoint GET para obtener usuarios de una API externa
app.get('/external/users', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json(response.data); // Devolvemos los datos obtenidos
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos de la API externa." });
  }
});
