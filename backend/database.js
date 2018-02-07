var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mobiki3_new'
});

connection.connect(function() {
	console.log("Connected");
});


module.exports = connection;
