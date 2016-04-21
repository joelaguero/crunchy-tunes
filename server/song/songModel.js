var Sequelize = require('sequelize');
var db = require('../db.js');

var Song = db.define('Song',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    contentId: {
      type: Sequelize.STRING,
      field: 'content_id'
    },
    imagePath: {
      type: Sequelize.STRING,
      filed: 'image_path'
    },
    creator: {
      type: Sequelize.STRING
    },
    songTitle: {
      type: Sequelize.STRING,
      field: 'song_title'
    },
    apiSource: {
      type: Sequelize.STRING,
      field: 'api_source'
    }
  },
  {
    freezeTableName: true
  }
);

module.exports = Song;
