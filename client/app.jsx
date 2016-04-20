import React from 'react';
import Nav from './nav.js';
import SongPlayer from './songplayer.jsx';
import CardsContainer from './cardsContainer.jsx';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import queryAll from './queryAll.js';

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
    this.handleSearch.bind(this);
    this.handleCardPlay.bind(this);
  }

  componentDidMount() {
    const self = this;
    queryAll({ query: 'Kanye',
      })
      .then((results) => {
        self.setState({
          tracks: results,
        });
      });
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
          <CardsContainer
            tracks={this.state.tracks}
            handleCardPlay={this.handleCardPlay}
          />
      </div>
    );
  }
}

export default App;
