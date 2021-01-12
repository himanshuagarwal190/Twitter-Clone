const User = require("../models/users")
const sha256 = require('sha256')

module.exports = (app) =>{
    // create user
    app.post('/api/signup', async (req, res) =>{
        let handle
        if(req.body.handle.includes('@')){
            handle = req.body.handle
        }
        else{
            handle = '@' + req.body.handle
        }

        const user = {
            email: req.body.email,
            password: sha256(req.body.password),
            handle
        }

        const emailExist = await User.exists({email: user.email})
        const handleExist = await User.exists({handle: user.handle})

        if(emailExist){
            res.send({status: 401, message: 'Email already exists'})
        }
        else if(handleExist){
            res.send({status: 401, message: 'Handle already exists'})
        }
        else{
            User.create(user, (err, done) =>{
                if(err){
                    console.log('Error')
                }
                else{
                    res.send({status: 200, message: 'User created'})
                }
            })
        }
    })
}