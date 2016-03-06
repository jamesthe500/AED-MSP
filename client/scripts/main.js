var aedLocatorApp = angular.module('aedLocatorApp', ['ngRoute']);


aedLocatorApp.config(['$routeProvider', function($routeProvider){
  
  $routeProvider.
    when('/', {
      templateUrl: '/assets/views/home-template.html'
    }).
    when('/add-aed', {
      templateUrl: '/assets/views/add-aed-template.html'
    }).
    otherwise({
      redirectTo: '/'
    });
    
  
}]);

aedLocatorApp.controller('AedController', ['$scope', function($scope) {
  
}]);