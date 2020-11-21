const { Model } = require('sequelize')

class Token extends Model {
  static init(connection) {
    super.init(
      {},
      {
        sequelize: connection,
      },
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

module.exports = Token
