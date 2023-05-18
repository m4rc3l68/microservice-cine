const { test, expect } = require('@jest/globals')
const repository = require('./repository')
const disconnectRepo = require('../config/database')

beforeAll( async () => {

})

test('getAllCities', async () => {
  const cities = await repository.getAllCities()
  console.log(cities)
  expect(Array.isArray(cities)).toBeTruthy()
  expect(cities.length).toBeTruthy()
})
