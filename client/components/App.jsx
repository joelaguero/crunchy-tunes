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


class App extends React.Component {
  constructor(props) {
    super(props);
    const initialState = window.__INITIAL_STATE__ || {};

    this.state = {
      user: initialState.user,
      savedSongs: initialState.savedSongs || [],
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
    this.handleAudioEnded = this.handleAudioEnded.bind(this);
  }

  componentDidMount() {
    const self = this;
    queryAll({ query: 'the postal service nothing better',
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
                savedSongs: this.state.savedSongs,
                queuedSongs: this.state.queuedSongs,
              });

            });
        }, 10);
      });
  }

  handlePlay(track) {
    getAudioFeatures(track.creator, track.songTitle)
      .then((results) => {
        this.setState({
          songFeatures: results,
        });
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
      json: song,
    });
    const songs = this.state.savedSongs;
    let alreadyInSaved = false;
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].contentId === song.contentId) {
        alreadyInSaved = true;
        break;
      }
    }
    this.setState({
      savedSongs: alreadyInSaved ? songs : ([song]).concat(songs),
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

  handleRemoveFromSaved(song) {
    request('DELETE', '/api/songs/saved', {
      json: song,
    });
    const songs = this.state.savedSongs;
    const newSaved = [];
    for (let i = 0; i < songs.length; i++) {
      if (song.contentId !== songs[i].contentId) {
        newSaved.push(songs[i]);
      }
    }
    this.setState({
      savedSongs: newSaved,
    });
  }

  handleAudioEnded() {
    if (this.state.queuedSongs.length > 0) {
      this.setState({
        currentTrack: this.state.queuedSongs[0],
        queuedSongs: this.state.queuedSongs.slice(1),
      });
    }
  }

  render() {
    return (
      <div>
          <Nav
            handleSearch={this.handleSearch}
            searching={this.state.searching}
            user={this.state.user}
          />
          <div className="main-container grid">
            <div className="col-4-12" id="left-rail-container">
              <div id="left-rail">
                <NowPlaying audioData={[this.state.audioData]}
                  currentTrack={this.state.currentTrack}
                  handleAudioEnded={this.handleAudioEnded}
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
            <div className="col-8-12">
              <CardsContainer
                tracks={this.state.tracks}
                handlePlay={this.handlePlay}
                handleAddToQueue={this.handleAddToQueue}
                handleAddToSaved={this.handleAddToSaved}
              />
            </div>

          </div>
      </div>
    );
  }
}

export default App;
