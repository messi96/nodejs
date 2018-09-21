function addNumbers(a, b) {
    const c = a + b
    return c
}

function subNumbers(a, b) {
    const c = a - b
    return c
}

//module.exports = addNumbers;            //exporting function
module.exports = {                        //exported as a object
    addNumbers: addNumbers,               //property of an oject
    subNumbers: subNumbers,               //or you can just use --> subNumbers
    multiplyNumbers: function(a,b) {
        return a*b
    }
}
