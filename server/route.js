
var latLong = require('./lat-long')
var db = require('./db')

function route (app) {

	app.get('/devices?lat=.....&long=....', function (req, res) {

		var lat = req.params.lat
		var long = req.params.long

		var radiusFactors = [
			1, 2, 4, 8, 16
		]

		radiusFactors.forEach(function (factor) {
			// get the bound for this factor
			var bound = latLong.getBound({
				lat: lat,
				long: long
			}, factor)

			// make our SQL

			// Query the db
			// if number of returned < 5
		})

	})

}
