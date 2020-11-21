const { Model } = require('sequelize')

class Follower extends Model {
  static init(connection) {
    super.init(
      {},
      {
        sequelize: connection,
      },
    )
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'follower_id',
      as: 'follower',
    })
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    })
  }
}

module.exports = Follower
