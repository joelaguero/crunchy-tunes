module.exports = function() {
  var db = require ('./db.js');
  var User = require ('../user/userModel.js');
  var Song = require ('../song/songModel.js');

  User.belongsToMany(Song, {through: 'UserSong'});
  Song.belongsToMany(User, {through: 'UserSong'});

  db.sync();
};
