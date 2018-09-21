const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')                       //Node.js body parsing middleware
const app = express()
const PORT = 3000

const cors = require('cors')
const authMiddleWare = require('./middlewares/auth')
const empRouter = require('./routes/emp-route')
const authRouter = require('./routes/auth-routes')
app.use(cors())

// parse application/x-www-form-urlencoded                      //body-parser kind of middleware for reading request and parsing
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())                              //these configuration should go above route call.. cuz the controller is invoked there itself

app.use('/api/employees', authMiddleWare.verifyUser, empRouter)                      //verify that the user is logged in before seeing list
// app.use(empRouter)                                      //using the route
app.use(authRouter)


const url = 'mongodb://admin:password123@ds139884.mlab.com:39884/node-mongo'
mongoose.connect(url, {useNewUrlParser: true})

// console.log(process.env)

app.listen(PORT, () => {
    console.log('server is running..')
})