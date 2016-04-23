import React from 'react';
import SongQueueEntry from './SongQueueEntry.jsx';

const SongQueueContainer = (props) => (
  <div>
    <h3>NEXT UP</h3>
    {props.queuedSongs.map(song =>
        <SongQueueEntry
          user={props.user}
          key={song.contentId}
          handlePlay={props.handlePlay}
          handleAddToSaved={props.handleAddToSaved}
          handleRemoveFromQueue={props.handleRemoveFromQueue}
          song={song}
        />)}
  </div>
);

export default SongQueueContainer;
