import React from 'react';
import Circles from './visualizations/Circles.jsx';
import Bars from './visualizations/Bars.jsx';
import Moods from './visualizations/Moods.jsx';
import SongPlayer from './SongPlayer.jsx';
import Tabs from './Tabs.jsx';
import Pane from './Pane.jsx';

const NowPlaying = (props) => (
  <div>
    <h3>NOW PLAYING</h3>
    <div id="now-playing-song-info">{props.currentTrack.songTitle}</div>
    <Tabs selected={0}>
      <Pane label="Circles">
        <Circles audioData={props.audioData}/>
      </Pane>
      <Pane label="Bars">
        <Bars audioData={props.audioData}/>
      </Pane>
      <Pane label="Moods">
        <Moods audioData={props.audioData} songFeatures={props.songFeatures}/>
      </Pane>
    </Tabs>
    <SongPlayer track={props.currentTrack} handleAudioEnded={props.handleAudioEnded}/>

  </div>
);

NowPlaying.propTypes = {
  audioData: React.PropTypes.array.isRequired,
  currentTrack: React.PropTypes.object.isRequired,
  songFeatures: React.PropTypes.object.isRequired,
};

export default NowPlaying;
