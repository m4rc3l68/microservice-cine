const { ObjectId } = require('mongodb')
const database = require('../config/database')

async function getAllMovies() {
  const db = await database.connect()
  return db.collection('movies').find().toArray()
}

async function getMovieById(id) {
  const db = await database.connect()
  return db.collection('movies').findOne({ _id: new ObjectId(id) })
}

async function getMoviesPremieres() {
  const monthAgo = new Date()
  monthAgo.setMonth(-1)

  const db = await database.connect()
  return db.collection('movies').find({ dataLancamento: { $gte: monthAgo } }).toArray()
}

/* async function addMovie(movie) {
  const db = await database.connect()
  const result = await db.collection('movies').insertOne(movie)  
    return result
} */
async function addMovie(movie) {
  const db = await database.connect()
  const result = await db.collection('movies').insertOne(movie)
  movie._id = result.insertedId
  return movie
}

async function deleteMovie(id) {
  const db = await database.connect()
  return db.collection('movies').deleteOne({_id: new ObjectId(id)})
}

module.exports = {
  getAllMovies, 
  getMovieById,
  getMoviesPremieres,
  addMovie,
  deleteMovie
}
