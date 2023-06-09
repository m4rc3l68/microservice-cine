const { ObjectId } = require("mongodb");

const cinemaCatalog = [{cidade: "Gravataí",
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
				data: ISODate("2023-05-01T09:00:00Z"),
				idFilme: ObjectId("644ef9c58d5ec8f47755d06e"),
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
				data: ISODate("2023-05-01T11:00:00Z"),
				idFilme: ObjectId("644ef9c58d5ec8f47755d06e"),
				filme: "Vingadores: Guerra Infinita",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: true
				}, ]
			},{
				data: ISODate("2022-06-01T13:00:00Z"),
				idFilme: ObjectId("644ef9dd8d5ec8f47755d06f"),
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
				}, ]
			}]
		}, {
			nome: 2,
			sessoes: [{
				data: ISODate("2023-05-01T09:00:00Z"),
				idFilme: ObjectId("644ef9dd8d5ec8f47755d06f"),
				filme: "Vingadores: Era de Ultron",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: false
				}, ]
			}, {
				data: ISODate("2023-05-01T11:00:00Z"),
				idFilme: ObjectId("644ef9588d5ec8f47755d06d"),
				filme: "Vingadores: Ultimato",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: true
				}, ]
			}, {
				data: ISODate("2023-05-01T13:00:00Z"),
				idFilme: ObjectId("644ef9588d5ec8f47755d06d"),
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
				}, ]
			}]
		}]
	}, {
		_id: ObjectId(),
		nome: "GNC Lindóia",
		salas: [{
			nome: 100,
			sessoes: [{
				data: ISODate("2023-04-30T19:00:00Z"),
				idFilme: ObjectId("644ef9588d5ec8f47755d06d"),
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
				data: ISODate("2023-04-30T11:00:00Z"),
				idFilme: ObjectId("644ef9588d5ec8f47755d06d"),
				filme: "Vingadores: Ultimato",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: true
				}, ]
			}, {
				data: ISODate("2023-04-30T13:00:00Z"),
				idFilme: ObjectId("644ef9dd8d5ec8f47755d06f"),
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
				}]
			},{
				data: ISODate("2023-04-30T13:00:00Z"),
				idFilme: ObjectId("644efa048d5ec8f47755d071"),
				filme: "Um lugar chamado Notting Hill",
				valor: 25.00,
				assentos: [{
					numero: 1,
					disponivel: true
				}, {
					numero: 2,
					disponivel: true
				}]
			},{
				data: ISODate("2023-04-30T13:00:00Z"),
				idFilme: ObjectId("644efa148d5ec8f47755d072"),
				filme: "Velozes e Furiosos - Opreração Rio",
				valor: 30.00,
				assentos: [{
					numero: 1,
					disponivel: false
				},{
					numero: 2,
					disponivel: true
				}]
			},{
				data: ISODate("2023-04-30T13:00:00Z"),
				idFilme: ObjectId("644efa2d8d5ec8f47755d073"),
				filme: "Top Gun - Uma Grande Aventura",
				valor: 50.00,
				assentos: [{
					numero: 3,
					disponivel: true
				},{
					numero: 1,
					disponivel: true
				}]
			}]
		}]
	}]
}]
