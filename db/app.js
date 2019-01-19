var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "stockMarkets"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT count(*) FROM data", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});