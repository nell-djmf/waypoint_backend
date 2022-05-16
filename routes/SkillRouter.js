const Router = require('express').Router()
const controller = require('../controllers/SkillbookController')

Router.get('/:id', controller.GetSkillbook)
Router.get('/', controller.GetAllSkillbook)
Router.post('/find/:user', controller.CreateNewSkillbook)
Router.put('/update/:user', controller.UpdateSkillbook )



module.exports = Router