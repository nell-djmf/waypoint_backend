const { User, Quest } = require('../models')



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

const CreateNewQuest = async (req, res) => {
  try {
    const newQuest = await Quest.create(req.body, {
    fields:["name", "desc", "skillAffinity", "type", "icon", "userId"]
  })
    res.send(newQuest)
  } catch (error) {
    console.log(error)
  }
}

const UpdateQuest = async (req, res) => {
  try {
    await Quest.update(req.body, {
      where: {
        id: req.params.quest
      }
    }
  )
    res.send('Quest updated!')
  } catch (error) {
    console.log(error)
  }
}

const DeleteQuest = async (req, res) => {
  try {
    await Quest.destroy({
      where: { id: req.params.quest }
    })
    res.send('Quest deleted!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
	GetAllQuests,
  GetQuestLog,
  CreateNewQuest,
  UpdateQuest,
  DeleteQuest
}