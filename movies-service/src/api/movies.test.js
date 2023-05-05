const { test, expect } = require('@jest/globals')
const server = require('../server/server')
const movies = require('./movies')
const request = require('supertest')
const repositoryMock = require('../repository/__mocks__/repository')

const express = require('express')
const app = express()

// let app = null

beforeAll(async () => {
  app = server.start(movies, repositoryMock)
})

afterAll(async () => {
  await server.stop()
})

test('GET /movies', async () => {
  const response = await request(app).get('/movies')
  expect(response.status).toEqual(200)
  expect(Array.isArray(response.body)).toBeTruthy()
  expect(response.body.length).toBeTruthy()
})

test('GET /movies/:id', async () => {
  const testMovieId = '1'
  const response = await request(app).get(`/movies/ ${testMovieId}`)
  expect(response.status).toEqual(200)
  expect(response.body).toBeTruthy()
})

test('GET /movies/premiers', async () => {
  const response = await request(app).get('/movies/premiers')
  expect(response.status).toEqual(200)
  expect(Array.isArray(response.body)).toBeTruthy([0])
  expect(response.body.length).toBeTruthy()
})
