'use strict'

const Koa = require('koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const v1 = require('./src/api/v1')

const app = new Koa
const PORT = process.env.PORT || 2300

app.use(logger())

app.use(bodyParser())

app.use(v1.routes())

app.use(async (ctx, next) => {
  ctx.status = 404
  ctx.body = {
    message: '404 Not Found'
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})