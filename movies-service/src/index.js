const movies = require('./api/movies')
const repository = require('./repository/repository')
const server = require('./server/server')

 const index = async () => {
  try {
    await server.start(movies, repository)
  } catch (error) {
    console.log(error)
  }
}

index()
