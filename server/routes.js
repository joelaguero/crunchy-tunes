var path = require('path');
var controller = require(__dirname + '/controller.js');

module.exports = function(app, express) {

  app.post('/api/spotifyAudioFeatures', controller.spotifyAudioFeatures);

};