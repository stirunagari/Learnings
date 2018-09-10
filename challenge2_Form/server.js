// server.js

// modules =================================================
var express        = require('express');
var app            = express();


// set our port
var port = process.env.PORT || 8001; 



// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 
app.use('/libs', express.static(__dirname + '/node_modules'));



// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
// exports = module.exports = app; 