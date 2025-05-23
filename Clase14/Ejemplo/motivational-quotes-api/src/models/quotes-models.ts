import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, '../database/quotes.json')
// definimos la ruta al archivo json que actua como bd de las frases

interface Quote {
    id: string;
    text: string;
    autor: string;
}

export class QuotesModel {
    static getAllQuotes(): Quote[] {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        // lee el contedion del archivo json y lo convierta a js
        return data.quotes
    }

    static getQuotesById(id: string): Quote | undefined {
        const data = this.getAllQuotes()
        // obtenda todas las frases
        return data.find((quote) => quote.id === id)
        //busque y devuelva la frase cuyo id coincide con el que le pasamos
    }

    static addQuote(newQuote: Quote): Quote {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
         // lee el contedion del archivo json y lo convierta a js
        const newId = (data.quotes.length + 1).toString()
        // genera un nuevo id tomando en cuenta la longitud del array
        const quote = {...newQuote, id: newId}
        // crea un frase nueva agregando el id que generamos

        data.quotes.push(quote)
        // agrego la frase al array
        data.info.total += 1
        // incremento el contador
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        // guardamos lo datos actualizados en el json
        return quote
        // devuelve la frase 
    }

    static updateQuote(id: string, updatedData: Partial <Quote>): Quote | null {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
         // lee el contedion del archivo json y lo convierta a js
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id)
        // encuentra el indice de la frase que coincide con el id
        if (index === -1) return null
        data.quote[index] = {...data.quotes[index], ...updatedData}
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return data.quotes[index]
    }

    static deleteQuote(id: string): boolean {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        // lee el contedion del archivo json y lo convierta a js
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id)
        // encuentra el indice de la frase que coincide con el id
        if (index === -1) return false
        data.quote.splice(index, 1)
        data.info.total -= 1
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        return true
    }

}