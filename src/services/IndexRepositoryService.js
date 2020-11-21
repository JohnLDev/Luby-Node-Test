const Repository = require('../models/Repository')

class IndexRepositoryService {
  async execute() {
    const repositories = await Repository.findAll({
      include: { association: 'stars' },
    })
    return repositories
  }
}
module.exports = IndexRepositoryService
