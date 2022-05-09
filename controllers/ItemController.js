const { User, Item } = require('../models')
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

module.exports = {
	GetAllItems,
  GetUserInventory
}