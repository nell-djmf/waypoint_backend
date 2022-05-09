const Router = require('express').Router()
const controller = require('../controllers/QuestController')

Router.get('/', controller.GetAllQuests)
Router.get('/:me', controller.GetQuestLog)


module.exports = Router