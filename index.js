// common js module used for this project
const express = require("express");

const bodyParser = require("body-parser");

// models - not needed yet

const app = express();
app.use(bodyParser.json());

//heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("marvel-client/build"));

  // express serves index.html if it doesn't know what else to do
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "marvel-client", "build", "index.html")
    );
  });
}

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

//
const PORT = process.env.PORT || 5000;
console.log(PORT);
app.listen(PORT);
