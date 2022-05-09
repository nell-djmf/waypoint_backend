const Router = require('express').Router()
const controller = require('../controllers/JournalController')

Router.get('/', controller.GetAllEntries)
Router.get('/:me', controller.GetUserJournal)
Router.post('/new', controller.CreateNewEntry)
Router.put('/update/:entry', controller.UpdateEntry)
Router.delete('/delete/:entry', controller.DeleteEntry)


module.exports = Router