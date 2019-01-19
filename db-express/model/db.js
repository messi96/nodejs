//this is a db connection wrapper, this will allow you to create connection on db which stored on a single file and can be reuse by other modules.
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "stockMarkets"
});

con.connect(function(err) {
    if(err) throw err;
})

module.exports = con;