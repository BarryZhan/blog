const Router = require('koa-router')

const router = new Router({
  prefix: '/posts'
})

router
  .get('/', (ctx, next) => { // GET /posts 所有用户或者特定用户的文章页
    ctx.body = '主页'
  })
  .post('/create', (ctx, next) => { // POST /posts/create 发表一篇文章
    ctx.body = '发布文章'
  })
  .get('/:postId', (ctx, next) => { // GET /posts/:postId 获取一篇文章
    ctx.body = `${ctx.params.postId} 文章详情页`
  })
  .put('/:postId', (ctx, next) => { // PUT /posts/:postId  更新一篇文章
    ctx.body = `更新文章 ${ctx.params.postId}`
  })
  .delete('/:postId', (ctx, next) => { // DELETE /posts/:postId  删除一篇文章
    ctx.body = `删除文章 ${ctx.params.postId}`
  })

module.exports = router
