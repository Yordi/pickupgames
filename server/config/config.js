module.exports = function(env){
	var development = {
		db : 'mongodb://localhost/sporten',
		port: process.env.PORT || 5000
	};

	var production = {
		db : '',
		port: process.env.PORT || 5000
	};

	return env === 'development' ? development: production;
}