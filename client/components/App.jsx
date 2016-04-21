import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

import Nav from './Nav.js';
import SongPlayer from './SongPlayer.jsx';
import NowPlaying from './NowPlaying.jsx';
import SongQueueContainer from './SongQueueContainer.jsx';
import SavedSongContainer from './SavedSongContainer.jsx';
import CardsContainer from './CardsContainer.jsx';
import Visualization from './Visualization.jsx';

import queryAll from '../utils/queryAll.js';
import SampleDOMElement from '../utils/visualizer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [
        {
          artist: 'Yeezy',
          apiSource: 'test',
        },
      ],
      currentTrack: {
        artist: 'Yeezy',
        apiSource: 'test',
      },
      searching: false,
      audioData: new Uint8Array(100),
      savedSongs: [

      ],
      queuedSongs: [

      ],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    // this.handleAddToQueue = this.handleAddToQueue.bind(this);
    // this.handleAddToSaved = this.handleAddToSaved.bind(this);
    // this.handleRemoveFromQueue = this.handleRemoveFromQueue.bind(this);
    // this.handleRemoveFromSaved = this.handleRemoveFromSaved.bind(this);
  }

  componentDidMount() {
    const self = this;
    queryAll({ query: 'Odesza',
      })
      .then((results) => {
        self.setState({
          tracks: results,
        });
      })
      .then(() => {
        const playerSampler = new SampleDOMElement('player');
        setInterval(() => {
          playerSampler.sampleAudioStream(playerSampler.analyser, self.state.audioData,
            (data) => {
              self.setState({
                audioData: data,
              });
            });
        }, 10);
      })
      .then(); // initialize d3
  }

  handlePlay(track) {
    this.setState({
      currentTrack: track,
    });
  }

  handleSearch(value) {
    const self = this;
    if (value === null) {
      this.setState({
        searching: false,
      });
    }
    this.setState({
      searching: true,
    });
    queryAll({ query: value })
      .then((results) => {
        self.setState({
          tracks: results,
          searching: false,
        });
      });
  }

  render() {
    return (
      <div>
          <AppBar className="appBar" >
            <Navigation
              type="horizontal"
              style= { { width: '700px' }}
              actions={[{
                label: 'New Name',
                raised: true,
                accent: true,
                icon: 'audiotrack',
              }]}
            />
            <Nav
              handleSearch={this.handleSearch}
              searching={this.state.searching}
            />
          </AppBar>

          <div className="main-container grid">
            <div className="grid-8">
              <CardsContainer
                tracks={this.state.tracks}
                handleCardPlay={this.handlePlay}
              />
            </div>

            <div className="grid-4">
              <NowPlaying>
                <Visualization
                  visualize={this.visualize}
                  audioData={[this.state.audioData]}
                />
                <SongPlayer track = {this.state.currentTrack} />
              </NowPlaying>
              <SongQueueContainer />
              <SavedSongContainer />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
