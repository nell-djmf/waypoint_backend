'use strict';
const falso = require('@ngneat/falso')
const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll({ raw:true })

    const entries = [...Array(5)].map((_) => ({
      date: new Date().toISOString().slice(0, 10),
      title: falso.randText(),
      content: falso.randParagraph(),
      userId: users[Math.floor(Math.random() * users.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    })) 
    
  
    await queryInterface.bulkInsert('entries', entries)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('entries')
  }
}
