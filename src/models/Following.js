const { Model } = require('sequelize')

class Following extends Model {
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
      foreignKey: 'following_id',
      as: 'following',
    })
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    })
  }
}

module.exports = Following
