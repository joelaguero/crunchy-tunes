var path = require('path');
var controller = require(__dirname + '/controller.js');
var songController = require(__dirname + '/song/songController.js');
var passport = require('passport');
var auth = require(__dirname + '/auth.js');
var renderIndex = require(__dirname + '/indexHandler.js');

module.exports = function(app, express) {
  app.use(express.static(__dirname + '/../client'));
  app.get('/', renderIndex);

  app.post('/api/spotifyAudioFeatures', controller.spotifyAudioFeatures);

  app.get('/api/songs/saved', auth.checkAuth, songController.getAllSaved);
  app.post('/api/songs/saved', auth.checkAuth, songController.saveOne);
  app.delete('/api/songs/saved', auth.checkAuth, songController.deleteOne);

  app.get('/login',
    passport.authenticate('google', {scope: ['profile'] })
  );

  app.get('/auth/google/callback',
    auth.authenticateGoogleLogin,
    function(req, res) {
      res.redirect('/');
    });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
