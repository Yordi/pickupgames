module.exports = function(env){
	var development = {
		db : 'mongodb://localhost/sporten',
		port: process.env.PORT || 5000,
		username: 'davyengone'
	};

	var production = {
		db : '',
		port: process.env.PORT || 5000,
		username: 'sporten'
	};

	return env === 'development' ? development: production;
}