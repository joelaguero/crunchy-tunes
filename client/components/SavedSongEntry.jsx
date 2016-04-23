import React from 'react';

const SavedSongEntry = (props) => (
  <div>
    <p>{props.song.songTitle}</p>
    <p>{props.song.creator}</p>
    <button onClick={() => {props.handlePlay(props.song);}}>Play</button>
    <button onClick={() => {props.handleAddToQueue(props.song);}}>Queue</button>
    <button onClick={() => {props.handleRemoveFromSaved(props.song);}}>Remove</button>
    <hr></hr>
  </div>
);

export default SavedSongEntry;
