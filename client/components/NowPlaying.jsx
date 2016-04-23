import React from 'react';
import Circles from './visualizations/Circles.jsx';
import Bars from './visualizations/Bars.jsx';
import Moods from './visualizations/Moods.jsx';
import SongPlayer from './SongPlayer.jsx';
import Tabs from './Tabs.jsx';
import Pane from './Pane.jsx';

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
    const visualization = this.state.showVisualization ? (
      <div>
        <button id="show-hide-visualization" onClick={this.handleShowHide}>Hide Visualization</button>
        <div className="visualization-container">
          <Tabs selected={0}>
            <Pane label="Circles">
              <Circles audioData={this.props.audioData} />
            </Pane>
            <Pane label="Bars">
              <Bars audioData={this.props.audioData} />
            </Pane>
            <Pane label="Moods">
              <Moods audioData={this.props.audioData} />
            </Pane>
          </Tabs>
        </div>
      </div>
    ) : (
      <div>
        <button id="show-hide-visualization" onClick={this.handleShowHide}>Show Visualization</button>
      </div>
    );
    return (
      <div>
        <h3>NOW PLAYING</h3>
        <div id="now-playing-song-info">{this.props.currentTrack.songTitle}</div>
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
