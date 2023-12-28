const router = require('express').Router()
const auth = require('../middleware/auth')
const noteControl = require("../controllers/noteControl")

router.route('/')
    .get(auth, noteControl.getNotes)
    .post(auth, noteControl.createNote)

router.route('/:id')
    .get(auth, noteControl.getNote)
    .put(auth, noteControl.updateNote)
    .delete(auth, noteControl.deleteNote)


module.exports = router