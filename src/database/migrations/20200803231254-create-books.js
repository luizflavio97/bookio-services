
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      imageURL: {
        allowNull: true,
        type: Sequelize.TEXT
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books')
  }
};
