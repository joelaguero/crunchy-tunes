var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request'); // "Request" library for Spotify Stuff

var app = express();

var port = process.env.PORT || 8080;

var router = require(__dirname + '/routes');

app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app, express);

app.listen(port, function(err) {
  if(err) {
    return console.log(err);
  }
  console.log('Crunchy Tunes Server listenting on port: ' + port);
});






