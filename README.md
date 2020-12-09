# Note Taker

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

<img src="assets\images\install.png">

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description:

## Installation:

## Usage:

![Usage]()

## License:

MIT

## Contributing:

This project may be forked.

## Tests:

## Questions:

If you have any questions please reach out to the developer:

Github: <https://github.com/utake6d6/11-note-taker>

Email: <utake6d6@gmail.com>

<!-- AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete -->

<!-- GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column -->

<!-- The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module. -->

<!-- The following HTML routes should be created:

GET /notes - should return the notes.html file.

GET * - should return the index.html file. -->

<!-- The following API routes should be created:

GET /api/notes - should read the db.json file and return all saved notes as JSON.

POST /api/notes - should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you). -->

<!-- Bonus
You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

DELETE /api/notes/:id - should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file. -->
