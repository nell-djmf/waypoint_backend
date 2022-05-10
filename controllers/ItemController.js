const { User, Item, Inventory } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const GetAllItems = async (req, res) => {
  try {
    const items = await Item.findAll()
    res.send(items)
  } catch (error) {
    throw error
  }
}

const GetUserInventory = async (req, res) => {
  try {
    const inv = await User.findByPk(req.params.me, {
      include: [
				{
          model: Item,
					as: 'inv_owner'
        }
      ]
    })
    res.send(inv)
  } catch (error) {
    throw error
  }
}

const UpdateInventory = async (req, res) => {
  try {
  await Inventory.bulkCreate(req.body, {
    fields:["userId", "itemId"]
  })
    res.send('Items added to Inventory!')
  } catch (error) {
    console.log(error)
  }
}

const RemoveFromInventory = async (req, res) => {
  try {
    await Inventory.destroy({
      where: {
        itemId: req.params.item,
        userId:req.params.user
      }
    })
    res.send('Item removed from Inventory!')
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
	GetAllItems,
  GetUserInventory,
  UpdateInventory,
  RemoveFromInventory
}