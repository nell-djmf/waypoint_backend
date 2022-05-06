'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('side_quests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      xp_gain: {
        type: Sequelize.INTEGER
      },
      skill_affinity: {
        type: Sequelize.STRING
      },
      skill_gain: {
        type: Sequelize.INTEGER
      },
      icon: {
        type: Sequelize.STRING
      },
      quest_id: {
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
    await queryInterface.dropTable('side_quests');
  }
};