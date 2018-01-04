const fs = require('fs')
const Koa = require('koa')
const route = require('koa-route')

const mongo = require('./lib/mongo')
const config = require('./config')

const Article = require('./models/article')

const app = new Koa()

app.on('error', (err, ctx) =>
  console.error('server error', err)
)

const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.app.emit('error', err, ctx)
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body = {
      message: err.message
    }
  }
}

const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">Index Page</a>'
}

const main = async (ctx, next) => {
  ctx.response.type = 'html'
  const template = await new Promise(function (resolve, reject) {
    fs.readFile('./index1.html', 'utf-8', function (err, file) {
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

app.use(handler)
app.use(route.get('/', main))
app.use(route.get('/addArticle', addArticle))
app.use(route.get('/about', about))
app.use(route.get('/redirect', redirect))

app.listen(config.port)
mongo()
