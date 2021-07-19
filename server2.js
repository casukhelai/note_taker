// set up the server
// USE "node server.js" IN PATH /js TO RUN SERVER
const express = require('express');
const fs = require('fs');
const path = require('path');
const html_route = require('./routes/html_route');
// const uniqid = require('uniqid');


// set up Express app
const PORT = process.env.PORT || 3001;
const app = express();

// add middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// 

app.use('/', html_route);

// add app.listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


