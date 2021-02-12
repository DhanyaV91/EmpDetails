var mysql = require('mysql');

var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'MySQL@8021',
	database:'employee'
});

module.exports = con;