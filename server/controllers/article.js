const articleModel = require('../models/article')

exports.list = async (next) => {
  this.body = await articleModel
}
