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
    const newSkills = await Skillbook.findOrCreate({
    where: {
      userId: req.params.user
    },
    defaults: {
      con: 1,
      str: 1,
      dex: 1,
      int: 1,
      wis: 1,
      cha: 1,
      xp: 0,
      level: 1
    }
  })
    res.send(newSkills)
  } catch (error) {
    console.log(error)
  }
}


const UpdateSkillbook = async (req, res) => {
  try {
    await Skillbook.update(req.body, {
      where: {
        userId: req.params.user
      }
    }
  )
    res.send('Skills upgraded!')
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
	GetSkillbook,
  CreateNewSkillbook,
  UpdateSkillbook
}