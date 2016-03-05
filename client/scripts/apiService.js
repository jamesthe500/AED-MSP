;(function() {
  
  var API_BASE_URL = '';
  
  var app = angular.module("AedLocator");
  
  app.factory("aedApi", ['$cacheFactory', '$http' function($cacheFactory, '$http') {
    
    var api = {};
    var aedCache = $cacheFactory('aed');
    
    api.getAed = function(aedId) {
      if (aedCache.get(aedId)) { return aedCache.get(aedId); };
      
      return $http.get('AED ID URL').then(function(response) {
        cache.put(response.id, response.data);
        return response;
      });
    };
    
    api.queryAeds = function(lat, lon) {
      return $http.get('AED LOCATION QUERY URL').then(function(response) {
        return response.data
      });
    };
    
    
    return api;
    
  }]);
  
})();