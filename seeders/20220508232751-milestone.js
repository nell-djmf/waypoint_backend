'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const milestones = [
      {
        title: "Moving Up in the World",
        desc: "Got a Promotion! A hero shouldn't need rewards and recognition, but it sure is nice when someone notices.",
        icon: "https://i.imgur.com/TxgGdyt.png"
      },
      {
        title: "Player 2 Has Entered the Game",
        desc: "Got Married! You've finally found the companion you want to share all your adventures with.",
        icon: "https://i.imgur.com/YOPY27D.png"
      },
      {
        title: "A Journey of a Thousand Steps",
        desc: "Completed a Task! A tale for the ages begins with a single step out the door.",
        icon: "https://i.imgur.com/MFkfNXq.png"
      },
      {
        title: "A Hero Rises",
        desc: "Completed a Quest! Every victory, large or small, is your legend in the making.",
        icon: "https://i.imgur.com/MFkfNXq.png"
      },
  ]
    
  
    await queryInterface.bulkInsert('milestones', milestones)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('milestones')
  }
};
