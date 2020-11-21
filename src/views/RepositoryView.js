module.exports = {
  render(repository) {
    return {
      id: repository.id,
      name: repository.name,
      description: repository.description,
      public: repository.public,
      slug: repository.slug,
      stars: repository.stars.length,
      user_id: repository.user_id,
      created_at: repository.createdAt,
      updated_at: repository.updatedAt,
    }
  },

  renderDetail(repository) {
    return {
      id: repository.id,
      name: repository.name,
      description: repository.description,
      public: repository.public,
      slug: repository.slug,
      user_id: repository.user_id,
      stars: repository.stars,
      created_at: repository.createdAt,
      updated_at: repository.updatedAt,
    }
  },
  renderMany(repositories) {
    return repositories.map(repository => this.render(repository))
  },

  renderManyDetail(repositories) {
    return repositories.map(repository => this.renderDetail(repository))
  },
}
