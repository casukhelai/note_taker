// set up the server
// USE "node server.js" IN PATH /js TO RUN SERVER
const express = require('express');
const fs = require('fs');
const path = require('path');
// const uniqid = require('uniqid');


// set up Express app
const PORT = process.env.PORT || 3001;
const app = express();

// add middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// ***************
//   API Route
// ***************

module.exports = (app) => {

    // Set up JSON API file
    fs.readFile("db/db.json", "utf-8", (err, data) => {
        if (err) throw err;

        var notes = JSON.parse(data);
        // create something such that the user sets up the notes variable

// ****************************************************************************
//   GET requests -- make the appropriate 'connections' to all relevant files
// ****************************************************************************

    // default link when an invalid request is made
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    // request to the notes html file
    app.get('/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // notes json api route
    app.get('/api/notes', (req,res) => {
        res.json(notes);
    });


// ****************************************************************************
//   POST requests -- create appropriate 'destinations' for the GET requests
// ****************************************************************************

    // POST Request after note is "saved"
    app.post('/api/notes', (req,res) => {
        let newNote = req.body;
        notes.push(newNote);
        createNotes();
        console.log("test");

        // Create the notelist with the newly written note
        createNotes(noteList);
        res.send(note);
    });

    // app.post('/api/notes/:uniqid', (req,res) => {
    //     for(let i = 0; i<notesList.length; i++){
    //         if(noteList[i].id === req.params.uniqid){
    //             noteList.splice(i,1);
    //         }
    //     }
    //     createNotes(noteList);
    //     res.end();
    // })

    function createNotes() {
        fs.writeFile("../db/db.json",JSON.stringify(notes),
        (err) => (err ? console.log(err): console.log("File saved!")));
    }
    })


}

// add app.listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


