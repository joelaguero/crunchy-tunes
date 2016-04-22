import React from 'react';

const SongQueueEntry = (props) => (
  <div>
    <p>{props.song.songTitle}</p>
    <p>{props.song.creator}</p>
    <button onClick={props.handlePlay}>Play</button>
    <button onClick={props.handleAddToSaved}>Save</button>
    <button onClick={props.handleRemoveFromQueue}>Remove</button>
  </div>
);

export default SongQueueEntry;
