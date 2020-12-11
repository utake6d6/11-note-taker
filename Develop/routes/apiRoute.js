// <!-- The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module. -->
const fs = require("fs");
// GET /api/notes - should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => {
  res.json(savedNotes);
});
// POST /api/notes - should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you). -->
app.post("/api/notes", (req, res) => {
  // receive a new note to save on the request body & add it to the db.json file

  // return the new note to the client
  return res.json(savedNotes);
});
// <!-- Bonus
// You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

// DELETE /api/notes/:id - should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file. -->
app.delete("/api/notes/:id", (req, res) => {});
