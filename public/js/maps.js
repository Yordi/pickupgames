define(['angular', 'async!http://maps.google.com/maps/api/js?sensor=false'],function(){

	var maps = angular.module('maps', []);

	maps.controller('mapsCtrl', ['$scope', '$http', function($scope, $http){
		var key = 'AIzaSyCMULw9xVBhp9MxFYUgBLeUXfCRihovhm8';
		
		$scope.getVenues = function getVenues(){
			$http({
		      method: 'GET',
		      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.78359,-122.40890&radius=10000&types=food&name=harbour&sensor=false&key='+key,
		      headers: {
		        'Content-Type': 'application/json; charset=utf-8',
		        'dataType': 'json',
		        'data': 'jsonp'
		      }
		    })
			.success(function(data, status, headers, config) {
				$scope.code = status;
				$scope.results = data;
				console.log(data);
			}).error(function(data, status, headers, config) {
				console.log(data);
			});
		}

		$scope.initMap = initMap ($scope);
	}]);

	return maps;

	function centerMapToUserPosition(map, $scope){
		var initialLocation = null;
		if(navigator.geolocation) {
			browserSupportFlag = true;
			navigator.geolocation.getCurrentPosition(function(position) {
			  initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			  $scope.initialLocation= initialLocation;
			  map.setCenter(initialLocation);
			}, function() {
				console.log('inside second function');
			  handleNoGeolocation(browserSupportFlag);
			});
		}
		else {
		browserSupportFlag = false;
			handleNoGeolocation(browserSupportFlag);
		}

		function handleNoGeolocation(errorFlag) {
			if (errorFlag == true) {
			  initialLocation = new google.maps.LatLng(37.4419, -122.1419);
			} else {
			  initialLocation = new google.maps.LatLng(37.4419, -122.1419);
			}
			map.setCenter(initialLocation);
			return initialLocation;
		}

		return initialLocation;
	}


	function initMap($scope){
		var canvas = document.getElementById('map');

		$scope.getVenues();

		var map = new google.maps.Map(canvas, {
	        zoom: 15,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        panControl: false,
	        streetViewControl: false,
	        navigationControl: true,
	        mapTypeControl: false,
  			zoomControlOptions: {
    			style: google.maps.ZoomControlStyle.SMALL
			},
	        navigationControlOptions: {
	            style: google.maps.NavigationControlStyle.SMALL
	        }
	    });

	    centerMapToUserPosition(map, $scope);
	    

    	var content = '<div class="info"> When: <input type="text"><br/>Sport: <input type="text"> <br/>Level: <input type="text"><br/>Group: <input type="text"><input type="button" value="Add"/></div>';

		// Add marker on the map!
		var marker = new google.maps.Marker({
		    position: new google.maps.LatLng(37.78359, -122.40890),
		    title:"Hello World!",
		    map: map,
		    icon: 'images/36/Sporten36.ico',
		    draggable: true,
		    animation: google.maps.Animation.DROP
		});

		google.maps.event.addListener(marker, 'click', function(){
			if (marker.getAnimation() != null) {
		    	marker.setAnimation(null);
		  	} else {
		    	marker.setAnimation(google.maps.Animation.BOUNCE);
		  	}
		});


		google.maps.event.addListener(map, 'click', function(event){
			var newMarker = new google.maps.Marker({
				icon: 'images/36/SportenBBall36.ico',
				map: map,
				position: event.latLng,
				animation: google.maps.Animation.DROP,
				info: new google.maps.InfoWindow({content: content})
			});
			google.maps.event.addListener(newMarker,'click', function(){
				newMarker.info.open(map, newMarker);
			});

			setTimeout(function(){
				map.panTo(event.latLng);
			}, 500);
		});

		google.maps.event.addListener(map, 'bounds_changed', function() {
	    	// 3 seconds after the center of the map has changed, pan back to the
	    	// marker.
	    	// window.setTimeout(function() {
	     //  		map.panTo(marker.getPosition());
	    	// }, 3000);
			//console.log(map.getBounds());
	  	});

		google.maps.event.addListener(marker, 'click', function() {
			//map.setZoom(8);
			//map.setCenter(marker.getPosition());
		});
	};
});

// define(['angular', 'async!http://maps.google.com/maps/api/js?sensor=false'],function(){

// 	angular.module('sporten', ['AngularGM'])
// 	.controller('SimpleMapCtrl', function($scope) {
// 	  $scope.$watch('center', function(center) {
// 	   if (center) {
// 	     $scope.centerLat = center.lat();
// 	     $scope.centerLng = center.lng();
// 	   }
// 	  });
	  
// 	  $scope.updateCenter = function(lat, lng) {
// 	    $scope.center = new google.maps.LatLng(lat, lng);
// 	  };
// 	});
// });



// 'async!http://maps.google.com/maps/api/js?sensor=false'
// define(['angular'], function(){

// 	var maps = angular.module('maps', []);

// 	maps.controller('mapsController', ['$scope', function($scope){
// 		// $scope.initMap = initMap;
// 	}]);

// 	return maps;

// 	
// });

