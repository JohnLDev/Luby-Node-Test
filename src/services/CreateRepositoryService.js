const yup = require('yup')
const AppError = require('../errors/AppError')
const User = require('../models/User')
const Repository = require('../models/Repository')

class CreateUserService {
  async execute({ name, description, is_public, user_id }) {
    const schema = yup.object().shape({
      name: yup.string().required('Name is required'),
      description: yup.string(),
      is_public: yup.boolean().required('is_public is required'),
      user_id: yup.number().required('user_id is required'),
    })
    const data = { name, description, is_public, user_id }
    await schema.validate(data)
    data.name = data.name.toLocaleLowerCase()
    data.public = data.is_public

    const ExistentUser = await User.findByPk(user_id)
    if (!ExistentUser) {
      throw new AppError('you must be logged in to create a repository')
    }
    const ExistentRepository = await Repository.findOne({
      where: { name: data.name },
    })

    if (ExistentRepository) {
      throw new AppError('Repository already registered')
    }

    Object.assign(data, {
      slug: `${ExistentUser.name.replace(/ /g, '_')}/${data.name.replace(
        / /g,
        '_',
      )}`,
    })

    const repository = await Repository.create(data)
    return repository
  }
}

module.exports = CreateUserService
