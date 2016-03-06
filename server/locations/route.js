
var locations = require('./locations')

function locationsRoute (app) {

	app.get('/locations', function (req, res) {

		var lat = parseFloat(req.query.lat)
		var long = parseFloat(req.query.long)

		locations.getByLatLong(lat, long).then(function (rows) {
				res.send({ devices: rows })
			})
			.catch(function (err) {
				console.error(err)
			})

	})

}

module.exports = locationsRoute
