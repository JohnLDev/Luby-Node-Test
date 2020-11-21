const RepositoryView = require('../views/RepositoryView')
const TokenView = require('../views/TokenView')

module.exports = {
  render(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      localization: user.localization,
      avatar: user.avatar,
      bio: user.bio,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
    }
  },

  renderDetail(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      localization: user.localization,
      avatar: user.avatar,
      bio: user.bio,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
      followers: user.followers,
      followings: user.followings,
      repositories: RepositoryView.renderMany(user.repositories),
      token: TokenView.renderMany(user.tokens),
    }
  },
  renderMany(users) {
    return users.map(user => this.render(user))
  },
}
