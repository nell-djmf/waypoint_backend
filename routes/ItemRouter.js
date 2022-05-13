const Router = require('express').Router()
const controller = require('../controllers/ItemController')

Router.get('/', controller.GetAllItems)
Router.get('/:me', controller.GetUserInventory)
Router.put('/update', controller.UpdateInventory)
Router.delete('/remove/:user/:item', controller.RemoveFromInventory)
// Router.delete('/remove', controller.RemoveFromInventory)


module.exports = Router