const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const path = require('path')

module.exports = (app) =>{
    if(process.env.environment === 'DEV'){
        app.use(cors({origin: true, credentials: true}))
    }
    app.use(express.static(path.join(__dirname, '../../frontend/build/')));
    app.use(express.json())
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ extended: false }))
    mongoose.set('useUnifiedTopology', true)
    mongoose.connect(process.env.mongodb, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
}