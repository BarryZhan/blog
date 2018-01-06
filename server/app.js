const Koa = require('koa')

const mongo = require('./lib/mongo')
const config = require('./config')
const errorHandler = require('./middlewares/error')
const router = require('./routes')

const app = new Koa()

app.on('error', (err, ctx) =>
  console.error('server error', err)
)

app.use(errorHandler)
app.use(router.routes())
app.listen(config.port)
mongo()
