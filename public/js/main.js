require.config({
    //waitSeconds : 120, //make sure it is enough to load all gmaps scripts
    paths : {
    	'domReady': '../vendor/requirejs-domready/domReady',
        'async' : '../vendor/requirejs-plugins/src/async', //alias to plugin
        'angular': '../vendor/angular/angular',
        'routes': '../vendor/angular-route/angular-route',
        'animate': '../vendor/angular-animate/angular-animate',
        'resource': '../vendor/angular-resource/angular-resource',
        'sporten': '../js/sporten',
        'maps': '../js/maps'
    }
});

define(['require','angular','sporten','maps'], function (require) {
 	'use strict';
 
 	require(['domReady!'], function (document) {
     	angular.bootstrap(document, ['sporten', 'maps']);
    });
});
