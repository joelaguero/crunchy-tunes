
var request = require('request');
// var urlParser = require('url');

module.exports.spotifyAudioFeatures = function(req, res) {

  var client_id = '60468958184948549f7d48107213a368'; // Your client id
  var client_secret = 'ee006034ac204c5b9faf8df667773e03'; // Your client secret
  var redirect_uri = 'http://localhost:8080/callback'; // Your redirect uri
  console.log("This is the spotify id coming in from the client: ", req.body.id);

  // your application requests authorization
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      var idUrl = 'https://api.spotify.com/v1/audio-features/' + req.body.id;
      var token = body.access_token;
      var options = {
        url: idUrl,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log('AUDIO FEATURES results for your spotify id', body);
      });
    }
  });

};
