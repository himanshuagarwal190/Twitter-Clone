const app = require("express")();
const path = require("path");
require("dotenv").config();

require("./utils/configure")(app);
require("./api/signup")(app);
require("./api/login")(app);
require("./api/tweet")(app);
require("./api/like")(app);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
