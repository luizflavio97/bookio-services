const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Book = require('../models/book')

const db = new Sequelize(dbConfig)

Book.init(db)

module.exports = db