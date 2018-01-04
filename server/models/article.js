const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema({
  title: String,
  body: String,
  created: {type: Date, default: Date.now, index: true},
  updated: {type: Date, default: Date.now, index: true},
  hidden: {type: Boolean, default: false}
})

Article.methods.getAll = function (cb) {
  return this.model('Animal').find({type: this.type}, cb)
}

const model = mongoose.model('Article', Article)

module.exports = model
