const express = require("express");
const path = require("path");

const app = express();

// ROLLBAR

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "76a42a4d22d4432cb3d8c130d00bff32",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

// END ROLLBAR

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

const port = process.env.PORT || 4545;

app.listen(port, () => {
  console.log(`Take us to warp ${port}`);
});
