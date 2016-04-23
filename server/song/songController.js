var User = require(__dirname + '/../user/userModel.js');
var Song = require(__dirname + '/songModel.js');

module.exports = {
  saveOne: function(req, res) {
    var user = req.user;
    var song = req.body;

    console.log('song is...', song);

    if (!user) { return res.sendStatus(404); }

    User.findOne({
      where: {
        googleUserId: user.googleUserId
      }
    })
    .then(function(foundUser) {
      Song.findOrCreate({ where: song })
      .spread(function(song) {
        foundUser.addSong(song)
        .then(function() {
          res.json(song);
        });
      })
    })
    .catch(function(error) {
      throw error;
    });
  },

  getAllSaved: function(req, res) {
    var user = req.user;

    if (!user) { return res.sendStatus(404); }

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
    var user = req.user;
    var song = req.body;

    if (!user) { return res.sendStatus(404); }

    User.findOne({
      where: {
        googleUserId: user.googleUserId
      },
    })
    .then(function(foundUser) {
      Song.destroy({
        where: {
          id: song.id,
        },
      });
    });
  },
};
