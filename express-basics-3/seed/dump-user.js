const mongoose = require('mongoose')

const url = 'mongodb://admin:password123@ds139884.mlab.com:39884/node-mongo'
mongoose.connect(url, {useNewUrlParser: true})
const User = require('../models/user-model')

const user = new User({
    name: 'rajat',
    password: 'rajat',
    admin: true
});

user.save().then(res => {
    console.log(res)
}).catch(err => {
    console.log('Error Occured')
})