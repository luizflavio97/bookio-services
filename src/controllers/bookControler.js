const Book = require('../models/book');

module.exports = {
    async getAll (req, res) {
        const books = await Book.findAll();

        return res.status(200).json(books);
    },

    async getById (req, res) {
        const { bookId } = req.params;

        const book = await Book.findByPk(bookId);

        if(!book) {
            return res.status(200).json({
                message: `Book with the id ${bookId} cannot be found.`
            });
        } else {
            return res.json(book);
        }
    },

    async getBookByName (req, res) {
        const { name } = req.params

        const book = await Book.findOne({
            where: {
                name: name
            }
        });
    },

    async createBook (req, res) {
        const {name, author, description, releaseDate, imageURL} = req.body;

        await Book.create({name, author, description, releaseDate, imageURL});

        res.status(201).json({
            message: 'Book created!'
        })
    },

    async updateBook (req, res) {
        const { bookId } = req.params;
        const {name, author, description, releaseDate, imageURL} = req.body;

        const book = await Book.findByPk(bookId);

        if(!book) {
            return res.status(200).json({
                message: `Book with the id ${bookId} cannot be found.`
            })
        } else {
            await Book.update({ name, author, description, releaseDate, imageURL}, {
                where: {
                    id: bookId
                }
            })

            res.json({
                message: 'Book updated!'
            })
        }
    },

    async delete (req, res) {
        const { bookId } = req.params;

        await Book.destroy({
            where: {
                id: bookId
            }
        })

        res.json({
            message: 'Book deleted.'
        })
    }


}