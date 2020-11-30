const fs = require('fs');
var app = require("express").Router();
var storage = require("./db/storage")
// const { inherits } = require('util');

let notes = [];
var lastID = 0;

//module.exports = function(app) {
    
  app.get("/notes", (req, res) => {
      
    storage.grabNotes().then((notes)=>res.json(notes)).catch((err)=>res.status(500).json(err));
    
});

app.post("/notes", (req, res) => {
//     req.body.id = parseInt(lastId);
//     notes.push(req.body);
//     writeToJsonFile(notes);
//     res.json(true)
    storage.newNote(req.body).then((note) => res.json(note)).catch((err)=>res.status(500).json(err));
 });

app.delete("/notes/:id", (req, res) => {
    // var filteredNotes = notes.filter(note => note.id !== parseInt(req.params.id));
    // writeToJsonFile(filteredNotes);
    // notes = filteredNotes;
    // res.json(true);
    storage.deleteNote(req.params.id).then(() => res.json({ok: true})).catch((err)=>res.status(500).json(err));
});

// function init() {
//     fs.readFile("./db/notes.json", "utf8", function (err, data))

// }

module.exports = app;
