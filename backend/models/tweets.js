const mongoose = require('mongoose')

TweetSchema = new mongoose.Schema({
    message: String,
    handle: String,
    Likes: Array
})

const Tweet = mongoose.model('tweet', TweetSchema)

module.exports = Tweet