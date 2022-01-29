const fs = require('fs');
const path = require('path');
var uniqid = require('uniqid')

function createNewNote(body, notesArray) {
    const note = body;
    const noteId = uniqid().toString();
    note.id = noteId;

    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
      return false;
    }
    if (!note.text || typeof note.text !== "string") {
      return false;
    }
    return true;
}

function queryId(id, notesArray) {
  const result = notesArray.filter((note) => note.id !== id);
  return result;
}


module.exports = {
    createNewNote,
    validateNote,
    queryId
};