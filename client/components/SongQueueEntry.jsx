import React from 'react';

const SongQueueEntry = (props) => (
  <div>
    <p>{props.song.songTitle}</p>
    <p>{props.song.creator}</p>
    <button onClick={() => {props.handlePlay(props.song); props.handleRemoveFromQueue(props.song);}}>Play Now</button>
    <button onClick={() => {props.handleAddToSaved(props.song);}}>Save</button>
    <button onClick={() => {props.handleRemoveFromQueue(props.song);}}>Remove</button>
    <hr></hr>
  </div>
);

export default SongQueueEntry;
