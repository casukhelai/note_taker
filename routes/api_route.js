const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req,res) => {
    // read db.json file
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    console.log("test");

    res.json(data);
});

// /api/notes POST request
router.post('/api/notes', (req,res) => {
    // access data note from client
    const newNote = req.body;

    console.log("created new note!");

    // get a unique id from uuid
    newNote.id = uuidv4();

    // grab data from the db.json & push the newNote into the database
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    data.push(newNote);

    // write to db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(data));
    console.log('\nSuccesfully added the new note to db.json!');

    res.json(data);
});

router.delete('/api/notes/:id', (req,res) => {
    // access data note from client
    let id = req.params.id;
    
    console.log("this is gonna delete ur note");

    // grab data from the db.json & push the newNote into the database
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    // can use filter or for loop
    for(let i=0; i<data.length;i++){
        if(id == data[i].id){
            data.splice(i,1);

        // write to db.json
            fs.writeFileSync('./db/db.json', JSON.stringify(data));
            console.log('\nSuccesfully deleted the note!');

            res.json(data);
            return;
        }
    }

    
});


module.exports = router;