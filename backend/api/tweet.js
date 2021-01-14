const Tweet = require("../models/tweets");
const User = require("../models/users");
const authMiddleware = require("../utils/authMiddleware");

module.exports = (app) => {
  // View all tweet
  app.get("/api/tweet", authMiddleware, (req, res) => {
    Tweet.find({}, (err, tweet) => {
      if (err) {
        res.send({ status: 404, message: "Tweets Not Found" });
      } else {
        res.send({ status: 200, tweets: tweet });
      }
    });
  });

  // Post tweet
  app.post("/api/tweet", authMiddleware, (req, res) => {
    const token = req.cookies.token;
    const handle = req.cookies.handle;
    const message = req.body.tweet;

    if (message.length >= 200) {
      res.send({
        status: 403,
        message: "Tweet message must be less than 200 characters",
      });
    } else {
      User.findById(token, (err, user) => {
        if (err) {
          console.log({ status: 404, message: "User not found" });
          res.send({ status: 404, message: "User not found" });
        } else {
          Tweet.create({ message, handle }, (err, userTweet) => {
            if (err) {
              console.log("error");
            } else {
              user.tweets.push(userTweet);
              user.save((err, done) => {
                if (done) {
                  res.send({ status: 200, message: "Tweet Saved" });
                }
              });
            }
          });
        }
      });
    }
  });
};
