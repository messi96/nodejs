function getEmployees(req,res) {
    res.send('List of all employees : hmmmm')
}

function getEmployeeById(req,res) {
    res.send('Employee details!')
}

// function CreateEmployee(req,res) {
//     res.send('Create employee')
// }

function CreateEmployee(req,res) {
    res.send('Create employee!')
}

function DeleteEmployee(req,res) {
    res.send('Deleted!')
}

module.exports  = {
    getEmployees,
    getEmployeeById,
    CreateEmployee,
    DeleteEmployee
}