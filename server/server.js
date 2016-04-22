var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request'); // "Request" library for Spotify Stuff
var passport = require('passport');
var session = require('express-session');
var morgan = require('morgan');

//connects the database
require(__dirname + '/db/index.js')();

var app = express();

var port = process.env.PORT || 8080;

var router = require(__dirname + '/routes');

app.use(morgan('dev')); // dev use only

app.use(session({
  secret: 'reinaishere'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

router(app, express);

app.listen(port, function(err) {
  if(err) {
    return console.log(err);
  }
  console.log('Crunchy Tunes Server listening on port: ' + port);
});
