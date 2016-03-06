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

    $scope.addView0 = true;
    $scope.addView1 = false;
    $scope.addView2 = false;
    $scope.addView3 = false;
    $scope.addView4 = false;
    $scope.addView5 = false;

    $scope.newAedData = {};
    $scope.newAedData.description = {};
    $scope.newAedData.location = {};

    $scope.correctAedLocation = function(preExistingAed) {
        $scope.addView0 = !$scope.addView0;
        // TODO run a query here to find the closest AED again, in case the map has moved. Then it'll be View1 OR View4
        if(preExistingAed){
            $scope.addView1 = !$scope.addView1;
        } else {
            $scope.addView4 = !$scope.addView4;
        }
    };
    $scope.thatWasTheSameAed = function() {
        $scope.addView1 = !$scope.addView1;
        $scope.addView2 = !$scope.addView2;
    };
    $scope.thatWasNotTheSameAed = function() {
        // TODO bring up the next closest AED, until we run out of AEDs within 20m
        $scope.addView1 = !$scope.addView1;
        $scope.addView4 = !$scope.addView4;
    };
    $scope.updateAedDescription = function() {
        $scope.addView2 = !$scope.addView2;
        $scope.addView4 = !$scope.addView4;
    };
    $scope.confirmNearestAed = function() {
        $scope.addView2 = !$scope.addView2;
        $scope.addView5 = !$scope.addView5;
    };
    $scope.updateAedPhoto = function() {
        $scope.addView2 = !$scope.addView2;
        $scope.addView3 = !$scope.addView3;
    };
    $scope.setAedDescription = function() {
        $scope.addView4 = !$scope.addView4;
        $scope.addView3 = !$scope.addView3;
    };
    $scope.photoTaken = function() {
        $scope.addView3 = !$scope.addView3;
        $scope.addView5 = !$scope.addView5;
    };
    $scope.devStartOver = function() {
        $scope.addView5 = !$scope.addView5;
        $scope.addView0 = !$scope.addView0;
    };

    $scope.aedDescriptionData = function(){
        $scope.newAedData.description.description = this.text;
        $scope.newAedData.description.expirationDate = this.date;

        console.log($scope.newAedData);
        };


  
}]);