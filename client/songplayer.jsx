import React from 'react';
import keys from '../config/keys.js';

const SongPlayer = ({ track }) => {
  let embed;

  switch (track.apiSource) {
    case 'Spotify':
      embed = <iframe src={`https://embed.spotify.com/?uri=spotify%3Atrack%3A${track.contentId}`} width="500" height="80" frameBorder="0" allowTransparency="true"></iframe>;
      break;
    case 'SoundCloud':
      embed = <audio controls src={`https://api.soundcloud.com/tracks/${track.contentId}/stream?client_id=${keys.soundCloud}`}></audio> 
      break;
    case 'YouTube':
      embed = <audio controls src={`http://www.youtubeinmp3.com/fetch/?video=http://www.youtube.com/watch?v=${track.contentId}`}></audio>
      break;
    case 'test':
      embed = <iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A0wcbltC75nBbE4eFPOynEx" width="500" height="80" frameBorder="0" allowTransparency="true"></iframe>;
      break;
    default:
      console.log('uh oh');
  }

  return (
    <div className="songPlayer">
      <div>{embed}</div>
    </div>
  );
};

export default SongPlayer;
