var Sequelize = require('sequelize');
var db = require('../db.js');

var User = db.define('User',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    googleUserId: {
      type: Sequelize.STRING,
      field: 'google_user_id'
    },
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name'
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'last_name'
    }
  }, 
  {
    freezeTableName: true
  }
);

module.exports = User;