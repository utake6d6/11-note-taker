// path module provides utilities for working with file and directory paths
const path = require("path");
// <!-- The following HTML routes should be created:

// GET /notes - should return the notes.html file.
app.get("/notes", (req, res) => {
  res.sendFile(path.join__dirname);
});
// GET * - should return the index.html file. -->
