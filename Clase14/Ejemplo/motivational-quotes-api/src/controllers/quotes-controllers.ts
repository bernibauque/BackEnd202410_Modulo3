import { Request, Response } from "express";
import {QuotesModel} from '../models/quotes-models'

// controlador para obtener todas las frases
export const getAllQuotes = (req: Request, res: Response): void => {
    const quotes = QuotesModel.getAllQuotes()
    res.json(quotes)
}

// controlador para frase por id
export const getQuotesById = (req: Request, res: Response): void => {
    const {id} = req.params
    // extraemos el parametro id de la soli
    const quote = QuotesModel.getQuotesById(id)
    // llamamos al metodo del modelo para buscar la frase por id
    if (!quote) {
        res.status(404).json({error: "Frase no encontrada"})
        return
    }
    res.json(quote)
}

export const createQuotes = (req: Request, res: Response): void => {
    const newQuote = QuotesModel.addQuote(req.body)
    // llamemos al metodo del modelo para agregar una nueva frase con los datos de la soli
    res.status(201).json(newQuote)
}

export const updateQuotes = (req: Request, res: Response): void => {
    const {id} = req.params
    // extraemos el parametro id de la soli
    const updateQuotes = QuotesModel.updateQuote(id, req.body)
}

export const deleteQuotes = (req: Request, res: Response): void => {
    const {id} = req.params
    // extraemos el parametro id de la soli
    const isDeleted = QuotesModel.deleteQuote(id)
    if (!isDeleted) {
        res.status(404).json({error: "Frase no encontrada para ser borrada"})
        return
    }
    res.status(204).send()
}
