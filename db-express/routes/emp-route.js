const express = require('express')

const empRouter = express.Router()

const empController = require('../controllers/emp-controllers')

// empRouter.get('/api/employees', (req,res) => {              //Router without controller
//     res.send('list of all employees!!!!')
// })

empRouter.get('/api/all', empController.listAllTasks)
empRouter.get('/api/symbol', empController.listSymbol)                              //will have to post symbol for filters!
empRouter.get('/api/count', empController.countRows)

module.exports = empRouter;