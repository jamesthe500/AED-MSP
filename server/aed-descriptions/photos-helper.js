var photos = {}

var fs = require('fs')
var uuid = require('node-uuid')
var mime = require('mime')

photos.uploadPhoto = function (){
  return function(req, res, next){
    var photo = req.file

		if (!photo) {
			return next()
		}

		var fileName = uuid.v4() + "." + mime.extension(photo.mimetype)
    var newPath = __dirname + "/../../uploads/photos/" + fileName

    fs.writeFile(newPath, photo.buffer, function (err) {
      if (err){
        console.error(err)
      }

      req.body.description.filePath = fileName
      next()
    })
  }
}

module.exports = photos
