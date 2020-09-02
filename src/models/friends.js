const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class userfriend extends Model {
        static associate(models) {
          // define association here
        }
      };
  userfriend.init({
    userId : DataTypes.INTEGER,
    friendId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'userfriends',
  });
  return userfriend;
};