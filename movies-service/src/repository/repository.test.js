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



test('addMovie', async () => {
  const movie = {
    titulo: 'Test Movie',
    sinopse: 'Test Sumary',
    duracao: 120,
    dataLancamento: new Date(),
    imagem: 'image.jpg',
    categorias: ['Aventura']
  }

  let result
  try {
    result = await repository.addMovie(movie)
     expect(result).toBeTruthy()
  } finally {
    if(result)
    await repository.deleteMovie(result._id)
  }
})

test('deleteMovie', async () => {
  const movie = {
    titulo: 'Test Movie',
    sinopse: 'Test Sumary',
    duracao: 120,
    dataLancamento: new Date(),
    imagem: 'image.jpg',
    categorias: ['Aventura']
  }

  const result = await repository.addMovie(movie)
  const result2 = await repository.deleteMovie(result._id)
  expect(result2).toBeTruthy()
  
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
 