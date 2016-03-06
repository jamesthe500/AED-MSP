
var locationsRoute = require('./locations/route')

function route (app, pool) {

	locationsRoute(app, pool)

}

module.exports = route
