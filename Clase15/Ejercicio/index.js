const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware para manejo global de JSON
app.use(express.json());

// Middleware global para registrar solicitudes
app.use((req, res, next) => {
    console.log("Middleware global: Se recibió una solicitud");
    next();
});

// Middleware para autenticación por token
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (token === "123456") {
        next();
    } else {
        res.status(401).json({ error: "Token inválido o faltante" });
    }
};

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
});

// Middleware para permitir CORS
app.use(cors());

// Base de datos simulada
const databaseFile = "./database.json";
if (!fs.existsSync(databaseFile)) {
    fs.writeFileSync(databaseFile, JSON.stringify([]));
}

// Función para leer/escribir datos en la "base de datos"
const readDatabase = () => JSON.parse(fs.readFileSync(databaseFile));
const writeDatabase = (data) => fs.writeFileSync(databaseFile, JSON.stringify(data, null, 2));

// Endpoints de la API

// Obtener todos los libros
app.get("/books", (req, res) => {
    const books = readDatabase();
    if (req.query.author) {
        const filteredBooks = books.filter(
            (book) => book.author.toLowerCase() === req.query.author.toLowerCase()
        );
        res.status(200).json(filteredBooks);
    } else {
        res.status(200).json(books);
    }
});

// Obtener un libro por ID
app.get("/books/:id", (req, res) => {
    const books = readDatabase();
    const book = books.find((b) => b.id === req.params.id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ error: "Libro no encontrado" });
    }
});

// Crear un nuevo libro
app.post("/books", (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    const books = readDatabase();
    const newBook = { id: Date.now().toString(), title, author };
    books.push(newBook);
    writeDatabase(books);
    res.status(201).json(newBook);
});

// Actualizar un libro por ID
app.put("/books/:id", (req, res) => {
    const { title, author } = req.body;
    const books = readDatabase();
    const bookIndex = books.findIndex((b) => b.id === req.params.id);
    if (bookIndex === -1) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }
    books[bookIndex] = { ...books[bookIndex], title, author };
    writeDatabase(books);
    res.status(200).json(books[bookIndex]);
});

// Eliminar un libro por ID
app.delete("/books/:id", (req, res) => {
    const books = readDatabase();
    const updatedBooks = books.filter((b) => b.id !== req.params.id);
    if (updatedBooks.length === books.length) {
        return res.status(404).json({ error: "Libro no encontrado" });
    }
    writeDatabase(updatedBooks);
    res.status(200).json({ message: "Libro eliminado con éxito" });
});

// Middleware protegido con token
app.use("/secure", verifyToken);

app.get("/secure/secret", (req, res) => {
    res.status(200).json({ message: "Acceso autorizado a la ruta protegida" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
