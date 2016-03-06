'use strict'

let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let mysql = require('mysql')

let app = express()
let port = process.env.PORT || 7799

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

global.connectionPool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'AED',
	debug: false
})

let route = require('./route')
route(app)

app.use('/', express.static(path.resolve(__dirname + '/public')))

app.listen(port, (err) => {
	if (err) console.error(err)
})

console.log('Running on http://localhost:' + port + '...')
