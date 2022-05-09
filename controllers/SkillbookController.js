const { Skillbook } = require('../models')

const GetSkillbook = async (req, res) => {
  try {
    const skills = await Skillbook.findOne({where: {
      userId: req.params.id
    }})
    res.send(skills)
  } catch (error) {
    throw error
  }
}

module.exports = {
	GetSkillbook
}