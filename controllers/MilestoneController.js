const { User, Milestone, Achievement } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const GetAllMilestones = async (req, res) => {
  try {
    const milestones = await Milestone.findAll()
    res.send(milestones)
  } catch (error) {
    throw error
  }
}

const GetUserAchievements = async (req, res) => {
  try {
    const achievements = await User.findByPk(req.params.me, {
      include: [
				{
          model: Milestone,
					as: 'milestone_collection'
        },
      ]
    })
    res.send(achievements)
  } catch (error) {
    throw error
  }
}

const UpdateAchievements = async (req, res) => {
  try {
  await Achievement.create(req.body, {
    fields: ["userId", "milestoneId"]
  })
  
    res.send('Milestones added to Achievements!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
	GetAllMilestones,
  GetUserAchievements,
  UpdateAchievements
}