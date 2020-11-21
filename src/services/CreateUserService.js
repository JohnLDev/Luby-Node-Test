const yup = require('yup')
const AppError = require('../errors/AppError')
const User = require('../models/User')

class CreateUserService {
  async execute({ name, email, localization, avatar, username, bio }) {
    const schema = yup.object().shape({
      name: yup.string().required('Name is required'),
      email: yup
        .string()
        .email('inform a valid email')
        .required('Email is required'),
      localization: yup.string().required('Localization is required'),
      avatar: yup
        .string()
        .url('Avatar must be a valid URL')
        .required('Avatar is required'),
      username: yup.string().required('Username is required'),
      bio: yup.string().required('Bio is required'),
    })
    const data = { name, email, localization, avatar, username, bio }
    await schema.validate(data)
    data.email = data.email.toLocaleLowerCase()
    const ExistentEmail = await User.findOne({ where: { email: data.email } })
    const ExistentUserName = await User.findOne({
      where: { username: data.username },
    })
    if (ExistentEmail || ExistentUserName) {
      throw new AppError('Email or username already registered')
    }

    const user = await User.create(data)
    return user
  }
}

module.exports = CreateUserService
