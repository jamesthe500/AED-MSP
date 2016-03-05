
var mysql = require('mysql')

function connect () {

	return mysql.createConnection({
		host: 'localhost'
	})

}
