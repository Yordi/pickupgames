// Here is the basic server 
var express = require('express'),
	app = express(),
	path = require('path');

// Add middleware
app.use(express.static(path.join(__dirname, '../public')));