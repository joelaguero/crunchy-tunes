import React from 'react';

const SavedSongEntry = (props) => (
  <div>
    <p>{props.song.songTitle}</p>
    <p>{props.song.creator}</p>
    <button onClick={props.handlePlay}>Play</button>
    <button onClick={() => {props.handleAddToQueue(props.song);}}>Queue</button>
    <button onClick={props.handleRemoveFromSaved}>Remove</button>
  </div>
);

export default SavedSongEntry;
