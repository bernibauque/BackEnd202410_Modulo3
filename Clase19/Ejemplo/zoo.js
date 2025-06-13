// Importamos express
const express = require('express')

// creamos una instancia
const app = express()

// middleware
app.use(express.json())

// base de datos
let animals = [
    { id: 1, name: 'Leon', specie: 'Felino' },
    { id: 2, name: 'Elefante', specie: 'Mamifero' },
    { id: 3, name: 'Perro', specie: 'Mamifero' },
]

// middleware para registrar cada solicitud en la consola
const requestLogger = (req, res, next) => {
    console.log(`Solicitud: ${req.method} ${req.url}`);
    next()
}

// aplicamos el middleware (globalmente)
app.use(requestLogger)

// middleware para validar datos de animales en la soli POST Y PUT
const validateAnimal = (req, res, next) => {
    const { name, specie } = req.body // extrae la info del cuerpo de la soli
    if (!name || !specie) {
        return res.status(400).json({ error: 'Los campos name y specie son obligatorios' })
    }
    next()
}

// RUTAS

// obtener todos los animales
app.get('/api/animals', (req, res) => {
    res.status(200).json(animals)
})

// crear un animal
app.post('/api/animals', validateAnimal, (req, res) => {
    const { name, specie } = req.body
    const newAnimal = { id: animals.length + 1, name, specie }
    animals.push(newAnimal)
    res.status(201).json(newAnimal)
})

// actualizar un animal
app.put('/api/animals/:id', validateAnimal, (req, res) => {
    const { id } = req.params
    const { name, specie } = req.body
    const animal = animals.find(a => a.id === parseInt(id)) // busca al animal por su id
    if (!animal) {
        return res.status(404).json({ error: 'Animal no encontrado' })
    }
    // actualizamos
    animal.name = name
    animal.specie = specie
    res.status(200).json(animal)
})

// eliminar un animal
app.delete('/api/animals/:id', (req, res) => {
    const { id } = req.params
    animals = animals.filter(a => a.id !== parseInt(id)) // eliminar el animal en la bd
    res.status(204).send()
})

// iniciar el servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})