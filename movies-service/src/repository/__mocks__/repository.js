const movies = [
  {
  "_id": "644ef9588d5ec8f47755d06d",
  "titulo": "Os Vingadores: Ultimato",
  "sinopse": "Os heróis mais poderosos da Terra enfrentando o Thanos. De novo.",
  "duracao": 181,
  "dataLancamento": {
    "$date": new Date("2019-04-25T00:00:00.000Z")
  },
  "imagem": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "categorias": [
    "Aventura",
    "Ação"
  ]
},{
  "_id": "644ef9c58d5ec8f47755d06e",
  "titulo": "Os Vingadores: Guerra Infinita",
  "sinopse": "Os heróis mais poderosos da Terra enfrentando o Thanos",
  "duracao": 149,
  "dataLancamento": {
    "$date": new Date("2018-04-26T00:00:00.000Z")
  },
  "imagem": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "categorias": [
    "Aventura",
    "Ação"
  ]
},{ 
  "_id": "644ef9dd8d5ec8f47755d06f",
  "titulo": "Os Vingadores: Era de Ultron",
  "sinopse": "Os heróis mais poderosos da Terra enfrentando o Ultron",
  "duracao": 141,
  "dataLancamento": {
    "$date": new Date("2015-04-23T00:00:00.000Z")
  },
  "imagem": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "categorias": [
    "Aventura",
    "Ação"
  ]
},{
  "_id": "644ef9ed8d5ec8f47755d070",
  "titulo": "Os Vingadores",
  "sinopse": "Os heróis mais poderosos da Terra enfrentando o Loki",
  "duracao": 143,
  "dataLancamento": {
    "$date": new Date("2012-04-27T00:00:00.000Z")
  },
  "imagem": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "categorias": [
    "Aventura",
    "Ação"
  ]
},{
  "_id": "644efa048d5ec8f47755d071",
  "titulo": "Um lugar chamado Notting-Hill",
  "sinopse": "Conto da ciderela ao contrário",
  "duracao": 120,
  "dataLancamento": {
    "$date": new Date("1999-03-20T00:00:00.000Z")
  },
  "imagem": "http://www.holliwood.com.us/romance.png",
  "categorias": [
    "Comédia Romântica"
  ]
}

]

async function getAllMovies() {
  return movies

}
async function getMovieById(id) {
  movies[0]._id = id
 return movies[0]
}

async function getMoviesPremieres() {
  movies[0].dataLancamento = new Date()
  return [movies[0]]
}

module.exports = {
  getAllMovies, 
  getMovieById,
  getMoviesPremieres
}
