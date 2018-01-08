const Router = require('koa-router')

const posts = require('./posts')
const comments = require('./comments')

const router = new Router()

router.use('', posts.routes(), comments.routes())

module.exports = router
