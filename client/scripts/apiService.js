;(function() {
  
  var API_BASE_URL = '';
  
  var app = angular.module("aedLocatorApp");
  
  app.factory("aedApi", ['$cacheFactory', '$http', function($cacheFactory, $http) {
    
    var api = {};
    
    api.queryAeds = function(lat, lon) {
      return $http.get('/locations?lat=' + lat + "&long=" + lon).then(function(response) {
        return response.data
      }, function(error) {
        console.log("error while querying api");
        console.log(error);
      });
    };
    
    api.createAed = function(aedFormData) {
      return $http.post('/locations', formData, {
        transformRequest: angular.identity,
        headers: { 'Content-Type' : undefined }
      });
    }
    
    return api;
    
  }]);
  
})();