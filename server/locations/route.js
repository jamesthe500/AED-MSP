'use strict'

var locations = require('./locations')
var aedDescription = require('../aed-descriptions/aed-descriptions')

function locationsRoute (app) {

	app.get('/locations', function (req, res) {

		var lat = parseFloat(req.query.lat)
		var long = parseFloat(req.query.long)

		locations.getByLatLong(lat, long).then(function (rows) {
				res.send({ locations: rows })
			})
			.catch(function (err) {
				console.error(err)
			})

	})

	app.post('/locations', function(req, res){

		var location = req.body.location

		locations.createLocation(location).then(function (result) {
			location.id = result.insertId
			res.send(location)
		})
		.catch(function (err) {
			console.error(err)
		})

	})

}

module.exports = locationsRoute
