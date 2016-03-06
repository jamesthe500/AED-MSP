
var db = require('../db')
var latLong = require('../lat-long')

var locations = {}

/**
 * TODO: documentation
 */
locations.getByLatLong = function (lat, long) {

	return new Promise(function (resolve, reject) {
		var bound = latLong.getBound({
			lat: lat,
			long: long
		}, 1)

		var queryParts = [
			"SELECT * FROM location",
			"WHERE latitude <= " + bound.latUpper,
			"AND latitude >= " + bound.latLower,
			"AND longitude >= " + bound.longLower,
			"AND longitude <= " + bound.longUpper
		]

		var query = queryParts.join(' ') + ';'

		db.query(query, function (err, rows, fields) {
			if (err) return reject(err)

			resolve(rows)
		})
	})

}

module.exports = locations
