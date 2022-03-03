'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Organizations', [{
      id: 1,
      name: 'xendit',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Members', [{
      username: 'user1',
      organizationId: 1,
      followers: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'user2',
      organizationId: 1,
      followers: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'user3',
      organizationId: 1,
      followers: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Members', null, {})
  }
}
