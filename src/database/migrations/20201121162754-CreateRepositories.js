'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('repositories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        AllowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        AllowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      public: {
        type: Sequelize.BOOLEAN,
        default: false,
        AllowNull: false,
      },
      slug: {
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
    await queryInterface.dropTable('repositories')
  },
}
