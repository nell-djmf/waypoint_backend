const { User, Quest } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const GetAllQuests = async (req, res) => {
  try {
    const quests = await Quest.findAll()
    res.send(quests)
  } catch (error) {
    throw error
  }
}

const GetQuestLog = async (req, res) => {
  try {
    const questlog = await User.findByPk(req.params.me, {
      include: [
				{
          model: Quest
        },
      ]
    })

    res.send(questlog)
  } catch (error) {
    throw error
  }
}

module.exports = {
	GetAllQuests,
  GetQuestLog
}