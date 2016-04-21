import $ from 'jquery';
import Promise from 'bluebird';
// Returns media link and static content (thumbnails, artist, title):

const getAudioFeatures = (creator, songTitle) => (
  new Promise((resolve, reject) => {
    // TODO: refine search results using creator (artist)
    var query = songTitle + ' ';
    var songId = '5jrdCoLpJSvHHorevXBATy';
    $.get('https://api.spotify.com/v1/search', {
      q: query,
      type: 'track',
      limit: 1,
    })
    .done((result) => {
      if (result.tracks.items[0]) {
        var songId = result.tracks.items[0]['id'];
      } 
      $.ajax({
        url: '/api/spotifyAudioFeatures',
        method: 'POST',
        data: {
          id: songId
        },
        success: function(songFeatures) {
          console.log('THIS IS songFeatures IN POC', songFeatures);
          if (!songFeatures || songFeatures.error) {
            songFeatures = {
              acousticness: 0.5,
              danceability: 0.5,
              energy: 0.5,
              id: "713jEiNE8oXkHJvqiKlo2Q",
              instrumentalness: 0.5,
              key: 2, // see: https://en.wikipedia.org/wiki/Pitch_class
              liveness: 0.5,
              loudness: -30,
              mode: 0, // major is 1, minor is 0
              speechiness: 0.4, // anything over .6 is talk, not music
              tempo: 120,
              time_signature: 4,
              valence: 0.5 // 1 is positive, 0 is negative
            };
          } 
          resolve(songFeatures);
        },
        error: function() {
          console.log('if you see this message, you have an error to handle')
        }
      });
    })
    .fail((err) => {
      reject(err);
    });
  })
);

export default getAudioFeatures;
