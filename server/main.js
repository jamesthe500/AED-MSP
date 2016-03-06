
var express = require('express')
var app = express()
var path = require('path')
var port = process.env.PORT || 7799

var route = require('./route')
route(app)

app.use('/', express.static(path.resolve(__dirname + '/public')))

app.listen(port, function (err) {
	if (err) console.error(err)
})

console.log('Running on http://localhost:' + port + '...')
