var path = require("path");
var router = require("express").Router();

//module.exports = function (app) {
    router.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });

    //css link
    // app.get("/styles", function(req, res) {
    //     res.sendFile(path.join(_dirname, "../public/notes.html"));
    // }

    router.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/index.html"));
      });
   
module.exports = router

