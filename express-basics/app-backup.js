var express = require('express')
var app = express()                                 //needed a instance of the function express..?

const utils = require('./utils')

app.get('/', function (req, res) {
//app.get('/', (req, res) => {
  res.send('Hello World')
})
 
app.get('/about', (req, res) => {
      res.send('About Us')
})

app.get('/employees/:id', (req,res) => {
    res.send('List of employees')
})

app.get('/Contact', (req, res) => {
    res.send('Contact ME')
})

app.get('/sum', (req, res) => {
    const result = utils.addNumbers(12,15)
    res.send('Sum of 2 numbers is : ' + result)
})

app.get('/subtract', (req, res) => {
    const result = utils.subNumbers(15,12)
    res.send('Sum of 2 numbers is : ' + result)
})

app.get('/multiply', (req, res) => {
    const result = utils.multiplyNumbers(15,12)
    res.send('Multiplication of 2 numbers is : ' + result)
})

app.listen(3000, () => {
    console.log("server is running somewhere... ")
})