const { Router } = require('express')
const router = Router()
const { getUsers, createUser, getUser, updateUser, delUser } = require('../controllers/user.controller')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(delUser)
module.exports = router