'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const items = [
      {
        name: "Hero's Shield",
        desc: "An old baking tray repurposed into a trusty barrier against attacks. Smells faintly of burnt dough, but bears the scars of many culinary battles.",
        icon: "https://i.imgur.com/r1fy46D.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hero's Blade",
        desc: "A battered letter opener with a scrap wood handle. The wrapped handle crumbles in your hand, and is somehow sticky. Fortunately, blade itself is keen enough to draw blood.",
        icon: "https://i.imgur.com/7sR0M3V.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hero's Shortbow",
        desc: "Nothing more than a springy branch strung with twine. Though the bow creaks in protest when drawn, your arrows fly straight and true.",
        icon: "https://i.imgur.com/fJbvIks.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hero's Wand",
        desc: "It appears to be an unsharpened pencil, adorned with foil stars. The spells you cast with it work well enough, but leave behind a smell of pencil shavings.",
        icon: "https://i.imgur.com/osP7IzN.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
  ]
    
  
    await queryInterface.bulkInsert('items', items)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items')
  }
};
