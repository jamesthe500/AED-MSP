
var express = require('express')
var app = express()

var route = require('./route')
route(app)

app.listen(7799, function (err) {
	if (err) console.error(err)
})

console.log('Running on http://localhost:7799...')
