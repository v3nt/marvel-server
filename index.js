// common js module used for this project
const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const promisify = require("util").promisify;

// models - not needed yet

const app = express();
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());

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

const writeFilePromise = promisify(fs.writeFile);

WriteTextToFileAsync = async (contentToWrite) => {
  try {
    // FIXME: give your own path, this is just a dummy path
    const path = "\\foo.txt";
    await writeFilePromise(contentToWrite, path);
  } catch (err) {
    throw new Error(`Could not write file because of {err}`);
  }
};

app.get("/", function (req, res) {
  res.send("hello world");
});

//
const PORT = process.env.PORT || 5000;
// console.log(PORT);
app.listen(PORT);
