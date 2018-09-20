const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')                       //Node.js body parsing middleware
const app = express()
const PORT = 3000

const empRouter = require('./routes/emp-route')

// parse application/x-www-form-urlencoded                      //body-parser kind of middleware for reading request and parsing
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())                              //these configuration should go above route call.. cuz the controller is invoked there itself

app.use(empRouter)                                      //using the route

const url = 'mongodb://admin:password123@ds139884.mlab.com:39884/node-mongo'
mongoose.connect(url, {useNewUrlParser: true})

app.listen(PORT, () => {
    console.log('server is running..')
})