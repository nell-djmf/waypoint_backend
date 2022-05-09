const Router = require('express').Router()
const controller = require('../controllers/QuestController')

Router.get('/', controller.GetAllQuests)
Router.get('/:me', controller.GetQuestLog)
Router.post('/new', controller.CreateNewQuest)
Router.put('/update/:quest', controller.UpdateQuest)
Router.delete('/delete/:quest', controller.DeleteQuest)


module.exports = Router