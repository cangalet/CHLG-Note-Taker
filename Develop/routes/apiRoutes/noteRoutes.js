const router = require('express').Router();

const { notes } = require('../../db/db.json');

// gets existing notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// saves a new note
router.post('/notes', )


module.exports = router;