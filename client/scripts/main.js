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

aedLocatorApp.controller('AedController', ['$scope', '$location', function($scope, $location) {

    $scope.changeView = function(view) {
      $location.path(view);
    }


}]);

aedLocatorApp.controller('AddViewController', ['$scope', '$location', function($scope, $location) {

    $scope.addView0 = true;
    $scope.addView1 = false;
    $scope.addView2 = false;
    $scope.addView3 = false;
    $scope.addView4 = false;
    $scope.addView5 = false;

    $scope.switchView1 = function() {
      $scope.addView1 = !scope.addView1;
    }

    $scope.switchView2 = function() {
      $scope.addView2 = !$scope.addView2;
    }

    $scope.switchViewCancel3 = function() {
      $scope.addView3 = !$scope.addView3;
      $scope.addView0 = !$scope.addView0;
    }

    $scope.switchView3 = function() {
      $scope.addView0 = !$scope.addView0;
      $scope.addView3 = !$scope.addView3;

      var lat = userMarker._latlng.lat;
      var lng = userMarker._latlng.lng;
      aed.lat = lat;
      aed.lng = lng
    }

    $scope.switchViewCancel4 = function() {
      $scope.addView3 = !$scope.addView3;
      $scope.addView4 = !$scope.addView4;
    }

    $scope.switchView4 = function() {
      $scope.addView3 = !$scope.addView3;
      $scope.addView4 = !$scope.addView4;

      // addUpdatePhotoInput
      var photo = document.getElementById('addUpdatePhotoInput').value;
      aed.photo = photo
    }

    $scope.switchView5 = function() {
      $scope.addView5 = !$scope.addView5;

      var desc = document.getElementById('addUpdateDescInput').value;
      aed.desc = desc
      console.log(aed)
    }

    // create aed object

    var aed = {}
    
    /* ************************* MAP LOCATION STUFF ********************************/

    // initialize map
    var map = L.map('addLocMap').setView([45,-93.25], 10);

    // create basemap
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    function locateUser(e) {

      // gets latlng of locationfound event
      userLocation = e.latlng;

      // radius for the accuracy
      var radius = e.accuracy/2;

      // variable for a user marker
      userMarker = L.marker(userLocation);

      // variable for circle
      circle = L.circle(userLocation, radius);
      
      // add marker for location and circle for accuracy
      map.addLayer(userMarker);
      map.addLayer(circle);
    }

    // handle geolocation errors
    function locateUserError(e) {
      alert(e.message);
    }

    // run geolocation functions
    map.on('locationfound', locateUser);
    map.on('locationerror', locateUserError);
    map.locate({setView: true});

    // allow user to adjust location
    map.on('move', function(e) {
      userLocation = map.getCenter();
      if (typeof userMarker !== 'undefined')   {
        userMarker.setLatLng(userLocation);
        map.removeLayer(circle);
      }
    });



    // $scope.correctAedLocation = function(preExistingAed) {
    //     $scope.addView0 = !$scope.addView0;
    //     // TODO run a query here to find the closest AED again, in case the map has moved. Then it'll be View1 OR View4
    //     if(preExistingAed){
    //         $scope.addView1 = !$scope.addView1;
    //     } else {
    //         $scope.addView4 = !$scope.addView4;
    //     }
    // };
    // $scope.thatWasTheSameAed = function() {
    //     $scope.addView1 = !$scope.addView1;
    //     $scope.addView2 = !$scope.addView2;
    // };
    // $scope.thatWasNotTheSameAed = function() {
    //     // TODO bring up the next closest AED, until we run out of AEDs within 20m
    //     $scope.addView1 = !$scope.addView1;
    //     $scope.addView4 = !$scope.addView4;
    // };
    // $scope.updateAedDescription = function() {
    //     $scope.addView2 = !$scope.addView2;
    //     $scope.addView4 = !$scope.addView4;
    // };
    // $scope.confirmNearestAed = function() {
    //     $scope.addView2 = !$scope.addView2;
    //     $scope.addView5 = !$scope.addView5;
    // };
    // $scope.updateAedPhoto = function() {
    //     $scope.addView2 = !$scope.addView2;
    //     $scope.addView3 = !$scope.addView3;
    // };
    // $scope.setAedDescription = function() {
    //     $scope.addView4 = !$scope.addView4;
    //     $scope.addView3 = !$scope.addView3;
    // };
    // $scope.photoTaken = function() {
    //     $scope.addView3 = !$scope.addView3;
    //     $scope.addView5 = !$scope.addView5;
    // };
    // $scope.devStartOver = function() {
    //     $scope.addView5 = !$scope.addView5;
    //     $scope.addView0 = !$scope.addView0;
    // };



  
}]);



