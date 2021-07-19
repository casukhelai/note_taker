const router = require('express').Router();
const data = require('./Develop/db/db.json');
const notesList = JSON.parse(data); 

app.get('/api/notes', (req,res) => {
    res.json(notes);
});

module.exports = router;