var express = require('express'),
	path = require('path');

module.exports = function(app){

	// Add middleware
	app.use(express.bodyParser());
	app.use(express.logger('dev'));
	app.use(express.static(path.join(__dirname, '../public')));
};