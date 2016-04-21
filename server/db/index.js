const connect = () => {
  import db from './db.js';
  import User from '../user/userModel.js';
  import Song from '../song/songModel.js';

  User.belongsToMany(Song, {through: 'UserSong'});
  Song.belongsToMany(User, {through: 'UserSong'});

  db.sync();
};

export default connect;
