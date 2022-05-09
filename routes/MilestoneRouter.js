const Router = require('express').Router()
const controller = require('../controllers/MilestoneController')

Router.get('/', controller.GetAllMilestones)
Router.get('/:me', controller.GetUserAchievements)
Router.put('/update', controller.UpdateAchievements)


module.exports = Router