var User = require(__dirname + '/../user/userModel.js');
var Song = require(__dirname + '/songModel.js');

module.exports = {
  saveOne: function(req, res) {
    var user = req.body.user;
    var song = req.body.song;

    User.findOne({
      where: user
    })
    .then(function(foundUser) {
      Song.findOrCreate({ where: song })
      .spread(function(song) {
        foundUser.addSong(song)
        .then(function() {
          res.jsons(addedSong);
        });
      })
    })
    .catch(function(error) {
      throw error;
    });
  },

  getAllSaved: function(req, res) {
    var user = req.body.user;

    User.findOne({
      where: user,
    })
    .then(function(foundUser) {
      return foundUser.getSongs();
    })
    .then(function(foundSongs) {
      res.json(foundSongs);
    })
    .catch(function(error) {
      throw error;
    });
  },

  deleteOne: function(req, res) {
    var user = req.body.user;
    var song = req.body.song;

    Song.findOne({
      where: song,
    })
    .then(function(foundSong) {
      User.findOne({
        where: user,
      })
      .then(function(foundUser) {
        foundUser.removeSong(foundSong);
      })
      .then(function() {
        res.json(foundSong);
      })
      .catch(function(error) {
        throw error;
      });
    });
  },
};
