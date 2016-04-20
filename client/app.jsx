import React from 'react';
import Nav from './nav.js';
import SongPlayer from './songplayer.jsx';
import CardsContainer from './cardsContainer.jsx';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Visualization from './visualization.jsx';
import queryAll from './queryAll.js';
import sampleDOMElement from './visualizer.js';

var addPlayListener = function() {
  var media = document.getElementById('player');
  media.addEventListener('play', function(e)
  {
    sampleDOMElement('player');
  }, false);
};

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
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCardPlay = this.handleCardPlay.bind(this);
  }

  componentDidMount() {
    const self = this;
    queryAll({ query: 'Kanye',
      })
      .then((results) => {
        self.setState({
          tracks: results,
        });
      })
      .then(() =>
        new sampleDOMElement('player'));
  }

  handleCardPlay(track) {
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
                label: 'Crunchy Tunes',
                raised: true,
                accent: true,
                icon: 'audiotrack',
              }]}
            />
            <SongPlayer track = {this.state.currentTrack} />
            <Nav
              handleSearch={this.handleSearch}
              searching={this.state.searching}
            />
          </AppBar>
          <div className="main-container">
            <Visualization />
            <CardsContainer
              tracks={this.state.tracks}
              handleCardPlay={this.handleCardPlay}
            />
          </div>
      </div>
    );
  }
}

export default App;
