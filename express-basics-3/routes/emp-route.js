const express = require('express')

const empRouter = express.Router()

const empController = require('../controllers/emp-controllers')

// empRouter.get('/api/employees', (req,res) => {
//     res.send('list of all employees')
// })

empRouter.get('/', empController.getEmployees)

empRouter.get('/:id', empController.getEmployeeById)
empRouter.post('/', empController.CreateEmployee)

// empRouter.delete('/api/employees/:id', (req,res) => {
//     res.send('will this delete?')
// })

empRouter.delete('/api/employee/:id', empController.DeleteEmployee)

//empRouter.put()

module.exports = empRouter;