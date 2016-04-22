import React from 'react';
import Visualization from './Visualization.jsx';
import Visualization1 from './Visualization1.jsx';
import Visualization2 from './Visualization2.jsx';
import SongPlayer from './SongPlayer.jsx';
import Tabs from './Tabs.jsx';
import Pane from './Pane.jsx';

const NowPlaying = (props) => (
  <div>
    <h3>NOW PlAYING</h3>
    <div>{props.currentTrack.songTitle}</div>
    
    <Tabs selected={0}>
      <Pane label="Circlz">
        <Visualization audioData={props.audioData}/>
      </Pane>
      <Pane label="Moody">
        <Visualization1 audioData={props.audioData}/>
      </Pane>
      <Pane label="Squarz">
        <Visualization2 audioData={props.audioData}/>
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
