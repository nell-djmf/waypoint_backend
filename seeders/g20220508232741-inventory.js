'use strict';
const { User, Item } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const users = await User.findAll({ raw: true })
    
    const invList = await Item.findAll({ raw: true })
    
    const inventories = invList.map((a) => ({
      userId: users[Math.floor(Math.random() * users.length)].id,
      itemId: a.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('inventories', inventories)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('inventories')
  }
}