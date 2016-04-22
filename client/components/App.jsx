import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

import Nav from './Nav.js';
import NowPlaying from './NowPlaying.jsx';
import SongQueueContainer from './SongQueueContainer.jsx';
import SavedSongContainer from './SavedSongContainer.jsx';
import CardsContainer from './CardsContainer.jsx';

import queryAll from '../utils/queryAll.js';
import SampleDOMElement from '../utils/visualizer.js';
import getAudioFeatures from '../utils/requestAudioFeatures.js';


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
        {
          songTitle: 'TITLE-SAVED',
          creator: 'CREATOR-SAVED',
        }

      ],
      queuedSongs: [
        {
          songTitle: 'TITLE-QUEUED',
          creator: 'CREATOR-QUEUED',
        }
      ],
      songFeatures: {
        acousticness: 0.5,
        danceability: 0.5,
        energy: 0.5,
        id: "713jEiNE8oXkHJvqiKlo2Q",
        instrumentalness: 0.5,
        key: 2, // see: https://en.wikipedia.org/wiki/Pitch_class
        liveness: 0.5,
        loudness: -30,
        mode: 0, // major is 1, minor is 0
        speechiness: 0.4, // anything over .6 is talk, not music
        tempo: 120,
        time_signature: 4,
        valence: 0.5 // 1 is positive, 0 is negative
      },
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
      });
  }

  handlePlay(track) {
    // console.log('Here\s the artist in handleCardPlay', track.creator, 'here is the track', track.songTitle);
    getAudioFeatures(track.creator, track.songTitle)
      .then((results) => {
        this.setState({
          songFeatures: results,
        });
        console.log('Audio Features came back to handleCardPlay', results);
      });
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
            <div className="col-8-12">
              <CardsContainer
                tracks={this.state.tracks}
                handleCardPlay={this.handlePlay}
                handleAddToQueue={this.handleAddToQueue}
                handleAddToSaved={this.handleAddToSaved}
              />
            </div>

            <div className="col-4-12">
                <div className="fixed">
                  <NowPlaying audioData={[this.state.audioData]}
                    currentTrack={this.state.currentTrack}
                  />
                  <SongQueueContainer
                    queuedSongs={this.state.queuedSongs}
                    handlePlay={this.handlePlay}
                    handleAddToSaved={this.handleAddToSaved}
                    handleRemoveFromQueue={this.handleRemoveFromQueue}
                  />
                  <SavedSongContainer
                    savedSongs={this.state.savedSongs}
                    handlePlay={this.handlePlay}
                    handleAddToQueue={this.handleAddToQueue}
                    handleRemoveFromSaved={this.handleRemoveFromSaved}
                  />
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
