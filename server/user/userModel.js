import Sequelize from 'sequelize';
import db from '../db/db.js';

const User = db.define('User',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    googleUserId: {
      type: Sequelize.STRING,
      field: 'google_user_id',
    },
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name',
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'last_name',
    },
  }, 
  {
    freezeTableName: true,
  }
);

export default User;