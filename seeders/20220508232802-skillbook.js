'use strict';
const { User } = require('../models')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll({ raw: true })
    const skillbooks = [
      {
        con: 1,
        str: 1,
        dex: 1,
        int: 1,
        wis: 1,
        cha: 1,
        userId: users[Math.floor(Math.random() * users.length)].id,
      }
  ]
    
  
    await queryInterface.bulkInsert('skillbooks', skillbooks)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('skillbooks')
  }
};
