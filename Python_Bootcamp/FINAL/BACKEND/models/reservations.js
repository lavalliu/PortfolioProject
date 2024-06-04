const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    menuItemNumber: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1 
    }
});

const resaSchema = new mongoose.Schema({
    guestname: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
    },
    pax: {
        type: Number,
        required: true
    },
    orders: [orderItemSchema] // Array of order items
});  

module.exports = mongoose.model('Resa', resaSchema);