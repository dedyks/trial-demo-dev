/**
 * Required External Modules
 */
var os = require('os');
require('custom-env').env('staging')
var mongooseMorgan = require('mongoose-morgan');
var express = require("express");
var path = require("path");
/**
 * App Variables
 */
var app = express();
var port = process.env.PORT || "3000";
var osPlatform = os.platform();
console.log(osPlatform);
var osRelease = os.release();
var osUsage = os.cpus();
var name = process.env.APP_CANDIDATE_NAME;
var title = process.env.APP_TITLE;
var connectionStringMongo = process.env.APP_MONGO;

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
    connectionString: connectionStringMongo,
  }, {

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
    osPlatform: osPlatform,
    osRelease: osRelease,
    candidate_name: name,
    trial_start_date: startDate,
    current_date: endDate,
    cpu_usage: osUsage,
  });
});

/**
 * Server Activation
 */
console.log("This App worker is OK, I goto the STDOUT");
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});