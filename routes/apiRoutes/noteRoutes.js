const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { createNewNote, validateNote, queryId } = require('../../lib/notes')

let { notes } = require('../../db/db.json');

// gets existing notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// saves a new note
router.post('/notes', (req, res) => {
    
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

// delete a note
router.delete("/notes/:id", (req, res) => {
    
    notes = queryId(req.params.id, notes);
    
    fs.writeFileSync("./db/db.json",
        JSON.stringify({ notes }, null, 2)
    );
    
    res.json(notes);

});


module.exports = router;