const express = require('express')

const app = express()
const PORT = 3000

const empRouter = require('./routes/emp-route')

app.use(empRouter)                                      //using the route

app.listen(PORT, () => {
    console.log('server is running..')
})