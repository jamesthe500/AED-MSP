
var mysql = require('mysql')

function connect () {

	var connection = mysql.createConnection({
		host: '10.22.136.145',
		user: 'root',
		password: '',
		database: 'AED'
	})

	connection.connect()

	return connection

}

function query (query, callback) {

	var connection = connect()
	connection.query(query, callback)
	connection.end()

}

module.exports = {
	query: query
}
