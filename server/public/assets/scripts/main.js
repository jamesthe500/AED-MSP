var aedLocatorApp = angular.module('aedLocatorApp', ['ngRoute']);


aedLocatorApp.config(['$routeProvider', function($routeProvider){

  $routeProvider.
    when('/', {
      templateUrl: '/assets/views/home-template.html'
    }).
    when('/add-aed', {
      templateUrl: '/assets/views/add-aed-template.html'
    }).
    when('/more-aed', {
      templateUrl: '/assets/views/more-aed-template.html'
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

aedLocatorApp.controller('AddViewController', ['$scope', '$location', 'aedApi', function($scope, $location, aedApi) {

    // create aed object
    var aed = { description : {}, location : {} };

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
      $scope.addView4 = !$scope.addView4;
      $scope.addView5 = !$scope.addView5;

      var desc = document.getElementById('addUpdateDescInput').value;
      aed.description.description = desc;
      var exp = document.getElementById('addUpdateDateInput').value;
      aed.description.expirationDate = exp;


      var fd = new FormData();
      fd.append('description[description]', aed.description.description);
      fd.append('description[expriationDate]', aed.description.expriationDate);
      fd.append('location[latitude]', aed.location.latitude);
      fd.append('location[longitude]', aed.location.description);

      console.log("Trying a POST!");
      aedApi.createAed(fd).then(function(response) {
        console.log("POST complete!");
        console.log(response);
      });
    }

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

      console.log(userLocation);
      aed.location.latitude = userLocation.lat;
      aed.location.longitude = userLocation.lng;
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
}]);

aedLocatorApp.controller('MoreViewController', ['$scope', '$location', 'aedApi', function($scope, $location, aedApi) {
   // initialize map
    var map2 = L.map('map').setView([45,-93.25], 9);

    // create basemap
    var basemap2 = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);

    function locateUser(e) {

      console.log('location found')

      // gets latlng of locationfound event
      userLocation = e.latlng;


      aedApi.queryAeds(String(userLocation.lat), String(userLocation.lng)).then(function(response) {
        console.log(response)
        for (var i = 0; i < response.locations.length; i++) {
          var desc = response.locations[i].description;
          var exp = response.locations[i].ExpirationDate == null ? '' : response.locations[i].ExpirationDate;
          var lat = parseFloat(response.locations[i].latitude);
          var lng = parseFloat(response.locations[i].longitude);
          var create = response.locations[i].UpdatedDate.slice(0,10);
          var aedPopup = ("<table><tr><td class='tableLeft'>Description</td><td class='tableRight'>" + desc +
          "</td></tr><tr><td class='tableLeft'>Expiration Date</td><td class='tableRight'>" + exp +
          "</td></tr><tr><td class='tableLeft'>Last Updated</td><td class='tableRight'>" + create +
          "</td></tr></table>");
          var aedMarker = L.marker([lat, lng]).bindPopup(aedPopup);
          map2.addLayer(aedMarker);
        }
      });
    }

    // handle geolocation errors
    function locateUserError(e) {
      alert(e.message);
    }

    // run geolocation functions
    map2.on('locationfound', locateUser);
    map2.on('locationerror', locateUserError);
    map2.locate({setView: true});



}]);
