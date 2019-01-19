const express = require('express')
const mysql = require('mysql');
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

const empRouter = require('./routes/emp-route')

// parse application/x-www-form-urlencoded                      //body-parser kind of middleware for reading request and parsing
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())                              //these configuration should go above route call.. cuz the controller is invoked there itself

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "stockMarkets"
});

con.connect()

app.listen(PORT, () => {
    console.log('server is running..')
})

app.use(empRouter)                                      //using the route