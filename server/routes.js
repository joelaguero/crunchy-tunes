var path = require('path');
var controller = require(__dirname + '/controller.js');
var songController = require(__dirname + '/song/songController.js');
var passport = require(__dirname + '/auth.js');

module.exports = function(app, express) {
  app.post('/api/spotifyAudioFeatures', controller.spotifyAudioFeatures);

  app.get('/api/songs/saved', songController.getAllSaved);
  app.post('/api/songs/saved', songController.saveOne);
  app.delete('/api/songs/saved', songController.deleteOne);

  app.get('/login',
    passport.authenticate('google', {scope: ['profile'] })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'),
    function(req, res) {
      console.log('session user after log in', req.user);
      res.redirect('/');
    });

  app.get('/logout', function(req, res) {
    req.logout();
    console.log('session user after log out:', req.user);
    res.redirect('/');
  });
};
