'use strict'

let db = {}

db.query = function (query, callback) {

	return new Promise((resolve, reject) => {
		global.connectionPool.query(query, (err, rows, fields) => {
			if (err) return reject(err)

			resolve({ rows, fields })
		})
	})

}

module.exports = db
