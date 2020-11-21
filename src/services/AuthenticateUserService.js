const User = require('../models/User')
const { sign } = require('jsonwebtoken')
const authConfig = require('../config/auth')
const AppError = require('../errors/AppError')
const Token = require('../models/Token')

class AuthenticateUserService {
  async execute({ username }) {
    if (!username) {
      throw new AppError('please inform your username')
    }

    const user = await User.findOne({ where: { username: username } })

    if (!user) {
      throw new AppError('wrong email/username combination', 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn: expiresIn,
    })
    await Token.create({
      user_id: user.id,
    })

    return { user, token }
  }
}

module.exports = AuthenticateUserService
