const mongoose = require("mongoose");

UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  handle: String,
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tweet",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
