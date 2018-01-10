const articleModel = require('../models/posts')

exports.list = async (next) => {
  this.body = await articleModel
}
