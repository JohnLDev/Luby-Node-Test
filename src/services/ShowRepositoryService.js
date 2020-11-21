const Repository = require('../models/Repository')
const yup = require('yup')
const AppError = require('../errors/AppError')

class ShowRepositoryService {
  async execute({ repository_id }) {
    const isValid = yup
      .number('repository_id must be a number')
      .required('repository_id is required')

    await isValid.validate(repository_id)
    const repository = await Repository.findByPk(repository_id, {
      include: { association: 'stars' },
    })
    if (!repository) {
      throw new AppError('repository not found', 404)
    }
    return repository
  }
}

module.exports = ShowRepositoryService
