import {Router} from 'express'

const userRouter = Router()

// rutas
userRouter.get('/', (req, res) => {
    res.json({message: 'Obtener todos los usuarios'})
})

userRouter.post('/', (req, res) => {
    const {name, email} = req.body
    res.status(201).json({message: 'Usuario creado', user: {name, email}})
})

userRouter.get('/:id', (req, res) => {
    const {id} = req.params
    res.json({message: `Obtener usuario con id: ${id}`})
})

userRouter.put('/:id', (req, res) => {
    const {id} = req.params
    const {name, email} = req.body
    res.json({message: `Usuario con id: ${id} actualizado`, user: {name, email}})
})

userRouter.delete('/:id', (req, res) => {
    const {id} = req.params
    res.json({message: `Usuario con id: ${id} eliminado`})
})

export default userRouter
