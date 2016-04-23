import React from 'react';
import SavedSongEntry from './SavedSongEntry.jsx';

const SavedSongContainer = (props) => (
  <div>
    <h3>MY SONGS</h3>
    {props.savedSongs.map(song =>
        <SavedSongEntry
          key={song.contentId}
          handlePlay={props.handlePlay}
          handleAddToQueue={props.handleAddToQueue}
          handleRemoveFromSaved={props.handleRemoveFromSaved}
          song={song}
        />)}
  </div>
);

export default SavedSongContainer;
