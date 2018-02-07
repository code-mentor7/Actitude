var db = require('../database');

module.exports.getStatistics = function(callback) {
  db.query('SELECT \n' +
    '(SELECT COUNT(*) FROM users) as user,\n' +
    '(SELECT COUNT(*) FROM devices) as device,\n' +
    '(SELECT COUNT(*) FROM license) as license,\n' +
    '(SELECT COUNT(*) FROM venue) as venue', callback);
};

module.exports.sendResponse = function(success, res) {
	if(success) {
		res.send({'success': 'true'});
	} else {
		res.send({'success': 'false'});
	}
};
