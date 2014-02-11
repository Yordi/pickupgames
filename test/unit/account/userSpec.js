var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	config = require('../../server/config/config')('developement');

describe('User', function () {
	// body...
	var user;
	beforeEach(function (done) {
		User.findOne({username: config.username}, function(err, result){
			if (err) { return err;}
			if (!user) throw 'cannot find '+config.username;
			user = result;
		});
	});

	it('Create a user and check if the user exists in the database', function (done) {
		assert.equal(true, false);
	});
});