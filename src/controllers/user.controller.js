const usersCtrl = {}
const User = require('../models/userDB')

// '/'
usersCtrl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}


// crear ususario 
usersCtrl.createUser = async (req, res) => {
    const { username } = req.body
    const newUser = new User({ username })
    await newUser.save()
    res.json({ message: 'Usuario Creado' })
}
// '/:ID'
usersCtrl.getUser = (req, res) => res.json({ message: [] })
usersCtrl.updateUser = (req, res) => res.json({ message: 'Nota actualizada' })

//eliminar usuario 
usersCtrl.delUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: 'Usuario Borrado' })
}

module.exports = usersCtrl