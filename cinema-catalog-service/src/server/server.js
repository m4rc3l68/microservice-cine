/* const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

let server = null 

async function start(api, repository) {
  const app = express()

  app.use(helmet())
  app.use(morgan('dev'))

  app.get('/health', (req, res, next) => {
    res.send(`The service ${ process.env.MS_NAME } is running at ${ process.env.PORT }` )
  })

  api(app, repository)

  app.use((error, req, res, next) => {
    console.error(error)
    res.sendStatus(500)
  })

  server = app.listen(process.env.PORT, () => {
    console.log(`The service ${ process.env.MS_NAME } already started ${ process.env.PORT }` )
  })
  
  return server

}
  
  async function stop() {
    if(server) await server.close()
    return true
}

module.exports = { start, stop }
 */


[{
    cidade: "Gravataí",
    uf: "RS",
    cinemas: []
}, {
    cidade: "Porto Alegre",
    uf: "RS",
    pais: "BR",
    cinemas: [{
        _id: ObjectId(),
        nome: "Cinemark Bourbon Ipiranga",
        salas: [{
            nome: 1,
            sessoes: [{
                data: ISODate("2021-03-01T09:00:00Z"),
                idFilme: ObjectId("605e57238ed0562b5da2f87d"),
                filme: "Vingadores: Guerra Infinita",
                valor: 25.00,
                assentos: [{
                    numero: 1,
                    disponivel: true
                }, {
                    numero: 2,
                    disponivel: false
                }]
            }, {
                data: ISODate("2021-03-01T11:00:00Z"),
                idFilme: ObjectId("605e57238ed0562b5da2f87d"),
                filme: "Vingadores: Guerra Infinita",
                valor: 25.00,
                assentos: [{
                    numero: 1,
                    disponivel: true
                }, {
                    numero: 2,
                    disponivel: true
                },]
            }, {
                data: ISODate("2021-06-01T13:00:00Z"),
                idFilme: ObjectId("605e57238ed0562b5da2f87e"),
                filme: "Vingadores: Era de Ultron",
                valor: 20.00,
                assentos: [{
                    numero: 1,
                    disponivel: true
                }, {
                    numero: 2,
                    disponivel: false
                }, {
                    numero: 2,
                    disponivel: true
                },]
            }]
        }, {
            nome: 2,
            sessoes: [{
                data: ISODate("2021-03-01T09:00:00Z"),
                idFilme: ObjectId("605e57238ed0562b5da2f87e"),
                filme: "Vingadores: Era de Ultron",
                valor: 25.00,
                assentos: [{
                    numero: 1,
                    disponivel: true
                }, {
                    numero: 2,
                    disponivel: false
                },]
            }, {
                data: ISODate("2021-03-01T11:00:00Z"),
                idFilme: ObjectId("605e57238ed0562b5da2f87c"),
                filme: "Vingadores: Ultimato",
                valor: 25.00,
                assentos: [{
                    numero: 1,
                    disponivel: true
                }, {
                    numero: 2,
                    disponivel: true
                },]
            }, {
                data: ISODate("2021-03-01T13:00:00Z"),
                idFilme: ObjectId("605e57238ed0562b5da2f87c"),
                filme: "Vingadores: Ultimato",
                valor: 20.00,
                assentos: [{
                    numero: 1,
                    disponivel: true
                }, {
                    numero: 2,
                    disponivel: false
                }, {
                    numero: 2,
                    disponivel: true
                },]
            }]
        }]
    }, {
        _id: ObjectId(),
        nome: "GNC Lindóia",
        salas: [{
            nome: 100,
            sessoes: [{
                data: ISODate("2021-03-30T19:00:00Z"),
                idFilme: ObjectId("605e57238ed0562b5da2f87c"),
                filme: "Vingadores: Ultimato",
                valor: 25.00,
                assentos: [{
                    numero: 1,
                    disponivel: true
                }, {
                    numero: 2,
                    disponivel: false
                },]
            }, {
                data: ISODate("2021-03-30T11:00:00Z"),
                idFilme: ObjectId("605e57238ed0562b5da2f87c"),
                filme: "Vingadores: Ultimato",
                valor: 25.00,
                assentos: [{
                    numero: 1,
                    disponivel: true
                }, {
                    numero: 2,
                    disponivel: true
                },]
            }, {
                data: ISODate("2021-03-30T13:00:00Z"),
                idFilme: ObjectId("605e57238ed0562b5da2f87e"),
                filme: "Vingadores: Era de Ultron",
                valor: 20.00,
                assentos: [{
                    numero: 1,
                    disponivel: true
                }, {
                    numero: 2,
                    disponivel: false
                }, {
                    numero: 2,
                    disponivel: true
                },]
            }]
        }]
    }]
}]