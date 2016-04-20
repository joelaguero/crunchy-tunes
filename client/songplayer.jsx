import React from 'react';

const SongPlayer = ({ track }) => {
  let embed;

  switch (track.apiSource) {
    case 'Spotify':
      embed = <iframe src={`https://embed.spotify.com/?uri=spotify%3Atrack%3A${track.contentId}`} width="500" height="80" frameBorder="0" allowTransparency="true"></iframe>;
      break;
    case 'SoundCloud':
      embed = <iframe width="500" height="80" scrolling="no" frameBorder="no" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.contentId}&color=orange_white`}></iframe>;
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
