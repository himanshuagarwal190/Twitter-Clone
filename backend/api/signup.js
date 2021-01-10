const User = require("../models/users")
const sha256 = require('sha256')

module.exports = (app) =>{
    // create user
    app.post('/api/signup', async (req, res) =>{
        const user = {
            email: req.body.email,
            password: sha256(req.body.password),
            handle: '@' + req.body.handle
        }

        const emailExist = await User.exists({email: req.body.email})

        if(!emailExist){
            User.create(user, (err, done) =>{
                if(err){
                    console.log('Error')
                }
                else{
                    res.send({status: 200, message: 'User created'})
                }
            })
        }
        else{
            res.send({status: 401, message: 'Email already exists'})
        }
    })
}