define(['angular', 'async!http://maps.google.com/maps/api/js?sensor=false'],function(){

	var maps = angular.module('maps', []);

	maps.controller('mapsCtrl', ['$scope', '$http', function($scope, $http){

		$scope.map = new google.maps.Map(document.getElementById('map'), {
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


		var key = 'AIzaSyCMULw9xVBhp9MxFYUgBLeUXfCRihovhm8';

		var venues = [
						{ name: 'Buena Center', playing: true, description: 'We play here 4 time a week', category:['basket', 'tennis'], lat: '37.78549', long: '-122.40118'},
					 	{ name: 'Indoor court, near Civic Center', description: 'We play here every day from 7pm to 9pm!', category:['tennis'], lat: '37.78631', long: '-122.41654'},
					 	{ name: 'Indoor court', description: 'Game this evening, Do not forget your shoes!',  category:['basket'], lat: '37.78176', long: '-122.41543'},
					 	{ name: 'Outdoor court', description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.77742', long: '-122.41320'},
					 	{ name: 'Golden Gate Ave, outdoor', description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['tennis'], lat: '37.78176', long: '-122.42658'},
					 	{ name: 'Golden Gate Ave', playing: true, description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.78136', long: '-122.42444'},
					 	{ name: 'Western Addition', description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.78325', long: '-122.43508'},
					 	{ name: 'Jackson Park', description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.79221', long: '-122.42710'},
					 	{ name: 'Pacific Height',playing: true, description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.79180', long: '-122.43817'},
					 	{ name: 'Outdoor court', description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.79465', long: '-122.46203'},
					 	{ name: 'Outdoor court', description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.79506', long: '-122.47242'},
					 	{ name: 'Outdoor court', playing: true, description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.80075', long: '-122.47637'},
					 	{ name: 'Outdoor court', description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.80733', long: '-122.47405'},
					 	{ name: 'Financial District', description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.79492', long: '-122.40015'},
					 	{ name: 'Outdoor court', playing: true, description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.80014', long: '-122.40435'},
					 	{ name: 'Green Street', description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.79926', long: '-122.41234'},
					 	{ name: 'Outdoor court', description: 'All levels are welcome, Game tomorrow from 7pm-9pm', category:['basket'], lat: '37.79655', long: '-122.41834'}
				 	];
		
		$scope.getVenues = function getVenues(){
			venues.forEach(function(venue){
				// Create a marker
				var setIcon = function(){
			    	if (venue.category.length > 1) {
			    		return 'images/36/Sporten36.ico';
			    	}
			    	return venue.category.indexOf('basket') > - 1 ? 'images/36/SportenBBall36.ico': 'images/36/SportenTennis36.ico';
			    }

				var marker = new google.maps.Marker({
				    position: new google.maps.LatLng(venue.lat, venue.long),
				    title: venue.name,
				    map: $scope.map,
				    icon: setIcon(),
				    draggable: false,
				    info: new google.maps.InfoWindow({content: venue.description}),
				    animation: venue.playing? google.maps.Animation.BOUNCE :google.maps.Animation.DROP
				});
				google.maps.event.addListener(marker,'click', function(){
					marker.info.open($scope.map, marker);
				});

				if (venue.playing) {
					google.maps.event.addListener(marker, 'click', function(){
						if (marker.getAnimation() != null) {
					    	marker.setAnimation(null);
					  	} else {
					    	marker.setAnimation(google.maps.Animation.BOUNCE);
					  	}
					});
				}
				

			});
		}

		$scope.getVenues();

		$scope.initMap = initMap ($scope, $scope.map);
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


	function initMap($scope, map){
	    centerMapToUserPosition(map, $scope);

    	var content = '<div class="info"> When: <input type="text"><br/>Sport: <input type="text"> <br/>Level: <input type="text"><br/>Group: <input type="text"><input type="button" value="Add"/></div>';

		// Add marker on the map!
		var marker = new google.maps.Marker({
		    position: new google.maps.LatLng(37.78359, -122.40890),
		    title:"@davyengone",
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
				icon: 'images/36/Sporten36.ico',
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

