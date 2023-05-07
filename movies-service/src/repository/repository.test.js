const { test, expect } = require('@jest/globals')
const repository = require('./repository')
const disconnectRepo = require('../config/database')

let testMovieId = null

beforeAll( async () => {
  const movies = await repository.getAllMovies()
  testMovieId = movies[0]._id
})

test('getAllMovies', async () => {
  const movies = await repository.getAllMovies()
 expect(Array.isArray(movies)).toBeTruthy()
 expect(movies.length).toBeTruthy()
})

test('getMovieById', async () => {
  const movie = await repository.getMovieById(testMovieId)
  expect(movie).toBeTruthy()
  // expect(movie._id).toEqual(testMovieId) 
})

test('getMoviesPremieres', async () => {
  const monthAgo = new Date()
  monthAgo.setMonth(-1)

  const movies = await repository.getMoviesPremieres()
  expect(Array.isArray(movies)).toBeTruthy()
  expect(movies.length).toBeTruthy()
  expect(movies[0].dataLancamento.getTime()).toBeGreaterThanOrEqual(monthAgo.getTime())
})

test('Disconnecting Repoditory', async () => {
  const isDisconnected  = await disconnectRepo.disconnect()
  expect(isDisconnected).toBeTruthy()
})

test('Disconnecting Repository 2x', async () => {
  await disconnectRepo.disconnect()
  const isDisconnected  = await disconnectRepo.disconnect()
  expect(isDisconnected).toBeTruthy()
})
 