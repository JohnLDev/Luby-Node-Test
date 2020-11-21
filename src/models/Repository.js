const { Model, DataTypes } = require('sequelize')

class Repository extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        public: DataTypes.BOOLEAN,
        slug: DataTypes.STRING,
      },
      {
        sequelize: connection,
      },
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    this.hasMany(models.Star, { foreignKey: 'repository_id', as: 'stars' })
  }
}

module.exports = Repository
