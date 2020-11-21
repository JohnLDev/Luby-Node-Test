const { verify } = require('jsonwebtoken')
const authConfig = require('../config/auth')
const AppError = require('../errors/AppError')

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401)
  }
  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, authConfig.jwt.secret)

    const { sub } = decoded

    request.user = { id: sub }
    return next()
  } catch (error) {
    throw new AppError('frist you need to login', 401)
  }
}
module.exports = ensureAuthenticated
