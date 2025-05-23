import {Router} from 'express'

// importacion de funciones
import {
    getAllQuotes,
    getQuotesById,
    createQuotes,
    updateQuotes,
    deleteQuotes
} from '../controllers/quotes-controllers'

import {validateQuote} from '../middlewares/validate-middleware'

// crando la instancia del router (para manejar las rutas)
const router: Router = Router()

// Rutas 
router.get('/', getAllQuotes)
router.get('/:id', getQuotesById)
router.post('/', validateQuote, createQuotes)
router.patch('/:id', updateQuotes)
router.delete('/:id', deleteQuotes)

export default router




