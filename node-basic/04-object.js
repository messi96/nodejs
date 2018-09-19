function Employee(id, fName, lName, city) {                 //employee kind of class
    this.id = id;
    this.firstname = fName;
    this.lastname = lName;
    this.city = city;
}

const shivan = new Employee(1, 'shivan', 'kumar', 'Trivandrum')
const rajat = new Employee(2, 'Rajat', 'moury', 'Mumbai')

console.log(shivan)
console.log(rajat.firstname + ' ' + rajat.lastname)

const fxCashProduct = {                 //javascript object (JSON look-alike)
    type: 'spot',
    currentPrice: 145,
    closingPrice: 150,
    exchange: 'JPN'
}

console.log(fxCashProduct)
console.log(fxCashProduct.currentPrice)
    