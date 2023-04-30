const { test, expect } = require('@jest/globals')
const repo = require('./repository')

test('Obtain Movies', repo.getAllMovies, () => {
 expect(repo).toBeTruthy()
})

test('Obtain ID Movies', repo.getMoviesById, () => {
  expect(repo).toBeTruthy()
})

test('Obtain Premieres', repo.getMoviesPremieres, () => {
  expect(repo).toBeTruthy()
})
