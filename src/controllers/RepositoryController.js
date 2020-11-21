const HandleStarRepoistoryService = require('../services/HandleStarRepositoryService')
const CreateRepositoryService = require('../services/CreateRepositoryService')
const IndexRepositoryService = require('../services/IndexRepositoryService')
const ShowRepositoryService = require('../services/ShowRepositoryService')
const UpdateRepositoryService = require('../services/UpdateRepositoryService')
const DeleteRepositoryService = require('../services/DeleteRepositoryService')
const RepositoryView = require('../views/RepositoryView')

module.exports = {
  async store(request, response) {
    const { name, description, is_public } = request.body
    const user_id = request.user.id
    const createRepositoryService = new CreateRepositoryService()
    const repository = await createRepositoryService.execute({
      name,
      description: description,
      is_public,
      user_id,
    })
    return response.status(201).json(RepositoryView.render(repository))
  },

  async index(request, response) {
    const indexRepositoryService = new IndexRepositoryService()
    const repositories = await indexRepositoryService.execute()
    return response.status(200).json(RepositoryView.renderMany(repositories))
  },

  async show(request, response) {
    const { repository_id } = request.params
    const showRepositoryService = new ShowRepositoryService()
    const repository = await showRepositoryService.execute({ repository_id })
    return response.status(200).json(RepositoryView.renderDetail(repository))
  },

  async update(request, response) {
    const { repository_id } = request.params
    const user_id = request.user.id
    const { name, description, is_public } = request.body
    const updateRepositoryService = new UpdateRepositoryService()
    const repository = await updateRepositoryService.execute({
      repository_id,
      user_id,
      name,
      description,
      is_public,
    })
    return response.status(200).json(RepositoryView.render(repository))
  },

  async delete(request, response) {
    const { repository_id } = request.params
    const user_id = request.user.id
    const deleteRepositoryService = new DeleteRepositoryService()
    const deleted = await deleteRepositoryService.execute({
      repository_id,
      user_id,
    })
    return response.status(200).json(deleted)
  },
  async star(request, response) {
    const user_id = request.user.id
    const { repository_id } = request.params

    const handleStarRepoistoryService = new HandleStarRepoistoryService()
    const star = await handleStarRepoistoryService.execute({
      user_id,
      repository_id,
    })

    return response.status(200).json(star)
  },
}
