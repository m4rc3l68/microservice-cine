const { test, expect } = require('@jest/globals')
const repo = require('./repository')

test('Obtain Movies', repo.getAllMovies, () => {
 expect(repo).toBeTruthy()
})