'use strict';
const { User } = require('../models')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll({ raw: true })
    const quests = [
      {
        name: "Get a Job",
        desc: "Apply for jobs, pass interview, get that offer",
        skillAffinity: "wis",
        type: "primary",
        icon: "https://i.imgur.com/YOPY27D.png",
        userId: users[Math.floor(Math.random() * users.length)].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Work out",
        desc: "Run a mile every day",
        skillAffinity: "str",
        type: "task",
        icon: "https://i.imgur.com/YOPY27D.png",
        userId: users[Math.floor(Math.random() * users.length)].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ]
    
  
    await queryInterface.bulkInsert('quests', quests)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('quests')
  }
};
