'use strict'

let db = {}

db.query = function (query) {

	return new Promise((resolve, reject) => {
		global.connectionPool.query(query, (err, rows, fields) => {
			if (err) return reject(err)

			resolve({ rows, fields })
		})
	})

}

db.insert = function (query) {

		return new Promise((resolve, reject) => {
			global.connectionPool.query(query, (err, result) => {
				if (err) return reject(err)

				resolve(result)
			})
		})
}

module.exports = db
