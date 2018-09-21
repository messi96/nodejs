const jwt = require('jsonwebtoken')

function verifyUser(req,res,next) {
    console.log('Verify User')
    const token = req.body.token || req.query.token || req.headers['x-access-token']

    if(token) {
        jwt.verify(token, "meluga", function(err,decoded) {
            if(err) {
                console.log(err)
                return res.json({ success: false, message: 'Failed to Authenticate'})
            } else {
                console.log("Decoded Stuffs ", decoded)
                req.decoded = decoded;
                next();
            }
        });

    } else {
        return res.status(403).send({
            success: false,
            message: 'No Token Provided!'
        });
    }

}

module.exports = {
    verifyUser
}