var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: '{Path} is required'
	},
	lastName: {
		type: String,
		required: '{Path} is required'
	},
	username: {
		type: String,
		required: '{Path} is required'
	}
});

var User  = mongoose.model('User', userSchema);