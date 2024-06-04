const mongoose = require('mongoose');

const pagesSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "date": {
        type: String,
        required: true
    },
    "content": {
        type: String,
        required: true
    },
    "img":{
        type: String,
    }

});  

module.exports = mongoose.model('Page', pagesSchema);