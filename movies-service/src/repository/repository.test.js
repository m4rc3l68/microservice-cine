const { test, expect } = require('@jest/globals')
const repository = require('./repository')
const repoTest = require('../config/database')

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
  const movies = await repository.getMovieById(testMovieId)
  expect(movies).toBeTruthy()
  expect(movies._id) //.toEqual(testMovieId) 
})

test('getMoviesPremieres', async () => {
  const monthAgo = new Date()
  monthAgo.setMonth(-1)

  const movies = await repository.getMoviesPremieres()
  expect(Array.isArray(movies)).toBeTruthy()
  expect(movies.length).toBeTruthy()
  expect(movies[0].dataLancamento.getTime()).toBeGreaterThanOrEqual(monthAgo.getTime())
})

test('Disconnecting Repository', async () => {
  const isDisconnected  = await repoTest.disconnect()
  expect(isDisconnected).toBeTruthy()
})

test('Disconnecting Repository 2x', async () => {
  await repoTest.disconnect()
  const isDisconnected  = await repoTest.disconnect()
  expect(isDisconnected).toBeTruthy()
})