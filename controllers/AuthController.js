const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.email },
            raw: true
        })
        if (
            user &&
            (await middleware.comparePassword(user.passwordDigest, req.body.password))
        ) {
            let payload = {
                id: user.id,
                email: user.email,
                username: user.username,
                avatar: user.avatar
            }
            let token = middleware.createToken(payload)
            return res.send({ user: payload, token })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
        throw error
    }
}

const Register = async (req, res) => {
    try {
        console.log('req.body', req.body)
        const { username, email, password, avatar } = req.body
        let passwordDigest = await middleware.hashPassword(password)
        const user = await User.create({ username, email, passwordDigest, avatar })
        res.send(user)
    } catch (error) {
        throw error
    }
}

const CheckSession = async (req, res) => {
    const { payload } = res.locals
    res.send(payload)
}

const UpdatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body
        const user = await User.findByPk(req.params.user_id)
        if (
            user &&
            (await middleware.comparePassword(
                user.dataValues.passwordDigest,
                oldPassword
            ))
        ) {
            let passwordDigest = await middleware.hashPassword(newPassword)
            await user.update({ passwordDigest })
            return res.send({ status: 'Ok', payload: user })
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {

    }
} 


module.exports = {
    Login,
    Register,
    CheckSession,
    UpdatePassword
}

