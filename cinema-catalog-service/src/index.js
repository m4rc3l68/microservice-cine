const cinemaCatalog = require('./api/cinemacatalog')
const repository = require('./repository/repository')
const server = require('./server/server')

;(async () => {
  try {
    await server.start(cinemaCatalog, repository)
  } catch (error) {
    console.log(error)
  }
})()

