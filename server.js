/**
 * Required External Modules
 */
var os = require('os');
require('custom-env').env('staging')
// mongoose-morgan
var mongooseMorgan = require('mongoose-morgan');


var http = require('http');
const express = require("express");
const path = require("path");
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "3000";
const OSPlatform = os.platform();
console.log(OSPlatform);
const OSRelease = os.release();
var OSUsage = os.cpus();
var name = process.env.APP_CANDIDATE_NAME;
var title = process.env.APP_TITLE;
var mongodbString = process.env.APP_CONNECTIONSTRING;





var startDate = process.env.APP_CURRENT_DATE;
var endDate = process.env.APP_TRIAL_START_DATE;
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(require('express-status-monitor')())

// Logger
app.use(mongooseMorgan({
  collection: 'access_logger',
  connectionString: mongodbString,
 },
 {
 
 },
 'combined'
));
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
  res.render("index", {
    title: title,
    OSPlatform: OSPlatform,
    OSRelease: OSRelease,
    candidate_name: name,
    trial_start_date: startDate,
    current_date: endDate,
    cpu_usage: OSUsage,


  });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});