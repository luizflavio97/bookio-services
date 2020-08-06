const express                   = require('express')
const BookController            = require('./controllers/bookControler')

const routes = express.Router()

routes.get('/books', BookController.getAll)
routes.get('/books/:bookId', BookController.getById)
routes.get('/books/:bookName', BookController.getBookByName)

routes.post('/books', BookController.createBook)

routes.put('/books/:bookId', BookController.updateBook)

routes.delete('/books/:bookId', BookController.delete)

module.exports = routes