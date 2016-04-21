module.exports = function() {
  var db = require(__dirname + '/db.js');
  var User = require(__dirname + '/../user/userModel.js');
  var Song = require(__dirname + '/../song/songModel.js');

  User.belongsToMany(Song, {through: 'UserSong'});
  Song.belongsToMany(User, {through: 'UserSong'});

  db.sync();
};
