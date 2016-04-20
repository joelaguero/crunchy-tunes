import $ from 'jquery';
import Promise from 'bluebird';
// Returns media link and static content (thumbnails, artist, title):

const searchSpotify = ({ query }) => (
  new Promise((resolve, reject) => {
    $.get('https://api.spotify.com/v1/search', {
      q: query,
      type: 'track',
      limit: 50,
    })
    .then((result) => {
      // resolve only the array of song objects
      // resolve(result.tracks.items);

      // =============== Spotify Audio Results Proof of Concept ===============
      // This will move to a click handler function when a user plays a track these
      // results will be retrieved.
      var exampleSongId = result.tracks.items[0]['id'];
      console.log("SPOTIFY EXAMPLE ID:", exampleSongId);
      $.ajax({
        url: '/api/spotifyAudioFeatures',
        method: 'POST',
        data: {
          test: 'somethingshere',
          id: exampleSongId
        },
        success: function(data) {
          console.log('THIS IS DATA IN POC', data);
        }
      });
      // ================ End of Proof of Concept ===============

      const arrayOfSongs = result.tracks.items;
      // add source tag before returning promise
      const mapResult = arrayOfSongs.map((obj) => {
        const song = obj;
        song.apiSource = 'Spotify';
        return song;
      });
      resolve(mapResult);
    })
    .fail((err) => {
      reject(err);
    });
  })
);

export default searchSpotify;
