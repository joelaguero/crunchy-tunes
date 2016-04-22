import React from 'react';
import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import classNames from 'classnames';
import style from '../styles/toolbox-theme';

const CardsContainer = ({ tracks, handlePlay }) => {
  let cards = tracks.map((track) =>
    <Card onClick={() => handlePlay(track)}
      key={track.contentId}
      className={classNames(style.card)}
      style={{ width: '350px', height: '300px', margin: '15px' }}
    >
      <div className={classNames(style['image-container'])}>
        <CardTitle
          className={classNames(style['source-logo'])}
          avatar={ (() => {
            switch (track.apiSource) {
              case 'Spotify': return 'http://www.iconarchive.com/download/i98446/dakirby309/simply-styled/Spotify.ico';
              case 'SoundCloud': return 'https://c1.staticflickr.com/9/8082/8292777643_65090144e9.jpg';
              case 'YouTube': return 'https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-30-512.png';
              default: return '';
            }
          })()}
        />
        <CardMedia
          aspectRatio="wide"
          image={track.imagePath}
        />
      </div>
      <div className={classNames(style['card-title'])}>
      {track.songTitle}
      </div>
      <div className={classNames(style['card-overlay'])}>
      </div>
    </Card>
  );
  return (
    <div className="cardsContainer">
      {cards}
    </div>
  );
};

CardsContainer.propTypes = {
  tracks: React.PropTypes.array.isRequired,
  handleCardPlay: React.PropTypes.func.isRequired,
};

export default CardsContainer;
