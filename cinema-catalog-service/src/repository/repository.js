const { ObjectId } = require('mongodb')
const database = require('../config/database')

async function getAllCities() {
  const db = await database.connect()
  return db.collection('cinemaCatalog')
    .find({})
    .project({cidade: 1, pais: 1, uf:1})
    .toArray()
}

async function getCinemasByCityId(cityId) {
  const objCityId = new ObjectId(cityId)
  const db = await database.connect()
  const city = await db.collection('cinemaCatalog')
    .findOne({ _id: objCityId}, {projection: {cinemas: 1}})

  

  return city.cinemas  
}
/**
 * 
 * { id: 1, frutas ["maçã, "laranja] }, { id: 2, frutas ["laranja", "banana"] }
 * { id: 1, frutas: "maçã"}, {id: 1, frutas: "laranja"}, { id: 2, frutas: "laranja"}, {id: 2, frutas: "banana"}
 * 
 */

async function getMoviesByCinemaId(cinemaId) {
  const db = await database.connect()
  const objCinemaId = new ObjectId(cinemaId)
  const group = await db.collection('cinemaCatalog').aggregate([
    { $match: { "cinemas._id": objCinemaId } },
    { $unwind: "$cinemas" },
    { $unwind: "$cinemas.salas" },
    { $unwind: "$cinemas.salas.sessoes" },
    { $group: { _id: { titulo: "$cinemas.salas.sessoes.filme", _id: "$cinemas.salas.sessoes.idFilme"}} }
  ]).toArray()

  return group.map(g => g._id)
}

module.exports = {
  getAllCities,
  getCinemasByCityId, 
  getMoviesByCinemaId,
}

