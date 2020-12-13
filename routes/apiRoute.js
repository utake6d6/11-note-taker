const fs = require("fs");
const express = require("express");
const app = express();

const { v4: uuidv4 } = require("uuid");

app.get("/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  res.json(notes);
});

app.post("/notes", (req, res) => {
  const newNote = req.body;
  console.log(JSON.stringify(newNote));
  newNote.id = uuidv4();
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  notes.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  console.log("New note added.");
  res.json(notes);
});

module.exports = app;
