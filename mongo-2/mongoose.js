const mongoose = require('mongoose');
const url = 'mongodb://admin:password123@ds139884.mlab.com:39884/node-mongo'

mongoose.connect(url);

const catSchema = { name : String, color:  String }
const Cat = mongoose.model('Cat', catSchema);

const kitty = new Cat({ name: 'zidane' , color: 'white' });

kitty.save().then(() => {                       //promises related something.... 
    console.log('meow');
    mongoose.disconnect()
})