import React from 'react';

const SongQueueEntry = (props) => (
  <div>
    <p>{props.song.songTitle}</p>
    <p>{props.song.creator}</p>
    <button>Play</button>
    <button>Save</button>
    <button>Remove</button>
  </div>
);

export default SongQueueEntry;
