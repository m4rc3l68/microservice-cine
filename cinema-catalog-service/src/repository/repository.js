const { ObjectId } = require('mongodb')
const database = require('../config/database')

async function getAllCities() {
  const db = await database.connect()
  return db.collection('cinemaCatalog')
    .find({})
    .project({cidade: 1, pais: 1, uf:1})
    .toArray()
}

async function getCinemasCityById(cityId){
  const db = await database.connect()
  const objCityId = new ObjectId(cityId)
  return db.collection('cinemaCatalog')
    .findOne({ _id: objCityId}, {projection: {cinemas: 1}})
}

module.exports = {
  getAllCities,
  getCinemasCityById, 
}
