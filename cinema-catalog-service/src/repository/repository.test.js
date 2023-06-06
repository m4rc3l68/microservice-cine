const { test, expect } = require('@jest/globals')
const repository = require('./repository')
//const disconnectRepo = require('../config/database')
let cityId = null
let cinemaId = null

beforeAll( async () => {
  const cities = await repository.getAllCities()
  cityId = cities[cities.length - 1]._id

  const cinemas = await repository.getCinemasByCityId(cityId)
  cinemaId = cinemas[0]._id
}) 

test('getAllCities', async () => {
  const cities = await repository.getAllCities()
  expect(Array.isArray(cities)).toBeTruthy()
  expect(cities.length).toBeTruthy()
})

test('getCinemasByCityId', async () => {
  const cinemas = await repository.getCinemasByCityId(cityId)
  expect(Array.isArray(cinemas)).toBeTruthy()
})


test('getMoviesByCinemaId', async () => {
  const movies = await repository.getMoviesByCinemaId(cinemaId)
  console.log(movies)
  expect(Array.isArray(movies)).toBeTruthy()
  expect(movies.length).toBeTruthy()
})
