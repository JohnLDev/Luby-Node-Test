const AppError = require('../errors/AppError')
const User = require('../models/User')

class DeleteUserService {
  async execute({ user_id }) {
    const existentUser = await User.findByPk(user_id)
    if (!existentUser) {
      throw new AppError('You must be logged to delete you user', 404)
    }
    await User.destroy({ where: { id: user_id } })
    return { deleted: true }
  }
}

module.exports = DeleteUserService
