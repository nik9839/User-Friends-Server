module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userfriends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references : {
          model : 'users',
          key : 'id',
          as : 'userId'
        }
      },
      friendId: {
        type: Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references : {
          model : 'users',
          key : 'id',
          as : 'friendId'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userfriends');
  }
};