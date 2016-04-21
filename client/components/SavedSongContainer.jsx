import React from 'react';
import SavedSongEntry from './SavedSongEntry.jsx';

const SavedSongContainer = (props) => (
  <div>
    <h3>My songs</h3>
    {props.savedSongs.map(song =>
        <SavedSongEntry
          handlePlay={props.handlePlay}
          handleAddToQueue={props.handleAddToQueue}
          handleRemoveFromSaved={props.handleRemoveFromSaved}
          song={song}
        />)}
  </div>
);

export default SavedSongContainer;
