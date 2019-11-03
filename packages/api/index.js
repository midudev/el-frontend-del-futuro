// index.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./db.json')

const router = jsonServer.router(db)

const middlewares = jsonServer.defaults({
  logger: false,
  noCors: true,
  readOnly: true
})

server.use(middlewares)
server.use(router)

if (!process.env.NOW_REGION) {
  server.listen(3000, () => {
    console.log('JSON Server is running')
  })
}
module.exports = server
