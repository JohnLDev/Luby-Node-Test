'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        AllowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      localization: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      bio: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        AllowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        AllowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  },
}
