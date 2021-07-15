// set up the server
const express = require('express');
const path = require('path');

// set up Express app
const PORT = process.env.PORT || 3001;

// add middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// code goes here

// add app.listen
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


