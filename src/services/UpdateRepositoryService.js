const Repository = require('../models/Repository')
const yup = require('yup')
const AppError = require('../errors/AppError')

class UpdateRepositoryService {
  async execute({ user_id, repository_id, name, description, is_public }) {
    const data = { user_id, repository_id, is_public }
    const schema = yup.object().shape({
      user_id: yup
        .number('user_id must be a number')
        .required('user_id is required'),
      repository_id: yup
        .number('repository_id must be a number')
        .required('repository_id is required'),
      is_public: yup.boolean('is_public must be a boolean'),
    })
    await schema.validate(data)
    name = name.toLowerCase()
    const repository = await Repository.findOne({
      where: { user_id, id: repository_id },
      include: { association: 'stars' },
    })
    if (!repository) {
      throw new AppError('repository not found', 404)
    }
    if (name) {
      const existName = await Repository.findOne({
        where: { user_id, id: repository_id, name },
      })
      if (existName) {
        throw new AppError('repository name is unavailable')
      }
      repository.name = name
      const [userName] = repository.slug.split('/')
      repository.slug = `${userName}/${name.replace(/ /g, '_')}`
    }
    if (description) {
      repository.description = description
    }
    if (is_public === false) {
      repository.public = false
    }
    repository.public = is_public

    await Repository.update(
      {
        name: repository.name,
        description: repository.description,
        public: repository.public,
        slug: repository.slug,
      },
      { where: { id: repository_id } },
    )
    return repository
  }
}

module.exports = UpdateRepositoryService
