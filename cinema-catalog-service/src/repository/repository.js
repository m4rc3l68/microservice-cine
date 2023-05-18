const { ObjectId } = require('mongodb')
const database = require('../config/database')

async function getAllCities() {
  const db = await database.connect()
  return db.collection('cinemaCatalog')
    .find({})
    .project({cidade: 1, pais: 1, uf:1})
    .toArray()
}

module.exports = {
  getAllCities, 
}
