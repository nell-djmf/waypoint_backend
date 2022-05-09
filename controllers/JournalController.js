const { User, Entry } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const GetAllEntries = async (req, res) => {
  try {
    const entries = await Entry.findAll()
    res.send(entries)
  } catch (error) {
    throw error
  }
}

const GetUserJournal = async (req, res) => {
  try {
    const journal = await User.findByPk(req.params.me, {
      include: [
				{
          model: Entry
        }
      ]
    })

    res.send(journal)
  } catch (error) {
    throw error
  }
}

module.exports = {
	GetAllEntries,
  GetUserJournal
}