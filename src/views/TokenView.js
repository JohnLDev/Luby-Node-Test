module.exports = {
  render(token) {
    return {
      id: token.id,
      user_id: token.user_id,
      created_at: token.createdAt,
      updated_at: token.updatedAt,
    }
  },
  renderMany(token) {
    return token.map(token => this.render(token))
  },
}
