const express = require('express');
const app = express();

app.use(express.json());

// Endpoint POST para manejar datos desestructurados
app.post('/add-user', (req, res) => {
    // Extraemos name y email del cuerpo de la solicitud usando desestructuración
    const { name, email } = req.body;

    // Validamos que ambos campos estén presentes
    if (!name || !email) {
        return res.status(400).send('Faltan datos obligatorios');
    }

    // Respondemos con un mensaje que incluya los valores recibidos
    res.json({ message: `Usuario ${name} con correo ${email} agregado con éxito` });
});

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
