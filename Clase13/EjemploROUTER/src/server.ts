// importamos app
import app from './app'

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})