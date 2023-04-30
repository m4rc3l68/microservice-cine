const { ObjectId } = require('mongodb')
const database = require('../config/database')

async function getAllMovies() {
  const db = await database.connect()
  return db.collection('movies').find().toArray()
}

async function getMoviesById(id) {
  const db = database.connect()
  return db.collection('movies').find({ _id: new ObjectId(id) })
}

async function getMoviesPremieres() {
  const monthAgo = new Date()
  monthAgo.setMonth(-1)

  const db = await database.connect()
  return db.collection('movies').find({ dataLacamento: { $gte: monthAgo } }).toArray()
}

module.exports = {
  getAllMovies, 
  getMoviesById,
  getMoviesPremieres
}
