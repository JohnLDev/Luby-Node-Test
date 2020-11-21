const User = require('../models/User')
const AppError = require('../errors/AppError')
const yup = require('yup')

class ShowUserService {
  async execute({ id }) {
    const validID = yup.number('id must be a number')
    await validID.validate(id)

    const user = await User.findByPk(id, {
      include: [
        { association: 'followers', include: { association: 'follower' } },
        { association: 'followings', include: { association: 'following' } },
        { association: 'repositories', include: { association: 'stars' } },
        { association: 'tokens' },
        { association: 'stars_given' },
      ],
    })
    if (!user) {
      throw new AppError('User not found', 404)
    }
    return user
  }
}

module.exports = ShowUserService
