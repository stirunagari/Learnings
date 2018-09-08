// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
// var morgan     = require('morgan');
var router = express.Router();

// configure app
app.use(morgan('dev'));

// configuration ===========================================

// DATABASE SETUP

// config files
var db = require('./config/db');

// set the port. lets make it 8080 for now
var port =  8080;

// DATABASE SETUP. Setting up mongoose
var mongoose   = require('mongoose');
mongoose.connect(db.url); // connect to our database

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
// app.use('/lib', express.static(__dirname + '/bower_components'));

// routes ==================================================
var routes = require('./app/routes');

// REGISTER OUR ROUTES -------------------------------
app.use('/api', routes);

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
// exports = module.exports = app;
