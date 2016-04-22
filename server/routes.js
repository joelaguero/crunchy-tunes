var path = require('path');
var controller = require(__dirname + '/controller.js');
var songController = require(__dirname + '/song/songController.js');
var passport = require(__dirname + '/auth.js').passport;
var checkAuth = require(__dirname + '/auth.js').checkAuth;

module.exports = function(app, express) {
  app.post('/api/spotifyAudioFeatures', controller.spotifyAudioFeatures);

  app.get('/api/songs/saved', checkAuth, songController.getAllSaved);
  app.post('/api/songs/saved', checkAuth, songController.saveOne);
  app.delete('/api/songs/saved', checkAuth, songController.deleteOne);

  app.get('/login',
    passport.authenticate('google', {scope: ['profile'] })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'),
    function(req, res) {
      res.redirect('/');
    });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
