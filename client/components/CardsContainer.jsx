import React from 'react';

const CardsContainer = ({ tracks, handlePlay }) => {
  let cards = tracks.map((track) =>
    <div className="card" onClick={() => handlePlay(track)}
      key={track.contentId}
    >
      <div>
        <div
          avatar={(() => {
            switch (track.apiSource) {
              case 'Spotify': return 'http://www.iconarchive.com/download/i98446/dakirby309/simply-styled/Spotify.ico';
              case 'SoundCloud': return 'https://c1.staticflickr.com/9/8082/8292777643_65090144e9.jpg';
              case 'YouTube': return 'https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-30-512.png';
              default: return '';
            }
          })()}
        />
      <img className="card-thumbnail" src={track.imagePath} role="presentation" />
      </div>
      <div>
      {track.songTitle}
      </div>
    </div>
  );
  return (
    <div className="cards-container">
      {cards}
    </div>
  );
};

CardsContainer.propTypes = {
  tracks: React.PropTypes.array.isRequired,
  handlePlay: React.PropTypes.func.isRequired,
};

export default CardsContainer;
