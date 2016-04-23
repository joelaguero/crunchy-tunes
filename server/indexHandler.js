// var React = require('react');
// var renderToString = require('react-dom/server').renderToString;
// var App = require('../client/components/App.jsx');
var renderFullPage = require('./views/index.js');
var User = require(__dirname + '/user/userModel.js');
var Song = require(__dirname + '/song/songModel.js');

module.exports = function renderIndex(req, res) {
  var user = {};
  var initialState = {};

  var sendInitialState = function() {
    // find the users saved songs and send them back in initial state
    // send user name, id, and avatar img url back in initial state too
    User.findOne({
      where: {
        googleUserId: user.id
      }
    })
    .then(function(foundUser) {
      foundUser.getSongs();
    })
    .then(function(foundUserSongs) {
      initialState = {
        user: {
          firstName: user.name.givenName,
          lastName: user.name.familyName,
          googleUserId: user.id,
          avatar: user.photos[0].value,
        },
        savedSongs: foundUserSongs,
      }
      console.log('initial state', initialState);
      res.send(renderFullPage(initialState));
    })
    .catch(function(error) {
      res.send(renderFullPage(initialState));
    });
  };

  if (req.session.passport && req.user) {
    // retrieve the user information and pass it to the client
    user = req.user;
    sendInitialState();
  } else {
    sendInitialState();
  }
};
