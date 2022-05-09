const { User, Entry, Quest, Milestone, Item, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetOneUser = async (req, res) => {
  try {
    const users = await User.findByPk(req.params.me, {
      include: [
        {
          model: Entry,
        },
				{
          model: Quest,
        },
				{
          model: Item,
					as: 'inv_owner'
        },
				{
          model: Milestone,
					as: 'milestone_collection'
        },

      ]
    })

    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
	GetUsers,
  GetOneUser
}