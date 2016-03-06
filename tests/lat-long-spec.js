
var latLong = require('../server/lat-long')
var expect = require('chai').expect

var actual

describe('.getBound()', () => {

	context('given an object with keys `lat` and `long`', () => {

		context('with a factor of 1', () => {
			beforeEach(function () {
				actual = latLong.getBound({
					lat: 20,
					long: 50
				}, 1)
			})

			it('should return an object', () => {
				expect(actual).to.be.an.object
			})

			it('should have keys for bounds', () => {
				expect(actual).to.have.keys([
					'latUpper',
					'latLower',
					'longUpper',
					'longLower'
				])
			})

			it('should increment and decrement', () => {
				expect(actual.latUpper).to.equal(20.001)
				expect(actual.latLower).to.equal(19.999)
				expect(actual.longUpper).to.equal(50.001)
				expect(actual.longLower).to.equal(49.999)
			})
		})

		context('with a factor of 5', () => {
			beforeEach(function () {
				actual = latLong.getBound({
					lat: 20,
					long: 50
				}, 5)
			})

			it('should increment and decrement', () => {
				expect(actual.latUpper).to.equal(20.005)
				expect(actual.latLower).to.equal(19.995)
				expect(actual.longUpper).to.equal(50.005)
				expect(actual.longLower).to.equal(49.995)
			})
		})

	})
	
})
