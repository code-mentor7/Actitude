var bcrypt = require('bcrypt');
var db = require('../database');

module.exports.getCount = function(callback) {
  db.query("select count(*) as total from users", callback);
};

module.exports.findAll = function(callback) {
  db.query("SELECT * FROM users", callback);
};

module.exports.addUser = function(data, callback) {
	db.query("INSERT INTO users SET ?", data, callback);
};

module.exports.findByUsername = function(username, callback) {
	db.query("SELECT * FROM users WHERE username = '" + username + "'", callback);
};

module.exports.encrypt = function(data, callback) {
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(data.password, salt, callback);
	})
};

module.exports.sendResponse = function(success, res) {
	if(success) {
		res.send({'success': 'true'});
	} else {
		res.send({'success': 'false'});
	}
};
