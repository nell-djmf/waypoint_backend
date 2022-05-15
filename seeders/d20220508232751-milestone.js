'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const milestones = [
      {
        title: "Level 2: Moving Up in the World",
        desc: `“We stand upon the precipice of change. The world fears the inevitable plummet into the abyss. Watch for that moment… and when it comes, do not hesitate to leap. It is only when you fall that you learn whether you can fly."

        - Dragon Age II.`,
        icon: "https://i.imgur.com/R79hSwD.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Level 10: A Hero Rises",
        desc: `"A sword wields no strength unless the hands that holds it has courage."

        - Legend of Zelda: Twilight Princess`,
        icon: "https://i.imgur.com/aw55PGt.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Level 25: A Legend in the Making",
        desc: `"Its a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same."

        - Dishonored`,
        icon: "https://i.imgur.com/FGZ8xy8.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Level 50: Journey's End",
        desc: `"Life is a negotiation. We all want. We all give to get what we want."

        - Mass Effect 2`,
        icon: "https://i.imgur.com/M7Zb2Q3.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ]
    
  
    await queryInterface.bulkInsert('milestones', milestones)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('milestones')
  }
};
