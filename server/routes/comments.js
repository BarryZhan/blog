const Router = require('koa-router')

const router = new Router({
  prefix: '/comments'
})

router
  .post('/', (ctx, next) => { // GET /comments 创建一条留言
    ctx.body = '创建留言'
  })
  .delete('/:commentId', (ctx, next) => { // DELETE /comments/:commentId 删除一条留言
    ctx.body = `删除留言 ${ctx.params.postId}`
  })

module.exports = router
