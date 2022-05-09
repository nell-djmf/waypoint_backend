const Router = require('express').Router()
const controller = require('../controllers/ItemController')

Router.get('/', controller.GetAllItems)
Router.get('/:me', controller.GetUserInventory)


module.exports = Router