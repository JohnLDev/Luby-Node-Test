const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        localization: DataTypes.STRING,
        avatar: DataTypes.STRING,
        username: DataTypes.STRING,
        bio: DataTypes.STRING,
      },
      {
        sequelize: connection,
      },
    )
  }

  static associate(models) {
    this.hasMany(models.Token, { foreignKey: 'user_id', as: 'tokens' })
    this.hasMany(models.Star, { foreignKey: 'user_id', as: 'stars_given' })
    this.hasMany(models.Repository, {
      foreignKey: 'user_id',
      as: 'repositories',
    })
    this.hasMany(models.Follower, {
      foreignKey: 'user_id',
      as: 'followers',
    })
    this.hasMany(models.Following, {
      foreignKey: 'user_id',
      as: 'followings',
    })
  }
}

module.exports = User
