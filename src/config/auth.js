const Dotenv = require('dotenv')
Dotenv.config()

module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '2h',
  },
}
