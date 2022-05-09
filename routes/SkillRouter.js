const Router = require('express').Router()
const controller = require('../controllers/SkillbookController')

Router.get('/:id', controller.GetSkillbook)



module.exports = Router