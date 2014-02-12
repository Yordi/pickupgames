var express = require('express'),
	app = express();
	
var env = process.env.NODE_ENV || 'development';

var config = require('./config/config')(env);

require('./config/express')(app);
//require('./config/mongoose')(config);

app.listen(config.port);