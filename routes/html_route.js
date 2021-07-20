// const fs = require('fs');
const router = require('express').Router();
const path = require('path');


// ****************************************************************************
//   GET requests -- make the appropriate 'connections' to all relevant files
// ****************************************************************************

    // default link when an invalid request is made
    router.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    // request to the notes html file
    router.get('/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    module.exports = router;