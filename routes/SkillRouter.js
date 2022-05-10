const Router = require('express').Router()
const controller = require('../controllers/SkillbookController')

Router.get('/:id', controller.GetSkillbook)
Router.post('/new', controller.CreateNewSkillbook)



module.exports = Router