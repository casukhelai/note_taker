// set up the server
// USE "node server.js" IN PATH /js TO RUN SERVER
const express = require('express');
const fs = require('fs');
const path = require('path');
const list= fs.readFileSync("db/db.json", "utf-8");
const noteList = JSON.parse(list);

// set up Express app
const PORT = process.env.PORT || 3001;
const app = express();

// add middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// ***************
//   API Route
// ***************

// Set up JSON API file
function createNotes(note) {
    fs.writeFile(
        path.join(__dirname, "db/db.json"),
        // parse json into stringify just in case
        JSON.stringify(note),
        // throw an error message
        err => (err ? console.log(err) : console.log("File saved!"))
    );
}

// create something such that the user sets up the notes variable

// ****************************************************************************
//   GET requests -- make the appropriate 'connections' to all relevant files
// ****************************************************************************

// request for the main page
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// request to the notes html file
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

// request the index.js file to listen to user
app.get('/assets/js/index', (req,res) => {
    res.sendFile(path.join(__dirname, '/assets/js/index'));
});

// notes json api route
app.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});

// default link when an invalid request is made
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

// ****************************************************************************
//   POST requests -- create appropriate 'destinations' for the GET requests
// ****************************************************************************

// POST Request after note is "saved"
// app.post('/api/notes', (req,res) => {
//     let newNote = req.body;
//     notes.push(newNote);
//     createNotes();
//     console.log("test");
// });

// add app.listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


