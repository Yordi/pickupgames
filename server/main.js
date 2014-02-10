var express = require('express'),
	app = express();
	


require('./config/express')(app);

app.listen(Number(process.env.PORT || 5000));	