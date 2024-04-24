// import libraries
const express = require('express');
const mongoose = require('mongoose');

//define server
const server = express();

//define routes
server.get('/', (req, res) => {
    res.json({message : 'Hello World!'});
});

//start server
port=3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});