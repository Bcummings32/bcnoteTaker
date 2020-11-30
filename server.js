const express = require("express");
const fs = require("fs");
const path = require('path');

const html = require('./htmlRoutes')
const api = require('./apiRoutes')
//express
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(express.static('assets'));
app.use(express.static("public"));
app.use("/api", api)
app.use("/", html)

//Listener    
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

noteData = [];

// //write note to json
// app.post("/api/notes", function(req, res) {
//     try {
//         noteData = fs.readFileSync("./Develop/db/db.json", "utf8");

//         noteData = JSON.parse(noteData);
//         req.body.id = noteData.length;
//         noteData.push(req.body);
//         noteData = JSON.stringify(noteData);

//         fs.writeFile("./Develop/db/db.json", notesData, "utf8", function(err) {
//             if (err) throw err;
//           });
//           res.json(JSON.parse(noteData));
//     }
//         catch (err) {
//             throw err;
//             console.error(err);

//         }


//render function
// function noteData() {
//     fs.writeFile(JSON.stringify(), function(err, res) {
//     if (err) return console.log('error', err)
// }
// }

//look at hot restaurant

//API call response for the notes
// app.get("/api/notes", function(err, res) {
//     try {
//         noteData = fs.readFileSync("Develop/db/db.json", "utf8");
//         noteData = JSON.parse(noteData);
//     }

//     //error handling
//     catch (err) {

//     }
//     res.json(noteData);
// });


//         app.delete("/api/notes/:id", function(req, res) {
//             try {
//                 noteData = fs.readFileSync("./Develop/db/db.json", "utf8");
//                 noteData = JSON.parse(noteData);
//                 noteData = noteData.filter(function(note) {
//                     return note.id ! = req.params.id,
//                 });
               
//             }
//         }

//         module.exports = new Store()

