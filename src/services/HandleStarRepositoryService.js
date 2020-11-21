const User = require('../models/User')
const Repository = require('../models/Repository')
const Star = require('../models/Star')
const AppError = require('../errors/AppError')

class HandleStarRepoistoryService {
  async execute({ user_id, repository_id }) {
    const user = await User.findByPk(user_id)
    if (!user) {
      throw new AppError('user not found', 404)
    }

    const repository = await Repository.findByPk(repository_id)
    if (!repository) {
      throw new AppError('repository not found', 404)
    }

    const [star, created] = await Star.findOrCreate({
      where: {
        user_id,
        repository_id,
      },
    })

    if (!created) {
      await Star.destroy({
        where: {
          user_id,
          repository_id,
        },
      })
      return { status: 'Star Removed' }
    }
    return { status: 'Star Created', star }
  }
}

module.exports = HandleStarRepoistoryService
