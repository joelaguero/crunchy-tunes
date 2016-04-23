import React from 'react';
import SongQueueEntry from './SongQueueEntry.jsx';
import _ from 'underscore';

const SongQueueContainer = (props) => {
  if (_.isEmpty(props.queuedSongs)) {
    return(
      <div>
        <h3>NEXT UP</h3>
        <div>
          {"You haven't added any songs to the queue."}
        </div>
      </div>
    );
  }
  return (
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
};

export default SongQueueContainer;
