/**
* app Module
*
* Description
*/

require.config({
    waitSeconds : 120, //make sure it is enough to load all gmaps scripts
    paths : {
    	'domReady': '../vendor/requirejs-domready/domReady',
        'async' : '../vendor/requirejs-plugins/src/async', //alias to plugin
        'angular': '../vendor/angular/angular',
        'sporten': '../js/sporten'
    }
});

define(['require','angular','app','routes'], function (require, ng) {
 	'use strict';
 
 	require(['domReady!'], function (document) {
     	ng.bootstrap(document, ['app']);
    });
});




