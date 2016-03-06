;(function() {
  
  var API_BASE_URL = '';
  
  var app = angular.module("AedLocator");
  
  app.factory("aedApi", ['$cacheFactory', '$http' function($cacheFactory, '$http') {
    
    var api = {};
    
    api.queryAeds = function(lat, lon) {
      return $http.get('AED QUERY ENDPOINT').then(function(response) {
        return response.data
      });
    };
    
    api.createAed = function(aed) {
      var formData = new FormData();
      
      for (key in aed) {
        formData.append(key, aed[key])
      }
      
      return $http.post('/locations', formData, {
        transformRequest: angular.identity,
        headers: { 'Content-Type' : undefined }
      });
    }
    
    return api;
    
  }]);
  
})();