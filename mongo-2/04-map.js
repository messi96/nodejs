const listOfEmployees = [
    {
        id: 1,
        firstName: 'Rajat',
        lastName: 'Moury',
        city: 'Mumbai'
    },
    {
        id: 2,
        firstName: 'Lionel',
        lastName: 'Messi',
        city: 'Barca'
    },{
        id: 3,
        firstName: 'Amy',
        lastName: 'DX',
        city: 'Mumbai'
    }
]

const foundEmp = listOfEmployees.find(e => e.city === "Mumbai")
console.log(foundEmp)

console.log("All employes from Mumbai")
const foundEmps = listOfEmployees.filter(e => e.city === "Mumbai")
console.log(foundEmps)

const empWithFullName = listOfEmployees.map(e => {
    e.fullName = e.firstName + ' ' + e.lastName
    return e
})
console.log(empWithFullName)