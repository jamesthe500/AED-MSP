
var latLong = require('./lat-long')
var db = require('./db')

function route (app) {

	app.get('/devices', function (req, res) {

		var lat = req.params.lat
		var long = req.params.long

		var radiusFactors = [
			1, 2, 4, 8, 16
		]

		var returned = []

		radiusFactors.forEach(function (factor) {
			if (returned.length >= 5) {
				return
			}

			var bound = latLong.getBound({
				lat: lat,
				long: long
			}, factor)

			var queryParts = [
				"SELECT * FROM location",
				"WHERE latitude < " + bound.latUpper,
				"AND latitude > " + bound.latLower,
				"AND longitude > " + bound.longLower,
				"AND longitude < " + bound.longUpper
			]

			var query = queryParts.join(' ') + ';'

			db.query(query, function (err, rows, fields) {
				if (err) return console.error(err)

				if (rows.length > 0) {
					returned.concat(rows)
				}
			})

		})

	})

}
