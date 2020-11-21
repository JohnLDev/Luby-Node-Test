const Dotenv = require('dotenv')
Dotenv.config()

module.exports = {
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  define: {
    timestamp: true,
    underscored: true,
  },
}
