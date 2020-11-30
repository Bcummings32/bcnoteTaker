//all this linked with assets already
const util = require("util");
const fs = require("fs");
// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
//const uuidv1 = require("uuid/v1");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Storage {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  grabNotes() {
    return this.read().then((notes) => {
      let parsedNotes;
      // If notes isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }
      return parsedNotes;
    });
  }
  newNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }
    // Add a unique id to the note using uuid package
    
    //random id needs to be generated here

    const newNote = { title, text, id: Math.floor(Math.random() * 1000)}
    // Get all notes, add the new note, write all the updated notes, return the newNote
    return this.grabNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }
  deleteNote(id) {
      //grab not id and delete
    return this.grabNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}
module.exports = new Storage();
