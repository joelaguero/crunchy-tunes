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
          res.JSON(addedSong);
        });
      })
    })
  },

  getAllSaved: function(req, res) {
    var user = req.body.user;
  },

  deleteOne: function(req, res) {
    var user = req.body.user;
    var song = req.body.song;

  },
};
