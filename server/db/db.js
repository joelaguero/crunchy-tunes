var Sequelize = require('sequelize');
var password = require(__dirname + '/../config/mysqlsetup.js');

var db = new Sequelize('crunchy', 'root', password, {
  define: {timestamps: false}
});

module.exports = db;