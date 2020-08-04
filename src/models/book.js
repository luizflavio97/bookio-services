const { DataTypes, Model } = require("sequelize");

class Book extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            releaseDate: DataTypes.DATE,
            imageURL: DataTypes.TEXT
        }, {
            tableName: 'Books',
            sequelize
        })
    }
};

module.exports = Book