const User = require("../models/users");

module.exports = async function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  const isLogged = await User.exists({ _id: token });
  if (isLogged) {
    next();
  } else {
    res.send({ status: 404, message: "You are not logged in" });
  }
};
