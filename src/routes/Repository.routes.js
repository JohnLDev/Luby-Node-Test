const { Router } = require('express')
const RepositoryController = require('../controllers/RepositoryController')
const EnsureAuthenticated = require('../middlewares/EnsureAuthenticated')

const repositoryRouter = Router()

repositoryRouter.use(EnsureAuthenticated)

repositoryRouter.get('/index', RepositoryController.index)

repositoryRouter.get('/show/:repository_id', RepositoryController.show)

repositoryRouter.post('/create', RepositoryController.store)

repositoryRouter.patch('/star/:repository_id', RepositoryController.star)

repositoryRouter.put('/update/:repository_id', RepositoryController.update)

repositoryRouter.delete(
  '/delete/:repository_id',
  EnsureAuthenticated,
  RepositoryController.delete,
)

module.exports = repositoryRouter
