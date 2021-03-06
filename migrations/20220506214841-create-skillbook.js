'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('skillbooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      con: {
        type: Sequelize.INTEGER,
      },
      str: {
        type: Sequelize.INTEGER
      },
      dex: {
        type: Sequelize.INTEGER
      },
      int: {
        type: Sequelize.INTEGER
      },
      wis: {
        type: Sequelize.INTEGER
      },
      cha: {
        type: Sequelize.INTEGER
      },
      xp: {
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('skillbooks');
  }
};