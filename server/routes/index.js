const fs = require('fs')
const path = require('path')

const Router = require('koa-router')

const router = new Router()
const Article = require('../models/article')

const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">Index Page</a>'
}

const main = async (ctx, next) => {
  ctx.response.type = 'html'
  const template = await new Promise(function (resolve, reject) {
    fs.readFile(path.resolve(__dirname, '../../frontend/index.html'), 'utf-8', function (err, file) {
      if (err) {
        return reject(err)
      }
      resolve(file)
    })
  })
  ctx.response.body = template
  next()
}

const addArticle = async (ctx, next) => {
  const article = new Article({
    title: '洗牌算法',
    body: '<p>洗牌算法是一个比较形象的术语，本质上是让一个数组内的元素随机排列。举例来说，我们有一个如下图所示的数组，数组长度为 9，数组内元素的值顺次分别是 1~9：</p>'
  })
  ctx.body = await article.save()
}

const redirect = ctx => {
  ctx.response.redirect('/')
  ctx.response.body = '<a href="/">Index Page</a>'
}
console.log(router)
module.exports = router.get('/', main)
  .get('/addArticle', addArticle)
  .get('/about', about)
  .get('/redirect', redirect)
