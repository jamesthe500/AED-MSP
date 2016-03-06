
var db = require('../db')
var latLong = require('../lat-long')

var locations = {}

/**
 * Query for a list of nearby locations
 *
 * @param {float} lat
 * @param {float} long
 */
locations.getByLatLong = function (lat, long) {

	return new Promise(function (resolve, reject) {
		var bound = latLong.getBound({ lat, long }, 1)

		var queryParts = [
			"SELECT * FROM location",
			"WHERE latitude <= " + bound.latUpper,
			"AND latitude >= " + bound.latLower,
			"AND longitude >= " + bound.longLower,
			"AND longitude <= " + bound.longUpper
		]

		var query = queryParts.join(' ') + ';'

		db.query(query)
			.then((data) => {
				resolve(data.rows)
			})
			.catch((err) => {
				reject(err)
			})
	})

}

locations.createLocation = function (location) {

	return new Promise(function (resolve, reject) {
	var queryParts = [
		"INSERT INTO location",
		"(latitude, longitude)",
		"VALUES (" + location.latitude + ", " + location.longitude + ")"
	]

	var query = queryParts.join(' ') + ';'

	db.insert(query)
		.then((data) => {
			resolve(data)
		})
		.catch((err) => {
			reject(err)
		})
	})
}

module.exports = locations
