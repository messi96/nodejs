console.log('Hello world!')
// setTimeout(function() {                         //functional programming language.. func inside func
//     console.log("printing after some time")
// }, 5000)
const printValue = function() {                         //functional programming language.. func inside func
    console.log("printing after some time")
}
setTimeout(printValue, 4000)                        //sleep kind of
console.log("wow")

const interval = setInterval(function() {console.log('testm3')}, 1000)       //
//clearInterval(interval)

