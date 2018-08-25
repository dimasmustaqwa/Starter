const path = require('path')
const express = require('express')
const next = require('next')

const routes = require('./routes')

const port = 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handler = routes.getRequestHandler(app)


app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  startServer()

  function startServer () {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  }
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})