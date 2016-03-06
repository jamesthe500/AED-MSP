;(function() {
  
  var app = angular.module('aedLocatorApp')
  
  app.service('UserMedia', ['$q', function($q) {
  
    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    
    var constraints = {
      audio: false,
      video: true
    };
    
    var deferred = $q.defer();
    
    var get = function() {
      navigator.getUserMedia(
        constraints,
        function(stream) { deferred.resolve(stream); },
        function errorCallback(error) {
          console.log('navigator.getUserMedia error: ', error);
          deferred.reject(error);
        }
      );
      
      return deferred.promise;
    }
    
    return {
      get: get
    }
    
  }]);
  
})();





aedLocatorApp.controller('VideoController', ['$scope', function($scope) {
  
  var video = document.querySelector('#videoTag');
  var canvas = document.querySelector('#canvasTag');
  var ctx = canvas.getContext('2d');
  var localMediaStream = null;

  $scope.takeSnapshot = function() {
    if (localMediaStream) {
      ctx.drawImage(video, 0, 0);
      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      document.querySelector('img').src = canvas.toDataURL('image/jpeg');
    }
  }

  video.addEventListener('click', snapshot, false);
  
  navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  // Not showing vendor prefixes or code that works cross-browser.
  navigator.getUserMedia({video: true}, function(stream) {
    video.src = window.URL.createObjectURL(stream);
    localMediaStream = stream;
  }, function(){});
  
  
}]);