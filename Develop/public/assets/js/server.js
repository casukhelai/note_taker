// set up the server
const express = require('express');
const fs = require('fs');
const path = require('path');

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
module.exports = (app) => {
// Following will be setting up /api/notes
// need to allow the user to set up the API somehow
fs.readFile
// create something such that the user sets up the notes variable

// GET requests



// POST requests
}


// add app.listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


