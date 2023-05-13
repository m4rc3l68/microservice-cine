const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

let server = null 

async function start(api, repository) {
  const app = express()

  app.use(helmet())
  app.use(morgan('dev'))

  app.get('/health', (req, res, next) => {
    res.send(`The service ${ process.env.MS_NAME } is running at ${ process.env.PORT }` )
  })

  api(app, repository)

  app.use((error, req, res, next) => {
    console.error(error)
    res.sendStatus(500)
  })

  server = app.listen(process.env.PORT, () => {
    console.log(`The service ${ process.env.MS_NAME } already started ${ process.env.PORT }` )
  })
  
  return server

}
  
  async function stop() {
    if(server) await server.close()
    return true
}

module.exports = { start, stop }
