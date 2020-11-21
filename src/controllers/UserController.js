const CreateUserService = require('../services/CreateUserService')
const AuthenticateUserService = require('../services/AuthenticateUserService')
const HandleFollowService = require('../services/HandleFollowService')
const UpdateUserService = require('../services/UpdateUserService')
const DeleteUserService = require('../services/DeleteUserService')
const ShowUserService = require('../services/ShowUserService')
const IndexUserService = require('../services/IndexUserService')
const UserView = require('../views/UserView')

module.exports = {
  async store(request, response) {
    const { name, email, localization, avatar, username, bio } = request.body
    const createUserService = new CreateUserService()
    const user = await createUserService.execute({
      name,
      email,
      localization,
      avatar,
      username,
      bio,
    })
    return response.status(201).json(UserView.render(user))
  },

  async index(request, response) {
    const indexUserService = new IndexUserService()
    const users = await indexUserService.execute()

    return response.status(200).json(UserView.renderMany(users))
  },

  async show(request, response) {
    const { id } = request.params
    const showUserService = new ShowUserService()
    const user = await showUserService.execute({ id })

    return response.status(200).json(UserView.renderDetail(user))
  },

  async login(request, response) {
    const { email, username } = request.body
    const authenticateUserService = new AuthenticateUserService()
    const { user, token } = await authenticateUserService.execute({
      email,
      username,
    })

    return response.status(200).json({ user: UserView.render(user), token })
  },

  async follow(request, response) {
    const follower_id = request.user.id
    const { followed_id } = request.params
    const handleFollowService = new HandleFollowService()
    const follow = await handleFollowService.execute({
      followed_id,
      follower_id,
    })
    return response.status(200).json(follow)
  },

  async update(request, response) {
    const user_id = request.user.id
    const { name, email, localization, avatar, username, bio } = request.body
    const updateUserService = new UpdateUserService()
    const user = await updateUserService.execute({
      name,
      email,
      localization,
      avatar,
      username,
      bio,
      user_id,
    })
    return response.status(200).json(UserView.render(user))
  },

  async delete(request, response) {
    const user_id = request.user.id

    const deleteUserService = new DeleteUserService()
    const deleted = await deleteUserService.execute({
      user_id,
    })
    return response.status(200).json(deleted)
  },
}
