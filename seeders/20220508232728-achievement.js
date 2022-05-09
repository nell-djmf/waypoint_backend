'use strict';
const { User, Milestone } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const users = await User.findAll({ raw: true })
    
    const milestoneList = await Milestone.findAll({ raw: true })
    
    const achievements = milestoneList.map((a) => ({
      userId: users[Math.floor(Math.random() * users.length)].id,
      milestoneId: milestoneList[Math.floor(Math.random() * milestoneList.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('achievements', achievements)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('achievements')
  }
}
