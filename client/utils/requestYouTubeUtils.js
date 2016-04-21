import keys from '../../config/keys.js';
import $ from 'jquery';
import Promise from 'bluebird';
// Returns media link and static content (thumbnails, artist, title):

const searchYouTube = ({ query }) => (
  new Promise((resolve, reject) => {
    $.get('https://www.googleapis.com/youtube/v3/search', {
      part: 'snippet',
      key: process.env.SOUNDCLOUD_ID || keys.youTube,
      q: query,
      maxResults: 50,
      type: 'video',
      videoEmbeddable: 'true',
    })
    .done((result) => {
      // resolve only the array of song objects
      const arrayOfSongs = result.items;
        // add source tag before returning promise
      const mapResult = arrayOfSongs.map((obj) => {
        const song = obj;
        song.apiSource = 'YouTube';
        return song;
      });
      resolve(mapResult);
    })
    .fail((err) => {
      reject(err);
    });
  })
);

export default searchYouTube;
