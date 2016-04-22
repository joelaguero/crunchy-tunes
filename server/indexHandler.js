// var React = require('react');
// var renderToString = require('react-dom/server').renderToString;
// var App = require('../client/components/App.jsx');
var renderFullPage = require('./views/index.js');
var User = require(__dirname + '/user/userModel.js');

module.exports = function renderIndex(req, res) {
  var user = {};

  var sendInitialState = function() {
    var initialState = {
      user: user,
      savedSongs: [{
        imagePath: 'https://i1.sndcdn.com/artworks-000090789132-5e3qzf-large.jpg',
        contentId: 167370242,
        creator: 'Cindy Huynh',
        songTitle: 'Crazy In Love (Fifty Shades Of Grey) - Sofia Karlberg (Beyoncé Cover)',
        apiSource: 'SoundCloud',
      }]
    };

    console.log(initialState);
    res.send(renderFullPage(initialState));
  };

  if (req.session.passport && req.user) {
    // retrieve the user information and pass it to the client
    user = req.user;
    sendInitialState();

  } else {
    sendInitialState();
  }
};
