/**
 * Required External Modules
 */
var os = require('os');
require('custom-env').env()



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
var datetime = new Date();
var name = process.env.APP_CANDIDATE_NAME;
var startDate = process.env.APP_CURRENT_DATE;
var endDate = process.env.APP_TRIAL_START_DATE;
console.log(endDate);
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
  res.render("index", {
    OSPlatform: OSPlatform,
    OSRelease: OSRelease,
    candidate_name: name,
    trial_start_date: startDate,
    current_date: endDate,


  });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});