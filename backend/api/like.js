const Tweet = require("../models/tweets")

module.exports = (app) =>{
    app.put('/api/like', async (req, res)=>{
        const key = req.body.key
        const token = req.cookies.token

        Tweet.findById(key, (err, tweet)=>{
            if(err){
                console.log('Error in Like API')
                res.send('Error')
            }
            else{
                // For Liking Tweet
                if(!tweet.Likes.includes(token)){
                    tweet.Likes.push(token)
                    tweet.save((err, done)=>{
                        if(done){
                            res.send({status:200, message:'Tweet Liked', tweet: tweet})
                        }
                    })
                }
                else{
                    // For Unliking Tweet
                    const index = tweet.Likes.indexOf(token)
                    if(index > -1){
                        tweet.Likes.splice(index, 1)
                    }
                    tweet.save((err, done)=>{
                        if(done){
                            res.send({status:201, message:'Tweet Unliked', tweet: tweet})
                        }
                    })
                }
            }
        })
    })
}