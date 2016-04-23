import React from 'react';
import Visualization from './Visualization.jsx';
import SongPlayer from './SongPlayer.jsx';

const NowPlaying = (props) => (
  <div>
    <Visualization
      audioData={props.audioData}
    />
    <SongPlayer track={props.currentTrack} handleAudioEnded={props.handleAudioEnded}/>
  </div>
);

NowPlaying.propTypes = {
  audioData: React.PropTypes.array.isRequired,
  currentTrack: React.PropTypes.object.isRequired,
};

export default NowPlaying;
