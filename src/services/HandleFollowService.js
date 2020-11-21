const AppError = require('../errors/AppError')
const Follower = require('../models/Follower')
const Following = require('../models/Following')
const User = require('../models/User')
const yup = require('yup')

class HandleFollowService {
  async execute({ followed_id, follower_id }) {
    const data = { followed_id, follower_id }
    const schema = yup.object().shape({
      followed_id: yup
        .number('followed_id must be a number')
        .required('followed_id is required'),
      follower_id: yup
        .number('follower_id must be a number')
        .required('follower_id is required'),
    })
    await schema.validate(data)

    const user = await User.findByPk(follower_id)
    if (!user) {
      throw new AppError(
        'You must to be logged to follow/unfollow an user',
        401,
      )
    }
    const userToFollow = await User.findByPk(followed_id)
    if (!userToFollow) {
      throw new AppError('user not found', 404)
    }
    const [, created] = await Following.findOrCreate({
      where: {
        user_id: follower_id,
        following_id: followed_id,
      },
    })
    if (!created) {
      await Following.destroy({
        where: { user_id: follower_id, following_id: followed_id },
      })
      await Follower.destroy({ where: { user_id: followed_id, follower_id } })
      return { status: 'unfollow' }
    }
    const Follow = await Follower.create({ user_id: followed_id, follower_id })
    return { status: 'follow', Follow: Follow }
  }
}

module.exports = HandleFollowService
