const fs = require('fs');           //filesystem node js module

// Async :: 
// fs.readFile('test.txt', function(err,data) {
//     if(err) {
//         console.log(err)
//         return
//     }

//     console.log('File contents : ', data.toString())

//     fs.writeFile('dummy.txt', data, function(err) {
//         if(err)
//             return console.log('Error in writing the dummy file')
//     })

// })

// Sync :: 

const data = fs.readFileSync('test.txt')
console.log('Synchronous programming!')
fs.writeFileSync('sync.txt',data)