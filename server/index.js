var express = require('express'),
	app = express(),
	path = require('path');

// Add middleware
app.use(express.static(path.join(__dirname, '../public')));

app.listen(Number(process.env.PORT || 5000));	