const Router = require('express').Router()
const controller = require('../controllers/MilestoneController')

Router.get('/', controller.GetAllMilestones)
Router.get('/:me', controller.GetUserAchievements)


module.exports = Router