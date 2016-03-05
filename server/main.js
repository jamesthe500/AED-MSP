
var express = require('express')
var app = express()
var path = require('path')

var route = require('./route')
route(app)

app.use("/", express.static(path.resolve(__dirname + "/public")))

app.listen(7799, function (err) {
	if (err) console.error(err)
})

console.log('Running on http://localhost:7799...')
