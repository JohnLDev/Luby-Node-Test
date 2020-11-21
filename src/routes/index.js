const { Router } = require('express')
const UserRouter = require('./User.routes')
const RepositoryRouter = require('./Repository.routes')

const routes = Router()

routes.use('/user', UserRouter)
routes.use('/repos', RepositoryRouter)

module.exports = routes
