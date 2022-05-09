'use strict';
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [...Array(1)].map((_) => ({
      username: "lancelot",
      email: falso.randEmail(),
      passwordDigest: falso.randPassword(),
      xp: 0,
      level: 1,
      avatar: "https://i.imgur.com/7KuzMEC.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('users', users)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
