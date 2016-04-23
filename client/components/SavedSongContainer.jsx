import React from 'react';
import SavedSongEntry from './SavedSongEntry.jsx';

const SavedSongContainer = (props) => {

  var show = props.user ? 
    (
      <div>
      <h3>MY SAVED SONGS</h3>
      {props.savedSongs.map(song =>
        <SavedSongEntry
          user={props.user}
          key={song.contentId}
          handlePlay={props.handlePlay}
          handleRemoveFromSaved={props.handleRemoveFromSaved}
          handleAddToQueue={props.handleAddToQueue}
          song={song}
        />
        )
      }
      </div>
    ) : null;

  return (
    <div>
      {show}
    </div>
  );

};

export default SavedSongContainer;
