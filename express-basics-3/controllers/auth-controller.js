const User = require('../models/user-model')
const jwt = require('jsonwebtoken')

function loginUser(req, res) {
    console.log(req.body)

        // res.send("Logging in User")

    User.findOne({
        name: req.body.name
    }).then(user => {
        console.log(user)
        if(!user) {
            res.status(403).json({ success: false, message: 'User not Found!'})
        } else {
            if (user.password != req.body.password) {
            res.status(403).json({ success: false, message: 'Invalid Password!'})
            } else {
            const payload = {
                name: user.name,
                admin: user.admin
            };
            var token = jwt.sign(payload, "meluga");            //secret key
            
            res.status(200).json({
                success: true,
                message: 'logged in successfully!',
                token: token
                })
            }
        }
    })

}

module.exports = {
    loginUser
}