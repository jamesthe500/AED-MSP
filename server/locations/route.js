'use strict'

var _ = require('lodash')
var locations = require('./locations')
var aedDescriptions = require('../aed-descriptions/aed-descriptions')
var photosHelper = require('../aed-descriptions/photos-helper')

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

	app.post('/locations', [ photosHelper.uploadPhoto(), function(req, res){

		var location = req.body.location
		var aedDescription = req.body.description

		locations.createLocation(location).then(function (locationResult) {
			location.id = locationResult.insertId

			if (_.isEmpty(aedDescription)) {
				return res.send({ location })
			}

			aedDescription.locationId = location.id
			aedDescriptions.createDescription(aedDescription)
				.then(function (descriptionResult) {
					aedDescription.id = descriptionResult.insertId
					res.send({ location, description: aedDescription })
				})
				.catch(function (err) {
					res.status(500).send(err)
				})
		})
		.catch(function (err) {
			console.error(err)
		})

	}])

	app.put('/locations', function(req, res) {
		var aedDescription = req.body.description

		aedDescriptions.updateDescription(aedDescription).then(function (descriptionResult) {
			res.send({description: aedDescription})
		})
		.catch(function (err) {
			res.status(500).send(err)
		})
	})

}

module.exports = locationsRoute
