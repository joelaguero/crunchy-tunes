import Sequelize from 'sequelize';
import password from '../config/mysqlsetup.js'

var db = new Sequelize('crunchy', 'root', password, {
  define: {timestamps: false}
});

export default db;