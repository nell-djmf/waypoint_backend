const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)
Router.get('/:me', controller.GetOneUser)



module.exports = Router