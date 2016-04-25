import React from 'react';

const CardsContainer = ({ tracks, handlePlay, handleAddToQueue, handleAddToSaved, user }) => {
  let cards = tracks.map((track) => {

    let saveButton = user ? <button onClick={ () => handleAddToSaved(track) }>{'Save'}</button> : null;

    return (
    <div className="card"
      key={track.contentId}
    >
      <div className="thumbnail-container">
        <img
          src={(() => {
            switch (track.apiSource) {
              case 'Spotify': return 'http://www.iconarchive.com/download/i98446/dakirby309/simply-styled/Spotify.ico';
              case 'SoundCloud': return 'https://c1.staticflickr.com/9/8082/8292777643_65090144e9.jpg';
              case 'YouTube': return 'https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-30-512.png';
              default: return '';
            }
          })()}
          role="presentation"
          className="source-icon"
        />
      <img onClick={() => handlePlay(track)} className="card-thumbnail" src={track.imagePath || 'http://s3.amazonaws.com/spoonflower/public/design_thumbnails/0122/8590/rrrrrrchevron6bars-1800P-30_shop_preview.png'} role="presentation" />
      </div>
      <div onClick={() => handlePlay(track)} className="card-title">
      {track.songTitle}
      </div>
      <button onClick={ () => handleAddToQueue(track) }>{'Queue'}</button>
      {saveButton}
    </div>
    )

  });

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
