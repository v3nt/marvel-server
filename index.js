// common js module used for this project
const express = require("express");

// models - not needed yet

const app = express();

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
