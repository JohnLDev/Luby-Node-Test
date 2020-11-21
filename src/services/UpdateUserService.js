const yup = require('yup')
const AppError = require('../errors/AppError')
const User = require('../models/User')
const Repository = require('../models/Repository')

class UpdateUserService {
  async execute({ name, email, localization, avatar, username, bio, user_id }) {
    const schema = yup.object().shape({
      name: yup.string(),
      email: yup.string().email('inform a valid email'),
      localization: yup.string(),
      avatar: yup.string().url('Avatar must be a valid URL'),
      username: yup.string(),
      bio: yup.string(),
      user_id: yup.number().required('User_id is required'),
    })
    const data = { name, email, localization, avatar, username, bio, user_id }

    await schema.validate(data)
    data.email = data.email.toLocaleLowerCase()
    const user = await User.findByPk(user_id)

    if (!user) {
      throw new AppError('user not found', 404)
    }

    if (name) {
      const repositories = await Repository.findAll({
        where: { user_id },
      })

      if (repositories) {
        repositories.forEach(
          repository =>
            (repository.slug = `${data.name.replace(
              / /g,
              '_',
            )}/${repository.name.replace(/ /g, '_')}`),
        )
        repositories.forEach(
          async repository =>
            await Repository.update(
              { slug: repository.slug },
              { where: { id: repository.id } },
            ),
        )
      }
      user.name = data.name
    }
    if (email) {
      const ExistentEmail = await User.findOne({ where: { email: data.email } })
      if (ExistentEmail) {
        throw new AppError('Email already registered')
      }
      user.email = data.email
    }
    if (localization) {
      user.localization = data.localization
    }
    if (avatar) {
      user.avatar = data.avatar
    }
    if (username) {
      const ExistentUserName = await User.findOne({
        where: { username: data.username },
      })
      if (ExistentUserName) {
        throw new AppError('Username already registered')
      }
      user.username = data.username
    }
    if (bio) {
      user.bio = data.bio
    }
    await User.update(
      {
        name: user.name,
        email: user.email,
        localization: user.localization,
        avatar: user.avatar,
        username: user.username,
        bio: user.bio,
      },
      { where: { id: user_id } },
    )

    return user
  }
}

module.exports = UpdateUserService
