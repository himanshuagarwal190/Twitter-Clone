const User = require("../models/users")
const sha256 = require('sha256')

module.exports = (app) =>{
    // create user
    app.post('/api/login', (req, res) =>{
        const email = req.body.email
        const password = sha256(req.body.password)

        User.findOne({email}, (err, user)=>{
            if(err){
                res.send({status: 404, message: 'Database error'})
            }
            else{
                if(user === null){
                    res.send({status: 401, message: 'Email does not exists'})
                }
                else if(user.password === password){
                    res.cookie('token', user.id, {httpOnly: true})
                    res.cookie('handle', user.handle)
                    res.send({status: 200, message: 'Loggin Success', user:{email: user.email, handle: user.handle}})
                }
                else{
                    res.send({status: 403, message: 'Password do not match'})
                }
            }
        })
    })
}