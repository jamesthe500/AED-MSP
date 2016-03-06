
var db = require('../db')
var moment = require('moment')
var _ = require('lodash')

var aedDescriptions = {}

aedDescriptions.createDescription = function (aedDescription) {

	var expirationDate = _.has(aedDescription, 'expirationDate') ? aedDescription.expirationDate : ''
	aedDescription.filePath = 'some/file/path'

	return new Promise(function (resolve, reject) {
		var queryParts = [
			"INSERT INTO aed_description",
			"(FilePath, Description, ExpirationDate, LocationId)",
			"VALUES (?, ?, ?, ?)"
		]

		var query = queryParts.join(' ') + ';'

		var values = [
			aedDescription.filePath,
			aedDescription.description,
			moment(expirationDate).format('YYYY-MM-DD HH:mm:ss'),
			aedDescription.locationId
		]

		db.insert(query, values)
			.then((data) => {
				resolve(data)
			})
			.catch((err) => {
				reject(err)
			})
	})
}

module.exports = aedDescriptions
