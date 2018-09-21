const faker = require('faker')
const Employee = require('../models/emp-model')

const employees = []

for(let i=0;i<20;i++) {
    const fakeEmployees = {
        empNo: faker.random.alphaNumeric(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        city: faker.address.city()
    }
    employees.push(fakeEmployees)
}

console.log(employees)

Employee.insertMany(employees)
    .then(res => {
        console.log("Inserted data ")
    }).catch(err => {
        
    })