import React from 'react';
import Visualization from './Visualization.jsx';
import SongPlayer from './SongPlayer.jsx';

const NowPlaying = (props) => (
  <div>
    <h3>NOW PlAYING</h3>
    <div>{props.currentTrack.songTitle}</div>
    
    <Tabs selected={0}>
      <Pane label="Circlz">
        <Visualisation1 audioData={props.audioData}/>
      </Pane>
      <Pane label="Moody">
        <Visualisation2 audioData={props.audioData}/>
      </Pane>
      <Pane label="Squarz">
        <Visualisation2 audioData={props.audioData}/>
      </Pane>
    </Tabs>
    <SongPlayer track={props.currentTrack} handleAudioEnded={props.handleAudioEnded}/>
  </div>
);

NowPlaying.propTypes = {
  audioData: React.PropTypes.array.isRequired,
  currentTrack: React.PropTypes.object.isRequired,
};

export default NowPlaying;
