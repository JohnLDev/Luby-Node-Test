const { Router } = require('express')
const UserController = require('../controllers/UserController')
const EnsureAuthenticated = require('../middlewares/EnsureAuthenticated')

const userRouter = Router()

userRouter.get('/index', UserController.index)
userRouter.get('/show/:id', UserController.show)

userRouter.post('/create', UserController.store)
userRouter.post('/login', UserController.login)
userRouter.patch(
  '/follow/:followed_id',
  EnsureAuthenticated,
  UserController.follow,
)
userRouter.put('/update', EnsureAuthenticated, UserController.update)
userRouter.delete('/delete', EnsureAuthenticated, UserController.delete)

module.exports = userRouter
