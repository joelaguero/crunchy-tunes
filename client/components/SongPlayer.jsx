import React from 'react';
import keys from '../../config/keys.js';

const SongPlayer = ({ track, handleAudioEnded }) => {
  let embed;

  switch (track.apiSource) {
    case 'Spotify':
      embed = <iframe id="player" src={`https://embed.spotify.com/?uri=spotify%3Atrack%3A${track.contentId}`} width="500" height="80" frameBorder="0" allowTransparency="true"></iframe>;
      break;
    case 'SoundCloud':
      embed = <audio onEnded={handleAudioEnded} id="player" className="canProcess" autoPlay crossOrigin="anonymous" controls src={`http://api.soundcloud.com/tracks/${track.contentId}/stream?client_id=${keys.soundCloud}`}></audio>;
      break;
    case 'YouTube':
      embed = <audio onEnded={handleAudioEnded} id="player" autoPlay controls src={`http://www.youtubeinmp3.com/fetch/?video=http://www.youtube.com/watch?v=${track.contentId}`}></audio>;
      break;
    default:
      embed = <audio id="player">'Sorry, we encountered an error detecting the API source.'</audio>;
  }

  return (
    <div className="songPlayer">
      <div>{embed}</div>
    </div>
  );
};

SongPlayer.propTypes = {
  track: React.PropTypes.object.isRequired,
};

export default SongPlayer;
