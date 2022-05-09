const { User } = require('../models')


const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetOneUser = async (req, res) => {
  try {
    const users = await User.findByPk(req.params.me)
    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
	GetUsers,
  GetOneUser
}