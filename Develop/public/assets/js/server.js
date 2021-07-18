// set up the server
// USE "node server.js" IN PATH /js TO RUN SERVER
const express = require('express');
const fs = require('fs');
const path = require('path');
const noteList = JSON.parse(data);

// set up Express app
const PORT = process.env.PORT || 3001;
const app = express();

// add middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// ***************
//   API Route
// ***************

// Set up API routes
// Following will be setting up /api/notes
// need to allow the user to set up the API somehow
const readFile = (note) => {
    fs.readFile(
        path.join(__dirname, "db/db.json"),
        // parse json into stringify just in case
        JSON.stringify(note),
        // throw an error message
        err => (err ? console.log(err) : console.log("File saved!"))
    );
}

// create something such that the user sets up the notes variable

// GET requests



// POST requests


 
// add app.listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


