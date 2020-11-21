const { Model } = require('sequelize')

class Star extends Model {
  static init(connection) {
    super.init(
      {},
      {
        sequelize: connection,
      },
    )
  }

  static associate(models) {
    this.belongsTo(models.Repository, {
      foreignKey: 'repository_id',
      as: 'repository',
    })
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    })
  }
}

module.exports = Star
