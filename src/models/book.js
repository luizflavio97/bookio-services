const { DataTypes, Model } = require("sequelize");

class Book extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            author: DataTypes.STRING,
            description: DataTypes.TEXT,
            releaseDate: DataTypes.DATE,
            imageURL: DataTypes.TEXT
        }, {
            tableName: 'Books',
            sequelize
        })
    }
};

module.exports = Book