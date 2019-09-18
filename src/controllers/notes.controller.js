const notesCtrl = {}
const Note = require('../models/notesDB')

// '/'
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find()
    res.json(notes)
}
notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body
    const newNote = new Note({
        title,
        content,
        date,
        author

    })
    await newNote.save()
    res.json({ message: 'Nota creada' })
}
// '/:ID'
notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json(note)
}
notesCtrl.updateNote = async (req, res) => {
    const { title, content, author, date } = req.body
    await Note.findOneAndUpdate({ _id: req.params.id }, {
        title, author, content, date
    })
    res.json({ message: 'Nota actualizada' })
}



notesCtrl.delNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json({ message: 'Nota borrada' })
}

module.exports = notesCtrl
