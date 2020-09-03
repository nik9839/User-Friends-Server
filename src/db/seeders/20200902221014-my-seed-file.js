'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('users', [{
      firstName: 'Chandler',
      lastName: "Bing",
      avatar: "https://clipartart.com/images/chandler-bing-clipart-3.png",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      firstName: 'Joey',
      lastName: "Tribbiani",
      avatar: "https://i1.wp.com/www.ourmovielife.com/wp-content/uploads/2020/03/jeoy.png",
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
