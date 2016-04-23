import React from 'react';

const SongQueueEntry = (props) => {
  const saveButton = props.user ? <button onClick={() => {props.handleAddToSaved(props.song);}}>Save</button> : null;
  return (
  <div>
    <p>{props.song.songTitle}</p>
    <button onClick={() => {props.handlePlay(props.song); props.handleRemoveFromQueue(props.song);}}>Play Now</button>
    {saveButton}
    <button onClick={() => {props.handleRemoveFromQueue(props.song);}}>Remove</button>
    <hr></hr>
  </div>
  );
};

export default SongQueueEntry;
