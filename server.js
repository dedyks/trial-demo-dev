

/**
 * Required External Modules
 */
var os = require('os');

var http = require('http');
const express = require("express");
const path = require("path");
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "3000";
const OSPlatform = os.platform(); // 'darwin'
const OSRelease = os.release();
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
  res.render("index", { OSPlatform: OSPlatform,
  OSRelease: OSRelease
  });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});