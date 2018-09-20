const employee = require('../mock-data/employees')
const jsonData = require('../mock-data/emp.json')
const Employee = require('../models/emp-model')

function getEmployees(req,res) {

    // res.send(employee)                  //this   returned as an object
    // res.send(employee.listOfEmployees)  //notice the difference between thsi and above with postman
    // res.send('List of all employees : hmmmm')
    //  res.send(jsonData)

     Employee.find({}).then((data) => {
         res.send(data)
     }).catch(() => {
         res.status(404).send('Couldnt fetch Employees')
     }) 
}

function getEmployeeById(req,res) {
    console.log(req.params)
    const empId = req.params.id                        //convert string to a number
    // const employee = jsonData.find(e => e.id == req.params.id)           //=== here wont work cuz id is string and checked with integer
    
    Employee.findById(empId).then(emp => res.send(emp))
        .catch(err => {
            res.status(404).res.send('Employee not found')
        })
        
    // const employee = jsonData.find(e => e.id === empId)   //single line for below one
    // if(!employee)
    //     return res.status(404).send('No Employee Found!')
    
    // const employee = jsonData.find(function(e) {
    //     return e.id === empId
    // })
    
    // const employee = {
    //     id: 1,
    //     firstName: 'Rajat',
    //     lastName: 'Moury',
    //     city: 'Mumbai'
    // }    
    // res.send(jsonData)
   
    // res.send(employee)
   
    // res.send('Employee details')
}

function CreateEmployee(req,res) {
    const newEmployee = req.body
    const empObj = new Employee(newEmployee)
    empObj.save().then((emp) => {
        // res.status(201).send('New employee created')
        res.status(201).send(emp)
    }).catch(err => {
        res.status(500).send('internal server error')
      })
    

    // newEmployee.id = employee.length + 1
    // employee.push(newEmployee)
    // console.log('Request Body : ',newEmployee)
    // res.status(201).send(newEmployee)                             //201 created
    // there shouldnt be nothing after response send!                                    
    // res.send('Create employee')
}

function UpdateEmployee(req,res) {
    res.send('Update employee')
}

function DeleteEmployee(req,res) {
    res.send('Deleted')
}

module.exports  = {
    getEmployees,
    getEmployeeById,
    CreateEmployee,
    UpdateEmployee,
    DeleteEmployee
}