const Router = require('express').Router()
const controller = require('../controllers/JournalController')

Router.get('/', controller.GetAllEntries)
Router.get('/:me', controller.GetUserJournal)


module.exports = Router