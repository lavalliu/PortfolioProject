const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true,
        unique: true
    },
    "price": {
        type: Number,
    },
    "description": {
        type: String,
    },
    "category": {
        type: String,
    },
    "quantity": {
        type: Number,
    }
});  

module.exports = mongoose.model('Product', productSchema);