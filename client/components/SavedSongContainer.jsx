import React from 'react';
import SavedSongEntry from './SavedSongEntry.jsx';
import _ from 'underscore';

const SavedSongContainer = (props) => {
  var show;
  if (props.user && _.isEmpty(props.savedSongs)) {
    return (
      <div>
        <h3>MY SAVED SONGS</h3>
        <div>You don't have any saved songs. Add some!</div>
      </div>
    )
  }
  show = props.user ?
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
