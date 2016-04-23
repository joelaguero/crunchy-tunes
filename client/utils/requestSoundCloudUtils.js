import keys from '../../config/keys.js';
import Promise from 'bluebird';
import SC from 'soundcloud';

/* SC is installed via a CDN because babel throws an unresolved error when importing it from npm */
// import SC from 'soundcloud';

// Returns media link and static content (thumbnails, artist, title):

const searchSoundCloud = ({ query }) => (
  new Promise((resolve) => {
    // initialize SC session with client_id
    SC.initialize({
      client_id: process.env.SOUNDCLOUD_ID || keys.soundCloud,
    });

    SC.get('/tracks', {
      q: query,
      limit: 50,
    })
    .then((arrayOfSongs) => {
    // add source tag before returning promise
      const mapResult = arrayOfSongs.map((obj) => {
        const song = obj;
        song.apiSource = 'SoundCloud';
        return song;
      });
      resolve(mapResult);
    })
    .catch((err) => {
      throw err;
    });
  })
);

export default searchSoundCloud;
