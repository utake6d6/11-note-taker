// <!-- The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module. -->
const fs = require("fs");
const express = require("express");
const app = express();
// npm module for unique ids
const { v4: uuidv4 } = require("uuid");

// GET /api/notes - should read the db.json file and return all saved notes as JSON.
//ReferenceError: app is not defined at Object.<anonymous> (C:\Users\berto\Desktop\projects\11-note-taker\routes\apiRoute.js:4:1)
app.get("/api/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  res.json(notes);
});

// POST /api/notes - should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
app.post("/api/notes", (req, res) => {
  // receive a new note
  const newNote = req.body;
  console.log(JSON.stringify(newNote));

  // get a newNote
  newNote.id = uuidv4();

  // add it to the db.json file
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  notes.push(newNote);
  // save on the request body
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  console.log("New note added.");
  // return the new note to the client
  res.json(notes);
});

// <!-- Bonus
// You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

// DELETE /api/notes/:id - should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file. -->
app.delete("/api/notes/:id", (req, res) => {
  // read all notes from the db.json file
  // remove the note with the given id property
  // then rewrite the notes to the db.json file
});

module.exports = app;
