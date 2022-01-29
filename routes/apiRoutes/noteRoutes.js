const router = require('express').Router();
const { createNewNote, validateNote } = require('../../lib/notes')

const { notes } = require('../../db/db.json');

// gets existing notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// saves a new note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});


module.exports = router;