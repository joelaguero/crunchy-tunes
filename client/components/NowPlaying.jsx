import React from 'react';
import Circles from './visualizations/Circles.jsx';
import Bars from './visualizations/Bars.jsx';
import Moods from './visualizations/Moods.jsx';
import SongPlayer from './SongPlayer.jsx';
import Tabs from './Tabs.jsx';
import Pane from './Pane.jsx';
import _ from 'underscore';

/*
 * This class displays the Now Playing component in the left rail. It 
 * is a parent of the visualization components and the show/hide
 * toggle. The show/hide toggle is stored as a boolean in this component's
 * state.
 */
class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVisualization: true,
    };

    this.handleShowHide = this.handleShowHide.bind(this);
  }

  handleShowHide() {
    this.setState({
      showVisualization: !this.state.showVisualization,
    });
  }

  render() {
    if (_.isEmpty(this.props.currentTrack)) {
      
      /* Render an empty state if there is no track currentlying playing */
      return(
        <div>
          <h3>NOW PLAYING</h3>
          <div>
            Click a song to start playing music.
          </div>
          <div className="visualization-container"></div>
          <SongPlayer track={this.props.currentTrack}
            handleAudioEnded={this.props.handleAudioEnded}
          />
        </div>
      )
    }
    
    /* 
     * Determine the correct JSX to render based on the state of the showVisualization
     * boolean in state.
     */
    const visualization = this.state.showVisualization ? (
      <div>
        <button className="show-hide-visualization" id="hide-visualization" onClick={this.handleShowHide}>Hide</button>
        <div className="visualization-container">
          <Tabs selected={0}>
            <Pane label="Circles">
              <Circles audioData={this.props.audioData} />
            </Pane>
            <Pane label="Bars">
              <Bars audioData={this.props.audioData} />
            </Pane>
            <Pane label="Moods">
              <Moods audioData={this.props.audioData} songFeatures={this.props.songFeatures} />
            </Pane>
          </Tabs>
        </div>
      </div>
    ) : (
      <div id='show-button-container'>
        <button className="show-hide-visualization" onClick={this.handleShowHide}>Show Visualization</button>
      </div>
    );
    if (this.props.currentTrack.apiSource === 'YouTube') {
      /*
       * Hide the visualization if the source is YouTube, because of the cross-origin issue that
       * prevents us from using the audio stream with the WebAudio API.
       */
      return (
        <div>
          <h3>NOW PLAYING</h3>
          <div id="now-playing-song-info"><strong>Title: </strong>{this.props.currentTrack.songTitle}</div>
          <SongPlayer track={this.props.currentTrack}
            handleAudioEnded={this.props.handleAudioEnded}
          />
        </div>
      );
    }
    
    /* Otherwise the source is Soundcloud, so render the visualization. */
    return (
      <div>
        <h3>NOW PLAYING</h3>
        <div id="now-playing-song-info"><strong>Title: </strong>{this.props.currentTrack.songTitle}</div>
        { visualization }
        <SongPlayer track={this.props.currentTrack}
          handleAudioEnded={this.props.handleAudioEnded}
        />
      </div>
    );
  }
}

NowPlaying.propTypes = {
  audioData: React.PropTypes.array.isRequired,
  currentTrack: React.PropTypes.object.isRequired,
  songFeatures: React.PropTypes.object.isRequired,
  handleAudioEnded: React.PropTypes.func.isRequired,
};

export default NowPlaying;
