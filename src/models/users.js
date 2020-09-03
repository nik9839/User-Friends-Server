const {Model} = require('sequelize');


// Users table model
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {

    }
  };
  users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};