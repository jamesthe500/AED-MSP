
function getBound (latLong, factor) {

	var increment = .001

	var x = increment * factor

	return {
		latUpper: latLong.lat + x,
		latLower: latLong.lat - x,
		longUpper: latLong.long + x,
		longLower: latLong.long - x
	}

}

module.exports = {
	getBound: getBound
}
