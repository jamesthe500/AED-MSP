var photos = {}

var fs = require('fs')
var uuid = require('node-uuid')

photos.uploadPhoto = function (){
  return function(req, res, next){
    var photo = req.files.photo

    fs.readFile(photo.path, function (err, data) {

      var newPath = __dirname + "/../../uploads/photos/" + uuid.v4()
      fs.writeFile(newPath, data, function (err) {
        if (err){
          console.error(err)
        }
        req.body.description.filePath = newPath
        next()
      })
    })
  }
}

module.exports = photos
