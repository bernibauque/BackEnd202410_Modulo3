// importamos express
import express from 'express'

// importamos userRouter
import userRouter from './routes/userRouter'

// instancia de express
const app = express()

// middleware para parsear json
app.use(express.json())

// configuracion de las rutas
// asosciamos el router 'userRouter' al prefijo '/users'
// esto significa que todas las rutas definidas en userRoter estaran disponibles
// bajo la ruta base '/users'
app.use('/users', userRouter)

export default app
