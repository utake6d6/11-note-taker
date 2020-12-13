// path module provides utilities for working with file and directory paths
const path = require("path");
const express = require("express");
// creates modular, mountable route handlers
const app = express();
// <!-- The following HTML routes should be created:

// GET /notes - should return the notes.html file.
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
// GET * - should return the index.html file. -->
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = app;
