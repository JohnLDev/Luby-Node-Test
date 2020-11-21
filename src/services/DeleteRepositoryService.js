const AppError = require('../errors/AppError')
const Repository = require('../models/Repository')
const yup = require('yup')

class DeleteRepositoryService {
  async execute({ user_id, repository_id }) {
    const data = { user_id, repository_id }
    const schema = yup.object().shape({
      user_id: yup
        .number('user_id must be a number')
        .required('user_id is required'),
      repository_id: yup
        .number('repository_id must be a number')
        .required('repository_id is required'),
    })
    await schema.validate(data)

    const ExistRepository = await Repository.findOne({
      where: { user_id, id: repository_id },
    })
    if (!ExistRepository) {
      throw new AppError('Repository does not exist', 404)
    }
    await Repository.destroy({ where: { user_id, id: repository_id } })
    return { deleted: true }
  }
}

module.exports = DeleteRepositoryService
