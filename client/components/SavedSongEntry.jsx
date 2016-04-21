import React from 'react';

const SavedSongEntry = (props) => (
  <div>
    <p>{props.song.songTitle}</p>
    <p>{props.song.creator}</p>
    <button>Play</button>
    <button>Queue</button>
    <button>Remove</button>
  </div>
);

export default SavedSongEntry;
