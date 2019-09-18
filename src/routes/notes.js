const { Router } = require('express')
const router = Router()
const { getNotes, createNote, getNote, delNote, updateNote } = require('../controllers/notes.controller')

router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(delNote)
module.exports = router