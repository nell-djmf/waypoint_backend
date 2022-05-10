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

const CreateNewEntry = async (req, res) => {
  try {
    const newEntry = await Entry.create(req.body, {
    fields:["date", "title", "content", "type", "userId"]
  })
    res.send(newEntry)
  } catch (error) {
    console.log(error)
  }
}

const UpdateEntry = async (req, res) => {
  try {
    await Entry.update(req.body, {
      where: {
        id: req.params.entry
      }
    }
  )
    res.send('Entry updated!')
  } catch (error) {
    console.log(error)
  }
}

const DeleteEntry = async (req, res) => {
  try {
    await Entry.destroy({
      where: { 
        id: req.params.entry 
      }
    })
    res.send('Entry deleted!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
	GetAllEntries,
  GetUserJournal,
  CreateNewEntry,
  UpdateEntry,
  DeleteEntry
}