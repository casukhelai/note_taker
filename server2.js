// set up the server
// USE "node server.js" IN PATH /js TO RUN SERVER
const express = require('express');
const path = require('path');
const html_route = require('./routes/html_route');
const api_route = require('./routes/api_route');

// set up Express app
const PORT = process.env.PORT || 3001;
const app = express();

// add middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// call routes
app.use('/', html_route);
app.use('/', api_route);

// add app.listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


