const { test, expect } = require('@jest/globals')
const repository = require('./repository')
//const disconnectRepo = require('../config/database')
let cityId = null

beforeAll( async () => {
  const cities = await repository.getAllCities()
  cityId = cities[0]._id
})

test('getAllCities', async () => {
  const cities = await repository.getAllCities()
  expect(Array.isArray(cities)).toBeTruthy()
  expect(cities.length).toBeTruthy()
})

test('getCinemasCityById', async () => {
  const city = await repository.getCinemasCityById(cityId)
  console.log(city)
  expect(city).toBeTruthy()
  expect(Array.isArray(city.cinemas)).toBeTruthy()
})
