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

const CreateNewSkillbook = async (req, res) => {
  try {
    const newSkills = await Skillbook.create(req.body, {
    fields:["con", "str", "dex", "int", "wis", "cha", "userId"]
  })
    res.send(newSkills)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
	GetSkillbook,
  CreateNewSkillbook
}