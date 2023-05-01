const { test, expect } = require('@jest/globals')
const repository = require('./repository')

// let testMovieId = null

// beforeAll( async () => {
//   const movies = await repository.getAllMovies()
//   testMovieId = movies[0]._id
// })

test('getAllMovies', async () => {
  const movies = await repository.getAllMovies()
 expect(Array.isArray(movies)).toBeTruthy()
 expect(movies.length).toBeTruthy()
})

test('getMovieById', async () => {
  const movies = await repository.getMovieById()
  expect(movies).toBeTruthy()
  expect(movies._id) // .toEqual()
})

test('getMoviesPremieres', async () => {
  const monthAgo = new Date()
  monthAgo.setMonth(-1)

  const movies = await repository.getMoviesPremieres()
  expect(Array.isArray(movies)).toBeTruthy()
  expect(movies.length).toBeTruthy()
  expect(movies[0].dataLancamento.getTime()).toBeGreaterThanOrEqual(monthAgo.getTime())
})
