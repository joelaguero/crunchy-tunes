import request from 'then-request';

import React from 'react';

import Nav from './Nav.jsx';
import NowPlaying from './NowPlaying.jsx';
import SongQueueContainer from './SongQueueContainer.jsx';
import SavedSongContainer from './SavedSongContainer.jsx';
import CardsContainer from './CardsContainer.jsx';

import queryAll from '../utils/queryAll.js';
import SampleDOMElement from '../utils/visualizer.js';
import getAudioFeatures from '../utils/requestAudioFeatures.js';


// polyfill();

class App extends React.Component {
  constructor(props) {
    super(props);

    const initialState = window.__INITIAL_STATE__;

    this.state = {
      user: '',
      savedSongs: [],
      tracks: [],
      currentTrack: {},
      searching: false,
      audioData: new Uint8Array(100),
      queuedSongs: [],
      songFeatures: {
        acousticness: 0.5,
        danceability: 0.5,
        energy: 0.5,
        id: '713jEiNE8oXkHJvqiKlo2Q',
        instrumentalness: 0.5,
        key: 2, // see: https://en.wikipedia.org/wiki/Pitch_class
        liveness: 0.5,
        loudness: -30,
        mode: 0, // major is 1, minor is 0
        speechiness: 0.4, // anything over .6 is talk, not music
        tempo: 120,
        time_signature: 4,
        valence: 0.5, // 1 is positive, 0 is negative
      },
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleAddToQueue = this.handleAddToQueue.bind(this);
    this.handleAddToSaved = this.handleAddToSaved.bind(this);
    this.handleRemoveFromQueue = this.handleRemoveFromQueue.bind(this);
    this.handleRemoveFromSaved = this.handleRemoveFromSaved.bind(this);
  }

  componentDidMount() {
    const self = this;
    console.log(window);
    queryAll({ query: 'Beyonce',
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
    // console.log('Here\s the artist in handleCardPlay',
    // track.creator, 'here is the track', track.songTitle);
    getAudioFeatures(track.creator, track.songTitle)
      .then((results) => {
        this.setState({
          songFeatures: results,
        });
        console.log('Audio Features came back to handleCardPlay', results);
        console.log('track', track);
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

  handleAddToQueue(song) {
    const songs = this.state.queuedSongs;
    let alreadyInQueue = false;
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].contentId === song.contentId) {
        alreadyInQueue = true;
        break;
      }
    }
    this.setState({
      queuedSongs: alreadyInQueue ? songs : songs.concat([song]),
    });
  }

  handleAddToSaved(song) {
    request('POST', '/api/songs/saved', {
      body: song,
    })
    .then(function updateState(data) {
      const newSavedSong = JSON.parse(data);
      this.setState({
        savedSongs: this.state.savedSongs.concat([newSavedSong]),
      });
    });
  }

  handleRemoveFromQueue(song) {
    const songs = this.state.queuedSongs;
    const newQueue = [];
    for (let i = 0; i < songs.length; i++) {
      if (song.contentId !== songs[i].contentId) {
        newQueue.push(songs[i]);
      }
    }
    this.setState({
      queuedSongs: newQueue,
    });
  }

  handleRemoveFromSaved(/* song */) {

  }

  render() {
    return (
      <div>
          <Nav
            handleSearch={this.handleSearch}
            searching={this.state.searching}
          />
          <div className="main-container grid">
            <div className="col-8-12">
              <CardsContainer
                tracks={this.state.tracks}
                handlePlay={this.handlePlay}
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
