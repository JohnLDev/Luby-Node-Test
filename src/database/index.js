const dbConfig = require('../config/database')
const Sequelize = require('sequelize')

const User = require('../models/User')
const Token = require('../models/Token')
const Follower = require('../models/Follower')
const Following = require('../models/Following')
const Repository = require('../models/Repository')
const Star = require('../models/Star')

const connection = new Sequelize(dbConfig)

User.init(connection)
Token.init(connection)
Follower.init(connection)
Following.init(connection)
Repository.init(connection)
Star.init(connection)

User.associate(connection.models)
Token.associate(connection.models)
Follower.associate(connection.models)
Following.associate(connection.models)
Repository.associate(connection.models)
Star.associate(connection.models)

module.exports = connection
