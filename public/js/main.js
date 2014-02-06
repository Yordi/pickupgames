require({
    waitSeconds : 120, //make sure it is enough to load all gmaps scripts
    paths : {
        async : '../js/requirejs-plugins/src/async' //alias to plugin
    }
});

define(['async!http://maps.google.com/maps/api/js?sensor=false'], function(){
	// var canvas = document.getElementById('map');
	// var map = new google.maps.Map(canvas, {
 //        center: new google.maps.LatLng(37.4419, -122.1419),
 //        zoom: 13,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        navigationControl: true,
 //        navigationControlOptions: {
 //            style: google.maps.NavigationControlStyle.SMALL
 //        }
 //    });
});